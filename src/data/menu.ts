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
      { id: 'cappuccino', name: 'Cappuccino', price: 180, description: 'Classic espresso with steamed milk and thick foam.' },
      { id: 'cafe-latte', name: 'Cafe Latte', price: 190, description: 'Espresso with steamed milk and a thin layer of foam.' },
      { id: 'cortado', name: 'Cortado', price: 190, description: 'Equal parts espresso and warm milk to reduce acidity.' },
      { id: 'cafe-mocha', name: 'Cafe Mocha', price: 220, description: 'Espresso mixed with chocolate and steamed milk.' },
      { id: 'flat-white', name: 'Flat White', price: 190, description: 'Smooth microfoam poured over double espresso.' },
      { id: 'macchiato', name: 'Macchiato', price: 190, description: 'Espresso topped with a small amount of foamed milk.' },
      { id: 'south-indian-filter', name: 'South Indian Filter Coffee', price: 190, description: 'Traditional brewed coffee with hot milk.' },
      { id: 'indian-coffee', name: 'Indian Coffee', price: 190, description: 'Classic Indian style beaten coffee.' }
    ]
  },
  {
    id: 'black-manual-brews',
    name: 'Black / Manual Brews',
    items: [
      { id: 'espresso', name: 'Espresso', price: 140, description: 'Concentrated coffee shot (Hot / Iced).' },
      { id: 'americano', name: 'Americano', price: 170, description: 'Espresso diluted with water (Hot / Iced).' },
      { id: 'long-black', name: 'Long Black', price: 170, description: 'Double shot espresso poured over hot water.' },
      { id: 'v60-pour-over', name: 'V60 Pour Over', price: 230, description: 'Hand-brewed coffee using the V60 method.' },
      { id: 'aeropress', name: 'Aeropress', price: 220, description: 'Rich and smooth coffee brewed under pressure.' },
      { id: 'french-press', name: 'French Press', price: 220, description: 'Full-bodied coffee brewed by steeping coarse grounds.' },
      { id: 'chemex', name: 'Chemex', price: 240, description: 'Clean, rich coffee brewed in a glass vessel.' }
    ]
  },
  {
    id: 'iced-black',
    name: 'Iced Black',
    items: [
      { id: 'classic-cold-brew', name: 'Classic Cold Brew', price: 200, description: 'Steeped for 18+ hours for a smooth finish.' },
      { id: 'cold-brew-lemonade', name: 'Cold Brew Lemonade', price: 270, description: 'Refreshing mix of cold brew and lemonade.' },
      { id: 'whisky-barrel-aged', name: 'Whisky Barrel Aged', price: 240, description: 'Cold brew aged in whisky barrels for distinct flavor.' },
      { id: 'rum-barrel-aged', name: 'Rum Barrel Aged', price: 240, description: 'Cold brew with notes of rum barrel aging.' },
      { id: 'vietnamese-cold-brew', name: 'Vietnamese Cold Brew', price: 230, description: 'Strong cold brew with sweetened condensed milk.' },
      { id: 'bombon', name: 'Bombon', price: 200, description: 'Espresso served with sweetened condensed milk.' },
      { id: 'cranberry-espresso', name: 'Cranberry Espresso', price: 190, description: 'Espresso with a tart cranberry twist.' },
      { id: 'orange-espresso', name: 'Orange Espresso', price: 190, description: 'Zesty espresso infused with orange flavor.' }
    ]
  },
  {
    id: 'tonic-based',
    name: 'Tonic Based',
    items: [
      { id: 'espresso-tonic', name: 'Espresso Tonic', price: 230, description: 'Espresso served over tonic water and ice.' },
      { id: 'espresso-ginger-ale', name: 'Espresso Ginger Ale', price: 250, description: 'Spicy ginger ale topped with a shot of espresso.' },
      { id: 'espresso-bitter-lemon', name: 'Espresso Bitter Lemon', price: 280, description: 'Tangy bitter lemon soda with espresso.' },
      { id: 'cold-brew-tonic', name: 'Cold Brew Tonic', price: 250, description: 'Smooth cold brew mixed with tonic water.' },
      { id: 'redbull-espresso', name: 'Redbull Espresso', price: 300, description: 'Energizing mix of Redbull and espresso shot.' },
      { id: 'redbull-cold-brew', name: 'Redbull Cold Brew', price: 310, description: 'Redbull charged with smooth cold brew.' },
      { id: 'valentine', name: 'Valentine', price: 260, description: 'Specialty tonic coffee mocktail.' }
    ]
  },
  {
    id: 'frappes',
    name: 'Frappes',
    items: [
      { id: 'classic-frappe', name: 'Classic Frappe', price: 210, description: 'Classic blended iced coffee.' },
      { id: 'indian-cold-coffee', name: 'Indian Cold Coffee', price: 200, description: 'Nostalgic creamy cold coffee.' },
      { id: 'mocha-frappe', name: 'Mocha Frappe', price: 230, description: 'Blended coffee with rich chocolate.' },
      { id: 'hazelnut-frappe', name: 'Hazelnut Frappe', price: 240, description: 'Blended coffee with nutty hazelnut flavor.' },
      { id: 'irish-frappe', name: 'Irish Frappe', price: 240, description: 'Coffee frappe with Irish cream flavor.' },
      { id: 'caramel-frappe', name: 'Caramel Frappe', price: 250, description: 'Sweet caramel blended coffee.' },
      { id: 'silk-frappe', name: 'Silk Frappe', price: 260, description: 'Smooth and silky chocolate coffee blend.' },
      { id: 'nutella-frappe', name: 'Nutella Frappe', price: 260, description: 'Hazelnut cocoa spread blended with coffee.' },
      { id: 'biscoff-frappe', name: 'Biscoff Frappe', price: 320, description: 'Rich blended coffee with Lotus Biscoff.' },
      { id: 'ferrero-frappe', name: 'Ferrero Rocher Frappe', price: 320, description: 'Decadent frappe with Ferrero Rocher.' }
    ]
  },
  {
    id: 'shakes',
    name: 'Shakes',
    items: [
      { id: 'kitkat-shake', name: 'Kitkat Shake', price: 230, description: 'Milkshake blended with Kitkat bars.' },
      { id: 'nutella-shake', name: 'Nutella Shake', price: 250, description: 'Creamy milkshake blended with pure Nutella.' },
      { id: 'oreo-shake', name: 'Oreo Shake', price: 250, description: 'Classic cookies and cream milkshake.' },
      { id: 'strawberry-shake', name: 'Strawberry Shake', price: 230, description: 'Fresh strawberry flavored milkshake.' },
      { id: 'blueberry-shake', name: 'Blueberry Shake', price: 250, description: 'Sweet and tart blueberry shake.' },
      { id: 'biscoff-shake', name: 'Biscoff Shake', price: 300, description: 'Caramelized biscuit milkshake.' },
      { id: 'ferrero-shake', name: 'Ferrero Rocher Shake', price: 300, description: 'Rich chocolate hazelnut shake.' }
    ]
  },
  {
    id: 'matcha',
    name: 'Matcha',
    items: [
      { id: 'matcha-latte-hot', name: 'Matcha Latte Hot', price: 310, description: 'Premium Japanese green tea with steamed milk.' },
      { id: 'iced-matcha-latte', name: 'Iced Matcha Latte', price: 310, description: 'Chilled matcha green tea with milk and ice.' },
      { id: 'coconut-cloud-matcha', name: 'Coconut Cloud Matcha', price: 350, description: 'Matcha topped with fluffy coconut foam.' },
      { id: 'blueberry-matcha', name: 'Blueberry Matcha', price: 350, description: 'Unique blend of blueberry and earthy matcha.' }
    ]
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    items: [
      { id: 'mint-mojito', name: 'Mint Mojito', price: 180, description: 'Refreshing lime and mint cooler.' },
      { id: 'cranberry-virgin-mojito', name: 'Cranberry Virgin Mojito', price: 210, description: 'Mojito with a cranberry twist.' },
      { id: 'orange-virgin-mojito', name: 'Orange Virgin Mojito', price: 210, description: 'Citrusy orange mojito.' },
      { id: 'heaven-blue', name: 'Heaven Blue', price: 230, description: 'Blue lagoon style refreshing mocktail.' },
      { id: 'strawberry-twist', name: 'Strawberry Twist', price: 230, description: 'Strawberry cooler with a twist of lime.' },
      { id: 'blueberry-splash', name: 'Blueberry Splash', price: 250, description: 'Fizzy blueberry refresher.' },
      { id: 'lemon-coffeeto', name: 'Lemon Coffeeto', price: 250, description: 'Unique fusion of lemon and coffee.' },
      { id: 'sparkling-lemon', name: 'Sparkling Lemon', price: 180, description: 'Classic sparkling lemonade.' },
      { id: 'bubblegum-blast', name: 'Bubblegum Blast', price: 250, description: 'Sweet nostalgic bubblegum flavor drink.' },
      { id: 'pinacolada', name: 'Pinacolada', price: 250, description: 'Tropical pineapple and coconut mocktail.' }
    ]
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    items: [
      { id: 'lemon-iced-tea', name: 'Lemon Iced Tea', price: 190, description: 'Chilled tea with lemon zest.' },
      { id: 'peach-iced-tea', name: 'Peach Iced Tea', price: 200, description: 'Sweet peach flavored iced tea.' },
      { id: 'redbull-iced-tea', name: 'Redbull Iced Tea', price: 250, description: 'Iced tea charged with Redbull.' },
      { id: 'passion-fruit-iced-tea', name: 'Passion Fruit Iced Tea', price: 200, description: 'Exotic passion fruit flavored tea.' }
    ]
  },
  {
    id: 'hot-chocolate-affogato',
    name: 'Hot Chocolate & Affogato',
    items: [
      { id: 'classic-affogato', name: 'Classic Affogato', price: 220, description: 'Vanilla ice cream drowned in hot espresso.' },
      { id: 'matcha-affogato', name: 'Matcha Affogato', price: 280, description: 'Vanilla ice cream served with hot matcha shot.' },
      { id: 'classic-hot-chocolate', name: 'Classic Hot Chocolate', price: 200, description: 'Rich and creamy hot cocoa.' }
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta',
    items: [
      { id: 'creamy-alfredo', name: 'Creamy Alfredo White Sauce Pasta', price: 290, description: 'Pasta tossed in rich white cream sauce.' },
      { id: 'roma-red-sauce', name: 'Roma Red Sauce Pasta', price: 330, description: 'Tangy and spicy red tomato sauce pasta.' },
      { id: 'velvet-pink-sauce', name: 'Velvet Pink Sauce Pasta', price: 330, description: 'Perfect blend of tomato and cream sauce.' }
    ]
  },
  {
    id: 'open-toast',
    name: 'Open Toast',
    items: [
      { id: 'sourdough-avo-smash', name: 'Sourdough Avo Smash', price: 280, description: 'Toasted sourdough topped with creamy smashed avocado, olive oil, cherry tomatoes.' },
      { id: 'creamy-hummus', name: 'Creamy Hummus', price: 280, description: 'Sourdough with smooth hummus and topped with fresh veggies.' }
    ]
  },
  {
    id: 'ramen-bowl',
    name: 'Ramen Bowl',
    items: [
      { id: 'korean-ramen-bowl', name: 'Korean Ramen Bowl', price: 290, description: 'Authentic Korean style noodle soup.' },
      { id: 'kimchi-ramen-bowl', name: 'Kimchi Ramen Bowl', price: 290, description: 'Spicy ramen with fermented kimchi.' },
      { id: 'super-spicy-ramen', name: 'Super Spicy Ramen Bowl', price: 290, description: 'Extra hot ramen for spice lovers.' }
    ]
  },
  {
    id: 'sandwich-bagel',
    name: 'Sandwich & Bagels',
    items: [
      { id: 'cream-cheese-croissant', name: 'Cream Cheese Croissant Sandwich', price: 220, description: 'Flaky buttery croissant filled with smooth cream cheese.' },
      { id: 'pesto-veggie-croissant', name: 'Creamy Pesto Veggie Croissant Sandwich', price: 250, description: 'Buttery croissant stuffed with basil pesto, cream cheese and fresh veggies.' },
      { id: 'cream-cheese-bagel', name: 'Cream Cheese Bagel', price: 200, description: 'Soft, chewy bagel generously layered with rich and smooth cream cheese.' },
      { id: 'pesto-veggie-bagel', name: 'Pesto Veggie Bagel', price: 230, description: 'Bagel loaded with creamy basil pesto and fresh crunchy veggies.' },
      { id: 'hummus-twist-bagel', name: 'Hummus Twist Bagel', price: 230, description: 'Soft bagel filled with creamy hummus, fresh veggies and hints of herbs.' },
      { id: 'veggie-delight-focaccia', name: 'Veggie Delight Focaccia', price: 330, description: 'Soft focaccia bread loaded with fresh veggies, greens, lettuce and light herbs.' },
      { id: 'creamy-pesto-focaccia', name: 'Creamy Pesto Veggie Focaccia', price: 330, description: 'Soft focaccia with basil pesto & garden fresh veggies.' }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { id: 'ny-cheesecake', name: 'New York Cheesecake', price: 220, description: 'Classic dense and creamy cheesecake.' },
      { id: 'chocolate-cheesecake', name: 'Chocolate Cheesecake', price: 240, description: 'Rich chocolate infused cheesecake.' },
      { id: 'blueberry-cheesecake', name: 'Blueberry Cheesecake', price: 250, description: 'Cheesecake topped with blueberry compote.' },
      { id: 'nutella-cheesecake', name: 'Nutella Cheesecake', price: 270, description: 'Creamy cheesecake swirled with Nutella.' },
      { id: 'double-bliss-cheesecake', name: 'Double Bliss Cheesecake', price: 270, description: 'Double layered delight for cheese lovers.' },
      { id: 'biscoff-cheesecake', name: 'Biscoff Cheesecake', price: 300, description: 'Creamy cheesecake with Biscoff crust and caramel.' },
      { id: 'ferrero-cheesecake', name: 'Ferrero Rocher Cheesecake', price: 300, description: 'Decadent cheesecake with Ferrero chocolates.' },
      { id: 'classic-brownie', name: 'Classic Brownie', price: 190, description: 'Fudgy chocolate brownie.' },
      { id: 'chocolate-brownie', name: 'Chocolate Brownie', price: 220, description: 'Rich brownie with extra chocolate chunks.' },
      { id: 'nutella-brownie', name: 'Nutella Brownie', price: 220, description: 'Brownie topped with Nutella spread.' },
      { id: 'biscoff-brownie', name: 'Biscoff Brownie', price: 240, description: 'Brownie served with Biscoff sauce/crumbs.' },
      { id: 'choco-brownie-jar', name: 'Choco Brownie Jar', price: 280, description: 'Layers of brownie, chocolate and cream in a jar.' }
    ]
  },
  {
    id: 'additional',
    name: 'Additional',
    items: [
      { id: 'water-bottle', name: 'Water Bottle', price: 10, description: 'Mineral water.' },
      { id: 'indian-tonic-water', name: 'Indian Tonic Water', price: 130, description: 'Classic carbonated tonic water.' },
      { id: 'zero-sugar-tonic', name: 'Premium Zero Sugar Tonic Water', price: 170, description: 'Guilt-free premium tonic water.' },
      { id: 'ginger-ale', name: 'Ginger Ale', price: 130, description: 'Carbonated ginger flavored soft drink.' },
      { id: 'bitter-lemon', name: 'Bitter Lemon', price: 150, description: 'Tart lemon flavored mixer.' },
      { id: 'redbull', name: 'Redbull', price: 180, description: 'Energy drink.' }
    ]
  }
] as const;

export const FEATURED_ITEMS = [
  { ...MENU[0].items[0], image: 'cappuccino' }, // Cappuccino
  { ...MENU[4].items[8], image: 'biscoff-frappe' }, // Biscoff Frappe
  { ...MENU[13].items[1], image: 'pesto-croissant' }, // Creamy Pesto Veggie Croissant
  { ...MENU[14].items[5], image: 'biscoff-cheesecake' }, // Biscoff Cheesecake
];
