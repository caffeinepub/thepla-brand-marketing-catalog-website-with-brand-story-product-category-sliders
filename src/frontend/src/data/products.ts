export interface Product {
  id: string;
  name: string;
  price: number | { min: number; max: number };
  packSize: string;
  image: string;
  category: string;
}

export const theplas: Product[] = [
  // Long Duration (3 Months)
  {
    id: 'masala-thepla',
    name: 'Masala Thepla',
    price: 40,
    packSize: 'Piece of 4',
    image: '/assets/generated/thepla-masala.dim_1024x1024.png',
    category: 'Long Duration (3 Months)',
  },
  {
    id: 'methi-thepla',
    name: 'Methi Thepla',
    price: 45,
    packSize: 'Piece of 4',
    image: '/assets/generated/thepla-methi.dim_1024x1024.png',
    category: 'Long Duration (3 Months)',
  },
  {
    id: 'til-thepla',
    name: 'Til Thepla',
    price: 48,
    packSize: 'Piece of 4',
    image: '/assets/generated/thepla-til.dim_1024x1024.png',
    category: 'Long Duration (3 Months)',
  },
  // Short Duration (1 Day)
  {
    id: 'dudhi-thepla',
    name: 'Dudhi Thepla',
    price: 60,
    packSize: 'Piece of 4',
    image: '/assets/generated/thepla-dudhi.dim_1024x1024.png',
    category: 'Short Duration (1 Day)',
  },
  {
    id: 'spinach-thepla',
    name: 'Spinach Thepla',
    price: 68,
    packSize: 'Piece of 4',
    image: '/assets/generated/thepla-spinach.dim_1024x1024.png',
    category: 'Short Duration (1 Day)',
  },
  // Nutrition Based
  {
    id: 'multigrain-thepla',
    name: 'Multigrain Thepla',
    price: 165,
    packSize: 'Piece of 5',
    image: '/assets/generated/thepla-multigrain.dim_1024x1024.png',
    category: 'Nutrition Based',
  },
  {
    id: 'bajra-wheat-thepla',
    name: 'Bajra + Wheat Thepla',
    price: 95,
    packSize: 'Piece of 5',
    image: '/assets/generated/thepla-bajra-wheat.dim_1024x1024.png',
    category: 'Nutrition Based',
  },
  {
    id: 'nachani-thepla',
    name: 'Nachani Thepla',
    price: 128,
    packSize: 'Piece of 5',
    image: '/assets/generated/thepla-nachani.dim_1024x1024.png',
    category: 'Nutrition Based',
  },
];

export const otherProducts: Product[] = [
  {
    id: 'lime-pickle',
    name: 'Lime Pickle',
    price: 95,
    packSize: '500g',
    image: '/assets/generated/pickle-lime.dim_1024x1024.png',
    category: 'Other Products',
  },
  {
    id: 'mango-pickle',
    name: 'Mango Pickle',
    price: 110,
    packSize: '500g',
    image: '/assets/generated/pickle-mango.dim_1024x1024.png',
    category: 'Other Products',
  },
  {
    id: 'chilli-pickle',
    name: 'Chilli Pickle',
    price: 0,
    packSize: '500g',
    image: '/assets/generated/pickle-chilli.dim_1024x1024.png',
    category: 'Other Products',
  },
  {
    id: 'amla-pickle',
    name: 'Amla Pickle',
    price: 0,
    packSize: '500g',
    image: '/assets/generated/pickle-amla.dim_1024x1024.png',
    category: 'Other Products',
  },
  {
    id: 'carrot-pickle',
    name: 'Carrot Pickle',
    price: 0,
    packSize: '500g',
    image: '/assets/generated/pickle-carrot.dim_1024x1024.png',
    category: 'Other Products',
  },
  {
    id: 'chunda-pickle',
    name: 'Chunda',
    price: 0,
    packSize: '500g',
    image: '/assets/generated/pickle-chunda.dim_1024x1024.png',
    category: 'Other Products',
  },
  {
    id: 'thecha',
    name: 'Thecha',
    price: 0,
    packSize: '500g',
    image: '/assets/generated/pickle-thecha.dim_1024x1024.png',
    category: 'Other Products',
  },
];

export const categories = [
  'Long Duration (3 Months)',
  'Short Duration (1 Day)',
  'Nutrition Based',
];
