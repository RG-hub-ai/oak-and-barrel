import { Container } from '../layout/Container';

const philosophyItems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Quality Ingredients',
    description: 'We source only the finest locally-grown, seasonal produce and premium meats from trusted suppliers.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Family Atmosphere',
    description: 'From couples to large families, everyone is welcome. We create a warm, inviting space for all ages.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Culinary Excellence',
    description: 'Every dish is crafted with passion and precision, blending traditional techniques with creative innovation.',
  },
];

export function Philosophy() {
  return (
    <section className="py-20 bg-cream-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-4">
            What We Believe
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Our Philosophy
          </h2>
          <p className="text-stone-gray max-w-2xl mx-auto">
            The principles that guide everything we do at Oak & Barrel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophyItems.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl bg-warm-linen/50 hover:bg-warm-linen transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-honey-gold/10 flex items-center justify-center mx-auto mb-6 text-honey-gold">
                {item.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="text-stone-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
