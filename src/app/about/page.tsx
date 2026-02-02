'use client';

import { Navigation, Footer } from '@/components/layout';
import { AboutHero, FounderStory, Timeline, Philosophy, Gallery } from '@/components/about';
import { ReservationModal } from '@/components/modal';
import { useModal } from '@/hooks/useModal';

export default function AboutPage() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Navigation onReservationClick={open} />
      <main>
        <AboutHero />
        <FounderStory />
        <Timeline />
        <Philosophy />
        <Gallery />
      </main>
      <Footer />
      <ReservationModal isOpen={isOpen} onClose={close} />
    </>
  );
}
