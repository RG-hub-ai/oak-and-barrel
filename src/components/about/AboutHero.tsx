import Image from 'next/image';
import { Container } from '../layout/Container';

export function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/about/hero-background.webp"
          alt="Oak & Barrel restaurant interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
      </div>

      <Container>
        <div className="text-center text-cream-white">
          <span className="inline-block px-4 py-2 bg-honey-gold/20 text-honey-gold font-medium text-sm rounded-full mb-6 backdrop-blur-sm">
            Established 2004
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-cream-white/80 text-lg max-w-2xl mx-auto">
            A journey of passion, flavor, and family that began two decades ago
          </p>
        </div>
      </Container>
    </section>
  );
}
