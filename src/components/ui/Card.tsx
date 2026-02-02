import { HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import { StarRating } from './StarRating';
import { Badge, BadgeVariant } from './Badge';
import { Button } from './Button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  elevated?: boolean;
  hover?: boolean;
}

export function Card({ children, className = '', elevated = false, hover = true, ...props }: CardProps) {
  return (
    <div
      className={`
        bg-cream-white rounded-2xl
        ${elevated ? 'shadow-medium' : 'shadow-low border border-oak-brown/[0.06]'}
        ${hover ? 'transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-medium' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  description: string;
  price: number;
  badge?: {
    text: string;
    variant: BadgeVariant;
  };
  onAction?: () => void;
  actionLabel?: string;
}

export function ProductCard({
  image,
  title,
  rating,
  description,
  price,
  badge,
  onAction,
  actionLabel = 'Order Now',
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-charcoal mb-1">
          {title}
        </h3>
        <StarRating rating={rating} className="mb-2" />
        <p className="text-stone-gray text-sm leading-relaxed mb-3 flex-1 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-[family-name:var(--font-display)] font-bold text-xl text-oak-brown">
            ${price.toFixed(2)}
          </span>
          {onAction && (
            <Button variant="primary" size="sm" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

interface EventCardProps {
  title: string;
  subtitle: string;
  time: string;
  description: string;
}

export function EventCard({ title, subtitle, time, description }: EventCardProps) {
  return (
    <Card className="p-6" hover={false}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-honey-gold/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-honey-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl text-charcoal">
            {title}
          </h3>
          <p className="text-honey-gold font-medium text-sm mb-1">{subtitle}</p>
          <p className="text-stone-gray text-sm mb-2">{time}</p>
          <p className="text-stone-gray text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
