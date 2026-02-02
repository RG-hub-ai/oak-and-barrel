import Image from 'next/image';
import { Container } from '../layout/Container';

export function FounderStory() {
  return (
    <section className="py-20 bg-cream-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-high aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/about/founder-portrait.webp"
                alt="Leon van Zyl, Founder of Oak & Barrel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-honey-gold/20 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blush-pink -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-4">
              The Founder
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Meet Leon van Zyl
            </h2>
            <div className="space-y-4 text-stone-gray leading-relaxed">
              <p>
                In 2004, Leon van Zyl had a simple dream: to create a place where families
                could gather around great food and good company. Born in South Africa and
                trained in some of New York&apos;s finest kitchens, Leon brought his passion for
                bold flavors and warm hospitality to Manhattan&apos;s bustling dining scene.
              </p>
              <p>
                The Oak and Barrel was born from his belief that a restaurant should feel
                like home—but with better food. Drawing inspiration from both his African
                roots and his classical European training, Leon crafted a menu that celebrates
                quality ingredients and time-honored cooking techniques.
              </p>
              <p>
                &ldquo;Every dish we serve carries a piece of my journey,&rdquo; Leon often says.
                &ldquo;From the spice markets of Cape Town to the fine dining rooms of Manhattan,
                I&apos;ve learned that great food is about more than just taste—it&apos;s about the
                memories we create together.&rdquo;
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-oak-brown/10">
              <p className="font-[family-name:var(--font-display)] text-2xl italic text-oak-brown">
                Leon van Zyl
              </p>
              <p className="text-stone-gray text-sm">Founder & Executive Chef</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
