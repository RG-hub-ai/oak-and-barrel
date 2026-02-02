# fetch-image

name: fetch-image
disable-model-invocation: true
allowed-tools: Bash(node *)

## Description

Downloads images from URLs, resizes them, converts to WebP format, and saves them to the public folder for better caching and performance. Uses Sharp for high-performance image processing.

## Usage

```bash
/fetch-image --url "<image-url>" --output <filename> [options]
```

## Arguments

| Argument | Required | Description | Default |
|----------|----------|-------------|---------|
| `--url` | Yes | Source image URL | - |
| `--output` | Yes | Output filename (without extension) | - |
| `--width` | No | Target width in pixels | Original |
| `--height` | No | Target height in pixels | Original |
| `--quality` | No | WebP quality (1-100) | 80 |
| `--fit` | No | Resize fit mode: cover/contain/fill/inside/outside | cover |
| `--dest` | No | Destination folder | public/images |

## Examples

### Basic usage - download and convert to WebP
```bash
/fetch-image --url "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" --output hero-image --width 1920 --height 1080
```

### Thumbnail with aspect ratio preserved
```bash
/fetch-image --url "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" --output pizza-thumb --width 400
```

### High quality hero image
```bash
/fetch-image --url "https://example.com/photo.jpg" --output banner --width 2560 --quality 90
```

### Custom destination folder
```bash
/fetch-image --url "https://example.com/photo.jpg" --output avatar --width 200 --height 200 --dest public/avatars
```

## After Running

Use the generated image in Next.js:

```jsx
<Image src="/images/hero-image.webp" alt="Hero" width={1920} height={1080} />
```

## Instructions

Run the fetch-image script with the provided arguments:

```bash
node .claude/skills/fetch-image/scripts/fetch-image.mjs [arguments]
```
