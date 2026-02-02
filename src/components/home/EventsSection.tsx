import Image from 'next/image';
import { EventCard } from '../ui/Card';
import { Container } from '../layout/Container';

export function EventsSection() {
  return (
    <section className="py-20 bg-cream-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-4">
              Entertainment
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Live Music at Oak & Barrel
            </h2>
            <p className="text-stone-gray mb-8">
              Enjoy your meal with the sounds of live music. Our talented musicians
              create the perfect atmosphere for an unforgettable dining experience.
            </p>

            <div className="space-y-4">
              <EventCard
                title="Friday Evenings"
                subtitle="Jazz & Blues Nights"
                time="7:00 PM - 10:00 PM"
                description="Unwind after a long week with smooth jazz and soulful blues performances from local artists."
              />
              <EventCard
                title="Sunday Afternoons"
                subtitle="Acoustic Sessions"
                time="2:00 PM - 5:00 PM"
                description="Perfect for family brunches and relaxed dining with mellow acoustic performances."
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-high aspect-[4/3]">
              <Image
                src="/images/hero/live-music.webp"
                alt="Live music performance at Oak & Barrel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-honey-gold animate-pulse" />
                  <span className="text-cream-white font-medium">Live Music This Weekend</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blush-pink -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
