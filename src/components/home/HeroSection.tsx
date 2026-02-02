import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';

interface HeroSectionProps {
  onReservationClick: () => void;
}

export function HeroSection({ onReservationClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-radial-burst opacity-60 -z-10 translate-x-1/4" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-6">
              Family Restaurant Since 2004
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              We Serve The{' '}
              <span className="text-honey-gold">Taste</span> You Love
            </h1>
            <p className="text-stone-gray text-lg leading-relaxed mb-8">
              Experience the finest steaks, fresh sushi, gourmet burgers, and craft beers
              in a warm, family-friendly atmosphere. Live music on Friday evenings and Sunday afternoons.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={onReservationClick}>
                Make Reservation
              </Button>
              <Link href="/menu">
                <Button variant="secondary" size="lg">
                  Explore Menu
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-oak-brown/10">
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-oak-brown">
                  20+
                </div>
                <div className="text-stone-gray text-sm">Years of Excellence</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-oak-brown">
                  50+
                </div>
                <div className="text-stone-gray text-sm">Signature Dishes</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-oak-brown">
                  4.9
                </div>
                <div className="text-stone-gray text-sm">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -inset-8 rounded-full bg-blush-pink opacity-50 -z-10" />
              <div className="absolute -inset-4 rounded-full bg-blush-pink-light opacity-70 -z-10" />

              {/* Main image */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-intense">
                <Image
                  src="/images/hero/gourmet-steak.webp"
                  alt="Gourmet steak with garnish"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 450px"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 bg-cream-white rounded-2xl shadow-medium p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-honey-gold/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-honey-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Top Rated</div>
                    <div className="text-xs text-stone-gray">Best in Manhattan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
