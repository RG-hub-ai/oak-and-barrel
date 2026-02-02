'use client';

import { useState } from 'react';
import { MenuItem } from './MenuItem';
import { CategoryTabs } from './CategoryTabs';
import {
  MenuCategory,
  menuCategories,
  categoryLabels,
  getMenuItemsByCategory,
} from '@/data/menu-items';

// Group categories into page spreads
const pageGroups: MenuCategory[][] = [
  ['starters', 'soup'],
  ['pizza', 'pasta'],
  ['burgers', 'main-courses'],
  ['salads', 'sides', 'desserts'],
  ['drinks', 'kids'],
];

export function MenuBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<MenuCategory>('starters');

  const goToPage = (pageIndex: number) => {
    if (isAnimating || pageIndex === currentPage) return;
    if (pageIndex < 0 || pageIndex >= pageGroups.length) return;

    setIsAnimating(true);
    setCurrentPage(pageIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const currentCategories = pageGroups[currentPage];

  return (
    <>
      {/* Desktop Book View */}
      <div className="hidden lg:block">
        <div className="wood-texture rounded-3xl p-8 shadow-intense">
          {/* Book */}
          <div className="relative bg-[#F5EDE4] rounded-lg shadow-high max-w-5xl mx-auto overflow-hidden">
            {/* Book spine shadow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent z-10 pointer-events-none" />

            {/* Pages container */}
            <div className="flex min-h-[600px]" style={{ perspective: '2000px' }}>
              {/* Left page */}
              <div className="flex-1 p-8 pr-12 paper-texture bg-[#FDF8F3]/80 relative">
                <div className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-black/5" />
                {currentCategories[0] && (
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 pb-2 border-b-2" style={{ color: '#5C4033', borderColor: 'rgba(232, 168, 73, 0.3)' }}>
                      {categoryLabels[currentCategories[0]]}
                    </h2>
                    <div className="space-y-1">
                      {getMenuItemsByCategory(currentCategories[0]).map((item) => (
                        <MenuItem key={item.id} item={item} layout="book" />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right page */}
              <div className="flex-1 p-8 pl-12 paper-texture bg-[#FDF8F3]/80 relative">
                <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-l from-transparent to-black/5" />
                {currentCategories.slice(1).map((category) => (
                  <div key={category} className="mb-8 last:mb-0">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 pb-2 border-b-2" style={{ color: '#5C4033', borderColor: 'rgba(232, 168, 73, 0.3)' }}>
                      {categoryLabels[category]}
                    </h2>
                    <div className="space-y-1">
                      {getMenuItemsByCategory(category).map((item) => (
                        <MenuItem key={item.id} item={item} layout="book" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0 || isAnimating}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/80 text-cream-white flex items-center justify-center disabled:opacity-30 hover:bg-charcoal transition-all duration-200 z-20"
              aria-label="Previous page"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pageGroups.length - 1 || isAnimating}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/80 text-cream-white flex items-center justify-center disabled:opacity-30 hover:bg-charcoal transition-all duration-200 z-20"
              aria-label="Next page"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Page indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {pageGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPage
                    ? 'bg-honey-gold w-8'
                    : 'bg-cream-white/50 hover:bg-cream-white/80'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Grid View */}
      <div className="lg:hidden">
        <div className="sticky top-16 bg-cream-white/95 backdrop-blur-md py-4 -mx-4 px-4 z-10">
          <CategoryTabs
            categories={menuCategories}
            activeCategory={mobileCategory}
            onCategoryChange={setMobileCategory}
          />
        </div>

        <div className="mt-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4" style={{ color: '#2D2A26' }}>
            {categoryLabels[mobileCategory]}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {getMenuItemsByCategory(mobileCategory).map((item) => (
              <MenuItem key={item.id} item={item} layout="grid" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
