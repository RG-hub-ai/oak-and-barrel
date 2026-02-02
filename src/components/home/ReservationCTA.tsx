import Image from 'next/image';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';

interface ReservationCTAProps {
  onReservationClick: () => void;
}

export function ReservationCTA({ onReservationClick }: ReservationCTAProps) {
  return (
    <section className="py-20 bg-warm-linen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial-burst opacity-40 -z-10" />

      <Container>
        <div className="relative text-center max-w-3xl mx-auto">
          {/* Floating food images */}
          <div className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-high">
              <Image
                src="/images/hero/floating-food-left.webp"
                alt="Restaurant dish"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-high">
              <Image
                src="/images/hero/floating-food-right.webp"
                alt="Restaurant dish"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-6">
            Reserve Your Table
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Do You Have Any Dinner Plan Today?
          </h2>
          <p className="text-stone-gray text-lg mb-8 max-w-xl mx-auto">
            Reserve your table now and experience the perfect blend of exceptional food,
            warm hospitality, and memorable moments.
          </p>
          <Button size="lg" onClick={onReservationClick} className="shadow-gold">
            Make Reservation
          </Button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-oak-brown/10">
            <div className="flex items-center gap-2 text-stone-gray">
              <svg className="w-5 h-5 text-honey-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free Cancellation</span>
            </div>
            <div className="flex items-center gap-2 text-stone-gray">
              <svg className="w-5 h-5 text-honey-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2 text-stone-gray">
              <svg className="w-5 h-5 text-honey-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Best Table Guaranteed</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
