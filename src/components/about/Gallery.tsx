import Image from 'next/image';
import { Container } from '../layout/Container';

const galleryImages = [
  {
    src: '/images/gallery/restaurant-interior.webp',
    alt: 'Restaurant interior with warm lighting',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/gallery/chef-preparing.webp',
    alt: 'Chef preparing food',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/happy-diners.webp',
    alt: 'Happy diners enjoying their meal',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/bar-area.webp',
    alt: 'Restaurant bar area',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/plated-dish.webp',
    alt: 'Beautifully plated dish',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/wine-selection.webp',
    alt: 'Wine selection',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/table-setting.webp',
    alt: 'Table setting',
    span: 'col-span-1 row-span-1',
  },
];

export function Gallery() {
  return (
    <section className="py-20 bg-warm-linen">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-4">
            Gallery
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            A Glimpse Inside
          </h2>
          <p className="text-stone-gray max-w-2xl mx-auto">
            Experience the warmth and elegance of Oak & Barrel through our gallery
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
