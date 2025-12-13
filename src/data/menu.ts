export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  badge?: 'Best Seller' | 'Popular' | 'New';
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: 'hot-coffees',
    name: 'Hot Coffees',
    items: [
      { 
        id: 'cappuccino', 
        name: 'Cappuccino', 
        price: 180, 
        description: 'Classic espresso with steamed milk and thick foam.',
        badge: 'Best Seller'
      },
      { 
        id: 'cafe-latte', 
        name: 'Cafe Latte', 
        price: 190, 
        description: 'Espresso with steamed milk and a thin layer of foam.' 
      },
      { 
        id: 'cafe-mocha', 
        name: 'Cafe Mocha', 
        price: 220, 
        description: 'Espresso mixed with chocolate and steamed milk.' 
      },
      { 
        id: 'flat-white', 
        name: 'Flat White', 
        price: 190, 
        description: 'Smooth microfoam poured over double espresso.' 
      },
      { 
        id: 'south-indian-filter', 
        name: 'South Indian Filter Coffee', 
        price: 190, 
        description: 'Traditional brewed coffee with hot milk.' 
      }
    ]
  },
  {
    id: 'black-manual',
    name: 'Black & Manual Brews',
    items: [
      { 
        id: 'espresso', 
        name: 'Espresso', 
        price: 140, 
        description: 'Concentrated coffee shot.',
        badge: 'Popular'
      },
      { 
        id: 'americano', 
        name: 'Americano', 
        price: 170, 
        description: 'Espresso diluted with hot water.' 
      },
      { 
        id: 'v60-pour-over', 
        name: 'V60 Pour Over', 
        price: 230, 
        description: 'Hand-brewed coffee using the V60 method.' 
      },
      { 
        id: 'chemex', 
        name: 'Chemex', 
        price: 240, 
        description: 'Clean, rich coffee brewed in a glass vessel.' 
      }
    ]
  },
  {
    id: 'iced-black-tonic',
    name: 'Iced Black & Tonic',
    items: [
      { 
        id: 'classic-cold-brew', 
        name: 'Classic Cold Brew', 
        price: 200, 
        description: 'Steeped for 18+ hours for a smooth finish.' 
      },
      { 
        id: 'whisky-barrel-aged', 
        name: 'Whisky Barrel Aged', 
        price: 240, 
        description: 'Cold brew aged in whisky barrels for distinct flavor.' 
      },
      { 
        id: 'espresso-tonic', 
        name: 'Espresso Tonic', 
        price: 230, 
        description: 'Espresso served over tonic water and ice.',
        badge: 'New'
      },
      { 
        id: 'redbull-espresso', 
        name: 'Redbull Espresso', 
        price: 300, 
        description: 'Energizing mix of Redbull and espresso shot.' 
      }
    ]
  },
  {
    id: 'frappes-shakes',
    name: 'Frappes & Shakes',
    items: [
      { 
        id: 'hazelnut-frappe', 
        name: 'Hazelnut Frappe', 
        price: 240, 
        description: 'Blended coffee with hazelnut flavor and cream.' 
      },
      { 
        id: 'biscoff-frappe', 
        name: 'Biscoff Frappe', 
        price: 320, 
        description: 'Rich blended coffee with Lotus Biscoff.',
        badge: 'Best Seller'
      },
      { 
        id: 'nutella-shake', 
        name: 'Nutella Shake', 
        price: 250, 
        description: 'Creamy milkshake blended with pure Nutella.' 
      },
      { 
        id: 'ferrero-shake', 
        name: 'Ferrero Rocher Shake', 
        price: 300, 
        description: 'Decadent shake with Ferrero Rocher chocolates.' 
      }
    ]
  },
  {
    id: 'mocktails-matcha',
    name: 'Mocktails & Matcha',
    items: [
      { 
        id: 'matcha-latte', 
        name: 'Matcha Latte', 
        price: 310, 
        description: 'Premium Japanese matcha with milk (Hot/Iced).' 
      },
      { 
        id: 'coconut-cloud-matcha', 
        name: 'Coconut Cloud Matcha', 
        price: 350, 
        description: 'Matcha topped with fluffy coconut foam.',
        badge: 'New'
      },
      { 
        id: 'mint-mojito', 
        name: 'Mint Mojito', 
        price: 180, 
        description: 'Refreshing lime and mint cooler.' 
      },
      { 
        id: 'blueberry-splash', 
        name: 'Blueberry Splash', 
        price: 250, 
        description: 'Fizzy blueberry refresher.' 
      }
    ]
  },
  {
    id: 'food-salty',
    name: 'Pasta, Ramen & Toast',
    items: [
      { 
        id: 'alfredo-pasta', 
        name: 'Creamy Alfredo Pasta', 
        price: 290, 
        description: 'Pasta tossed in rich white cream sauce.' 
      },
      { 
        id: 'velvet-pink-pasta', 
        name: 'Velvet Pink Sauce Pasta', 
        price: 330, 
        description: 'Perfect blend of tomato and cream sauce.' 
      },
      { 
        id: 'korean-ramen', 
        name: 'Korean Ramen Bowl', 
        price: 290, 
        description: 'Spicy noodle soup with veggies.' 
      },
      { 
        id: 'sourdough-avo', 
        name: 'Sourdough Avo Smash', 
        price: 280, 
        description: 'Toasted sourdough topped with creamy smashed avocado, olive oil, cherry tomatoes.',
        badge: 'Popular'
      }
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches & Bagels',
    items: [
      { 
        id: 'croissant-sandwich', 
        name: 'Cream Cheese Croissant', 
        price: 220, 
        description: 'Flaky buttery croissant filled with smooth cream cheese.' 
      },
      { 
        id: 'pesto-croissant', 
        name: 'Creamy Pesto Veggie Croissant', 
        price: 250, 
        description: 'Buttery croissant stuffed with basil pesto, cream cheese and fresh veggies.' 
      },
      { 
        id: 'bagel-cream-cheese', 
        name: 'Cream Cheese Bagel', 
        price: 200, 
        description: 'Soft, chewy bagel generously layered with rich and smooth cream cheese.' 
      },
      { 
        id: 'focaccia-veggie', 
        name: 'Veggie Delight Focaccia', 
        price: 330, 
        description: 'Soft focaccia bread loaded with fresh veggies, greens, lettuce and light herbs.' 
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { 
        id: 'biscoff-cheesecake', 
        name: 'Biscoff Cheesecake', 
        price: 300, 
        description: 'Creamy cheesecake with Biscoff base.',
        badge: 'Best Seller'
      },
      { 
        id: 'nutella-cheesecake', 
        name: 'Nutella Cheesecake', 
        price: 270, 
        description: 'Rich cheesecake swirled with Nutella.' 
      },
      { 
        id: 'classic-brownie', 
        name: 'Classic Brownie', 
        price: 190, 
        description: 'Fudgy chocolate brownie.' 
      },
      { 
        id: 'choco-brownie-jar', 
        name: 'Choco Brownie Jar', 
        price: 280, 
        description: 'Layers of brownie, chocolate and cream in a jar.' 
      }
    ]
  }
] as const;

export const FEATURED_ITEMS = [
  { ...MENU[0].items[0], image: 'cappuccino' }, // Cappuccino
  { ...MENU[3].items[1], image: 'biscoff-frappe' }, // Biscoff Frappe
  { ...MENU[6].items[1], image: 'pesto-croissant' }, // Pesto Croissant Sandwich
  { ...MENU[7].items[0], image: 'biscoff-cheesecake' }, // Biscoff Cheesecake
];
