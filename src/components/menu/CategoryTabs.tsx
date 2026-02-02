'use client';

import { MenuCategory, categoryLabels } from '@/data/menu-items';

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
}

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium
            transition-all duration-200
            ${activeCategory === category
              ? 'bg-honey-gold text-charcoal'
              : 'bg-warm-linen text-stone-gray hover:bg-honey-gold/20'}
          `}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
}
