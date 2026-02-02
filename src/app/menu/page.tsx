'use client';

import { Navigation, Footer, Container } from '@/components/layout';
import { MenuBook } from '@/components/menu';
import { ReservationModal } from '@/components/modal';
import { useModal } from '@/hooks/useModal';

export default function MenuPage() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Navigation onReservationClick={open} />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 lg:py-16 bg-cream-white">
          <Container>
            <div className="text-center mb-8 lg:mb-12">
              <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-4">
                Our Menu
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
                Explore Our Dishes
              </h1>
              <p className="text-stone-gray max-w-2xl mx-auto">
                From appetizers to desserts, discover our carefully curated selection
                of dishes crafted with passion and the finest ingredients.
              </p>
            </div>
          </Container>
        </section>

        {/* Menu Book */}
        <section className="py-8 lg:py-16 bg-warm-linen lg:bg-transparent">
          <Container>
            <MenuBook />
          </Container>
        </section>

        {/* Dietary Note */}
        <section className="py-12 bg-cream-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-4">
                Dietary Information
              </h3>
              <p className="text-stone-gray mb-6">
                We cater to various dietary requirements. Please inform your server of any
                allergies or dietary restrictions, and we&apos;ll be happy to accommodate your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-warm-linen rounded-full">
                  <span className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-stone-gray">Vegan Options</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-warm-linen rounded-full">
                  <span className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="text-sm text-stone-gray">Vegetarian Options</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-warm-linen rounded-full">
                  <span className="w-3 h-3 rounded-full bg-info" />
                  <span className="text-sm text-stone-gray">Gluten-Free Available</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <ReservationModal isOpen={isOpen} onClose={close} />
    </>
  );
}
