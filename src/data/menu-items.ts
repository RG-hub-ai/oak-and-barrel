import { BadgeVariant } from '@/components/ui/Badge';

export type MenuCategory =
  | 'pizza'
  | 'pasta'
  | 'starters'
  | 'soup'
  | 'burgers'
  | 'main-courses'
  | 'salads'
  | 'sides'
  | 'desserts'
  | 'drinks'
  | 'kids';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  badge?: {
    text: string;
    variant: BadgeVariant;
  };
  image: string;
  rating: number;
}

export const categoryLabels: Record<MenuCategory, string> = {
  pizza: 'Pizza',
  pasta: 'Pasta',
  starters: 'Starters',
  soup: 'Soups',
  burgers: 'Burgers',
  'main-courses': 'Main Courses',
  salads: 'Salads',
  sides: 'Sides',
  desserts: 'Desserts',
  drinks: 'Drinks',
  kids: "Kids' Menu",
};

export const menuItems: MenuItem[] = [
  // Pizza
  {
    id: 'margherita',
    name: 'Margherita Classic',
    description: 'Thin pizza dough with tomato sauce, fresh mozzarella, and basil',
    price: 14.50,
    category: 'pizza',
    badge: { text: 'Vegetarian', variant: 'vegetarian' },
    image: '/images/menu/margherita-classic.webp',
    rating: 4.5,
  },
  {
    id: 'diavola',
    name: 'Diavola Piccante',
    description: 'Pizza with spicy salami, chili peppers, and mozzarella',
    price: 18.90,
    category: 'pizza',
    badge: { text: 'Spicy', variant: 'spicy' },
    image: '/images/menu/diavola-piccante.webp',
    rating: 4.7,
  },
  // Pasta
  {
    id: 'tagliatelle-salmone',
    name: 'Tagliatelle al Salmone',
    description: 'Homemade tagliatelle with salmon in a creamy lemon-dill sauce',
    price: 22.90,
    category: 'pasta',
    badge: { text: "Chef's Choice", variant: 'chefChoice' },
    image: '/images/menu/tagliatelle-salmone.webp',
    rating: 4.9,
  },
  {
    id: 'aglio-olio',
    name: 'Spaghetti Aglio e Olio',
    description: 'Spaghetti with garlic, chili, parsley, and olive oil',
    price: 17.50,
    category: 'pasta',
    badge: { text: 'Vegan', variant: 'vegan' },
    image: '/images/menu/spaghetti-aglio-olio.webp',
    rating: 4.4,
  },
  // Starters
  {
    id: 'bruschetta',
    name: 'Bruschetta Rustica',
    description: 'Toasted farmhouse bread with diced tomatoes, garlic, basil, and olive oil',
    price: 9.50,
    category: 'starters',
    badge: { text: 'Vegetarian', variant: 'vegetarian' },
    image: '/images/menu/bruschetta-rustica.webp',
    rating: 4.6,
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with croutons, parmesan, and creamy Caesar dressing',
    price: 11.90,
    category: 'starters',
    badge: { text: 'Classic', variant: 'classic' },
    image: '/images/menu/caesar-salad.webp',
    rating: 4.5,
  },
  // Soup
  {
    id: 'pumpkin-soup',
    name: 'Pumpkin Ginger Soup',
    description: 'Velvety pumpkin soup with fresh ginger and toasted seeds',
    price: 10.50,
    category: 'soup',
    badge: { text: 'Vegan', variant: 'vegan' },
    image: '/images/menu/pumpkin-ginger-soup.webp',
    rating: 4.7,
  },
  // Burgers
  {
    id: 'swiss-burger',
    name: 'Swiss Beef Burger',
    description: 'Beef patty with Emmental cheese, caramelized onions, and house sauce',
    price: 23.50,
    category: 'burgers',
    badge: { text: 'Signature', variant: 'signature' },
    image: '/images/menu/swiss-beef-burger.webp',
    rating: 4.9,
  },
  {
    id: 'veggie-burger',
    name: 'Veggie Garden Burger',
    description: 'Vegetable patty with avocado, tomato, and vegan mayo',
    price: 21.00,
    category: 'burgers',
    badge: { text: 'Vegan', variant: 'vegan' },
    image: '/images/menu/veggie-garden-burger.webp',
    rating: 4.6,
  },
  // Main Courses
  {
    id: 'geschnetzeltes',
    name: 'Zurich Veal Strips',
    description: 'Veal strips in cream sauce served with traditional rösti',
    price: 32.00,
    category: 'main-courses',
    badge: { text: 'Signature', variant: 'signature' },
    image: '/images/menu/zurich-veal-strips.webp',
    rating: 4.8,
  },
  {
    id: 'grilled-salmon',
    name: 'Grilled Salmon',
    description: 'Grilled salmon fillet with lemon butter and seasonal vegetables',
    price: 29.50,
    category: 'main-courses',
    badge: { text: 'Gluten-Free', variant: 'glutenFree' },
    image: '/images/menu/grilled-salmon.webp',
    rating: 4.8,
  },
  {
    id: 'risotto-funghi',
    name: 'Risotto ai Funghi',
    description: 'Creamy risotto with mixed mushrooms and parmesan',
    price: 24.00,
    category: 'main-courses',
    badge: { text: 'Vegetarian', variant: 'vegetarian' },
    image: '/images/menu/risotto-funghi.webp',
    rating: 4.7,
  },
  // Salads
  {
    id: 'quinoa-salad',
    name: 'Mediterranean Quinoa Salad',
    description: 'Quinoa with cucumber, tomato, feta, olives, and lemon dressing',
    price: 19.50,
    category: 'salads',
    badge: { text: 'Light', variant: 'default' },
    image: '/images/menu/mediterranean-quinoa-salad.webp',
    rating: 4.5,
  },
  // Sides
  {
    id: 'rosemary-potatoes',
    name: 'Rosemary Potatoes',
    description: 'Oven-roasted potatoes with fresh rosemary and sea salt',
    price: 7.50,
    category: 'sides',
    badge: { text: 'Vegan', variant: 'vegan' },
    image: '/images/menu/rosemary-potatoes.webp',
    rating: 4.4,
  },
  {
    id: 'grilled-vegetables',
    name: 'Grilled Vegetables',
    description: 'Grilled seasonal vegetables with herb oil',
    price: 8.50,
    category: 'sides',
    badge: { text: 'Vegan', variant: 'vegan' },
    image: '/images/menu/grilled-vegetables.webp',
    rating: 4.3,
  },
  // Desserts
  {
    id: 'tiramisu',
    name: 'Tiramisu della Casa',
    description: 'Classic tiramisu with mascarpone and espresso',
    price: 11.00,
    category: 'desserts',
    badge: { text: 'Bestseller', variant: 'bestseller' },
    image: '/images/menu/tiramisu.webp',
    rating: 4.9,
  },
  {
    id: 'chocolate-cake',
    name: 'Warm Chocolate Cake',
    description: 'Chocolate cake with molten center served with vanilla ice cream',
    price: 12.50,
    category: 'desserts',
    badge: { text: 'Bestseller', variant: 'bestseller' },
    image: '/images/menu/chocolate-cake.webp',
    rating: 4.9,
  },
  {
    id: 'panna-cotta',
    name: 'Lemon Panna Cotta',
    description: 'Lemon panna cotta with berry coulis',
    price: 10.90,
    category: 'desserts',
    badge: { text: 'Gluten-Free', variant: 'glutenFree' },
    image: '/images/menu/lemon-panna-cotta.webp',
    rating: 4.6,
  },
  // Drinks
  {
    id: 'lemonade',
    name: 'Homemade Lemonade',
    description: 'Fresh lemon lemonade with mint and low sugar',
    price: 6.50,
    category: 'drinks',
    badge: { text: 'Recommended', variant: 'default' },
    image: '/images/menu/homemade-lemonade.webp',
    rating: 4.7,
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    description: 'Aperitif with Aperol, Prosecco, and soda on ice',
    price: 11.50,
    category: 'drinks',
    badge: { text: 'Popular', variant: 'bestseller' },
    image: '/images/menu/aperol-spritz.webp',
    rating: 4.8,
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Strong espresso from freshly ground beans',
    price: 3.90,
    category: 'drinks',
    image: '/images/menu/espresso.webp',
    rating: 4.5,
  },
  // Kids
  {
    id: 'kids-pasta',
    name: 'Kids Pasta Tomato',
    description: 'Penne with mild tomato sauce and grated cheese',
    price: 12.00,
    category: 'kids',
    badge: { text: 'Kids', variant: 'kids' },
    image: '/images/menu/kids-pasta-tomato.webp',
    rating: 4.6,
  },
];

export const menuCategories: MenuCategory[] = [
  'starters',
  'soup',
  'pizza',
  'pasta',
  'burgers',
  'main-courses',
  'salads',
  'sides',
  'desserts',
  'drinks',
  'kids',
];

export function getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export const featuredItems = [
  menuItems.find((item) => item.id === 'swiss-burger')!,
  menuItems.find((item) => item.id === 'grilled-salmon')!,
  menuItems.find((item) => item.id === 'tiramisu')!,
  menuItems.find((item) => item.id === 'tagliatelle-salmone')!,
];
