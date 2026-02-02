import { Container } from '../layout/Container';

const milestones = [
  {
    year: '2004',
    title: 'Grand Opening',
    description: 'Oak & Barrel opens its doors in Manhattan, bringing a new dining experience to the city.',
  },
  {
    year: '2008',
    title: 'Craft Beer Program',
    description: 'Introduced our signature craft beer selection, partnering with local breweries.',
  },
  {
    year: '2012',
    title: 'Live Music Nights',
    description: 'First jazz nights began, adding a new dimension to the dining experience.',
  },
  {
    year: '2018',
    title: 'Restaurant Renovation',
    description: 'Complete renovation featuring the iconic oak wood interior we\'re known for today.',
  },
  {
    year: '2024',
    title: '20 Years of Excellence',
    description: 'Celebrating two decades of serving unforgettable meals and creating lasting memories.',
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-warm-linen">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Milestones Through the Years
          </h2>
          <p className="text-stone-gray max-w-2xl mx-auto">
            From our humble beginnings to becoming a Manhattan institution
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-honey-gold/30 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-honey-gold flex items-center justify-center shadow-gold">
                    <span className="font-[family-name:var(--font-display)] font-bold text-charcoal">
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}
                >
                  <div className="bg-cream-white rounded-xl p-6 shadow-low">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-stone-gray">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
