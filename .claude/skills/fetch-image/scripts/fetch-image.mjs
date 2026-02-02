#!/usr/bin/env node

import sharp from 'sharp';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Parse command line arguments
function parseArgs(args) {
  const parsed = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const value = args[i + 1];
      if (value && !value.startsWith('--')) {
        parsed[key] = value;
        i++;
      } else {
        parsed[key] = true;
      }
    }
  }
  return parsed;
}

// Fetch image from URL
async function fetchImage(url) {
  console.log(`Fetching image from: ${url}`);

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Process and save image
async function processImage(buffer, options) {
  const { output, width, height, quality, fit, dest } = options;

  // Create sharp instance
  let image = sharp(buffer);

  // Get original metadata
  const metadata = await image.metadata();
  console.log(`Original image: ${metadata.width}x${metadata.height} (${metadata.format})`);

  // Resize if dimensions provided
  if (width || height) {
    const resizeOptions = {
      fit: fit || 'cover',
      withoutEnlargement: true,
    };

    if (width) resizeOptions.width = parseInt(width, 10);
    if (height) resizeOptions.height = parseInt(height, 10);

    image = image.resize(resizeOptions);
    console.log(`Resizing to: ${width || 'auto'}x${height || 'auto'} (fit: ${resizeOptions.fit})`);
  }

  // Convert to WebP
  const webpQuality = parseInt(quality, 10) || 80;
  image = image.webp({ quality: webpQuality });
  console.log(`Converting to WebP (quality: ${webpQuality})`);

  // Get the output buffer
  const outputBuffer = await image.toBuffer();
  const outputInfo = await sharp(outputBuffer).metadata();

  // Ensure destination directory exists
  const destDir = dest || 'public/images';
  await mkdir(destDir, { recursive: true });

  // Save file
  const outputPath = join(destDir, `${output}.webp`);
  await writeFile(outputPath, outputBuffer);

  console.log(`\nSaved: ${outputPath}`);
  console.log(`Final size: ${outputInfo.width}x${outputInfo.height}`);
  console.log(`File size: ${(outputBuffer.length / 1024).toFixed(1)} KB`);

  return outputPath;
}

// Main function
async function main() {
  const args = parseArgs(process.argv.slice(2));

  // Validate required arguments
  if (!args.url) {
    console.error('Error: --url is required');
    console.error('Usage: node fetch-image.mjs --url <url> --output <name> [--width <px>] [--height <px>] [--quality <1-100>] [--fit <mode>] [--dest <folder>]');
    process.exit(1);
  }

  if (!args.output) {
    console.error('Error: --output is required');
    console.error('Usage: node fetch-image.mjs --url <url> --output <name> [--width <px>] [--height <px>] [--quality <1-100>] [--fit <mode>] [--dest <folder>]');
    process.exit(1);
  }

  try {
    // Fetch the image
    const imageBuffer = await fetchImage(args.url);

    // Process and save
    const outputPath = await processImage(imageBuffer, args);

    console.log('\nDone! Use in Next.js:');
    const relativePath = outputPath.replace(/^public/, '');
    console.log(`<Image src="${relativePath}" alt="..." />`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
