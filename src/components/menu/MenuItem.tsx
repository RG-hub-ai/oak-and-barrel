import Image from 'next/image';
import { Badge } from '../ui/Badge';
import { MenuItem as MenuItemType } from '@/data/menu-items';

interface MenuItemProps {
  item: MenuItemType;
  layout?: 'book' | 'grid';
}

export function MenuItem({ item, layout = 'book' }: MenuItemProps) {
  if (layout === 'grid') {
    return (
      <div className="rounded-xl overflow-hidden shadow-low hover:shadow-medium transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#FDF8F3' }}>
        <div className="relative aspect-square">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {item.badge && (
            <div className="absolute top-3 left-3">
              <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-[family-name:var(--font-display)] font-semibold mb-1" style={{ color: '#2D2A26' }}>
            {item.name}
          </h3>
          <p className="text-sm line-clamp-2 mb-2" style={{ color: '#8B8178' }}>{item.description}</p>
          <div className="font-[family-name:var(--font-display)] font-bold text-lg" style={{ color: '#5C4033' }}>
            ${item.price.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }

  // Book layout
  return (
    <div className="flex gap-4 py-4 border-b last:border-b-0" style={{ borderColor: 'rgba(92, 64, 51, 0.1)' }}>
      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-semibold flex items-center gap-2 flex-wrap" style={{ color: '#2D2A26' }}>
              {item.name}
              {item.badge && (
                <Badge variant={item.badge.variant} className="text-[10px] px-2 py-0.5">
                  {item.badge.text}
                </Badge>
              )}
            </h3>
            <p className="text-sm line-clamp-2 mt-1" style={{ color: '#8B8178' }}>{item.description}</p>
          </div>
          <div className="font-[family-name:var(--font-display)] font-bold whitespace-nowrap" style={{ color: '#5C4033' }}>
            ${item.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
