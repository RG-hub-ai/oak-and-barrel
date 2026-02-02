interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export function StarRating({ rating, maxRating = 5, size = 'sm', className = '' }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const filled = index < Math.floor(rating);
        const partial = !filled && index < rating;

        return (
          <svg
            key={index}
            className={`${sizeStyles[size]} ${filled || partial ? 'text-honey-gold' : 'text-stone-gray/30'}`}
            fill={filled ? 'currentColor' : partial ? 'url(#partial)' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={filled || partial ? 0 : 1.5}
          >
            {partial && (
              <defs>
                <linearGradient id="partial">
                  <stop offset={`${(rating % 1) * 100}%`} stopColor="currentColor" />
                  <stop offset={`${(rating % 1) * 100}%`} stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        );
      })}
    </div>
  );
}
