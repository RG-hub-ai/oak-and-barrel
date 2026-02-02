import { ProductCard } from '../ui/Card';
import { Container } from '../layout/Container';
import { featuredItems } from '@/data/menu-items';

export function PopularDishes() {
  return (
    <section className="py-20 bg-warm-linen">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-honey-gold-subtle text-honey-gold-dark font-medium text-sm rounded-full mb-4">
            Customer Favorites
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Our Popular Dishes
          </h2>
          <p className="text-stone-gray max-w-2xl mx-auto">
            Discover the dishes that keep our guests coming back for more.
            Each one crafted with passion and the finest ingredients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.name}
              rating={item.rating}
              description={item.description}
              price={item.price}
              badge={item.badge}
              actionLabel="Order Now"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
