export type Price = { label?: string; amount: number };

export type MenuItem = {
  name: string;
  prices: Price[];
  note?: string;
  veg?: boolean;
  isNew?: boolean;
  best?: boolean;
};

export type MenuGroup = { title?: string; items: MenuItem[] };

export type MenuCategory = {
  id: string;
  label: string;
  emoji: string;
  groups: MenuGroup[];
  footnote?: string;
};

const p = (amount: number, label?: string): Price => ({ amount, label });
const sml = (s: number, m: number, l: number): Price[] => [
  p(s, "S"),
  p(m, "M"),
  p(l, "L"),
];
const ml = (m: number, l: number): Price[] => [p(m, "M"), p(l, "L")];
const wrap = (): Price[] => [p(89, "Veg"), p(119, "Paneer"), p(129, "Chicken")];
const pieces = (a: string, x: number, b: string, y: number): Price[] => [
  p(x, a),
  p(y, b),
];

export const MENU: MenuCategory[] = [
  {
    id: "crispy",
    label: "Crispy Chicken",
    emoji: "🍗",
    groups: [
      {
        items: [
          { name: "Chicken Broast", note: "1 pc", prices: [p(99)] },
          { name: "Chicken Popcorn", prices: pieces("12 pc", 85, "25 pc", 160) },
          { name: "Chicken Nuggets", prices: pieces("4 pc", 85, "8 pc", 160) },
          { name: "Chicken Strips", prices: pieces("2 pc", 85, "4 pc", 160) },
          { name: "Crispy Lollipop", note: "4 pcs", prices: [p(160)] },
          { name: "Chicken Wings", note: "4 pcs", prices: [p(160)] },
          { name: "Chicken Drumsticks", note: "2 pcs", prices: [p(160)] },
          { name: "Fish Finger / Nuggets", note: "8 pcs", prices: [p(280)] },
          { name: "Al-Baik Prawn", note: "8 pcs", prices: [p(280)] },
          {
            name: "Al-Baik Special Platter",
            note: "25 pcs chicken popcorn + 8 pcs nuggets + 4 pcs chicken strips + medium french fries",
            prices: [p(559)],
            best: true,
          },
        ],
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    emoji: "🍔",
    groups: [
      {
        title: "Veg Burgers",
        items: [
          { name: "Aaloo Tikki Burger", prices: [p(79)], veg: true },
          { name: "Crispy Veggie Burger", prices: [p(89)], veg: true },
          { name: "Peri Peri Veggie Burger", prices: [p(110)], veg: true },
          { name: "Tandoori Veggie Burger", prices: [p(120)], veg: true },
          { name: "BBQ Veggie Burger", prices: [p(120)], veg: true },
          { name: "Peri Peri Paneer Burger", prices: [p(120)], veg: true },
          { name: "Tandoori Paneer Burger", prices: [p(130)], veg: true },
        ],
      },
      {
        title: "Chicken Burgers",
        items: [
          { name: "Crispy Chicken Burger", prices: [p(99)] },
          { name: "Chicken Zinger Burger", prices: [p(120)] },
          { name: "Peri Peri Chicken Burger", prices: [p(130)] },
          { name: "Tandoori Chicken Burger", prices: [p(140)] },
          { name: "Spicy Chicken Burger", prices: [p(150)] },
          { name: "Harissa Chicken Burger", prices: [p(170)], isNew: true },
          { name: "Korean Crispy Chicken Burger", prices: [p(170)], isNew: true },
          { name: "Al-Baik Special Burger", prices: [p(180)], best: true },
          { name: "Chicken Double Trouble Burger", prices: [p(200)] },
          { name: "Al-Baik Fish Burger", prices: [p(220)] },
        ],
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    emoji: "🍕",
    footnote: "Extra toppings: Mushroom ₹20 · Baby corn ₹20 · Extra cheese ₹50",
    groups: [
      {
        title: "Veg Cheese Pizza (6\" / 8\")",
        items: [
          {
            name: "Cheese Pizza",
            note: "Mozzarella & liquid cheese",
            prices: [p(90, '6"'), p(120, '8"')],
            veg: true,
          },
          {
            name: "Onion Capsicum Pizza",
            note: "Cheese, onion, capsicum",
            prices: [p(100, '6"'), p(130, '8"')],
            veg: true,
          },
          {
            name: "Corn Pizza",
            note: "Cheese and fresh corn",
            prices: [p(110, '6"'), p(140, '8"')],
            veg: true,
          },
          {
            name: "Farm House Pizza",
            note: "Onion, capsicum, mushroom, baby corn, jalapeno, olive, mozzarella",
            prices: [p(170)],
            veg: true,
          },
          {
            name: "Paneer Corn Pizza",
            note: "Cheese, paneer and corn",
            prices: [p(190)],
            veg: true,
          },
          {
            name: "Paneer Barbeque Pizza",
            note: "Paneer, onion, capsicum, mozzarella, BBQ sauce",
            prices: [p(200)],
            veg: true,
          },
          {
            name: "Paneer Makhni Pizza",
            note: "Paneer, onion, capsicum, mozzarella, makhni sauce",
            prices: [p(220)],
            veg: true,
          },
        ],
      },
      {
        title: "Chicken Pizza (8\")",
        items: [
          { name: "Crispy Chicken Pizza", note: "Crispy chicken and cheese", prices: [p(230)] },
          {
            name: "Barbeque Chicken Pizza",
            note: "Crispy chicken, onion, capsicum, BBQ sauce",
            prices: [p(260)],
          },
          {
            name: "Peri Peri Chicken Pizza",
            note: "Crispy chicken, onion, capsicum, jalapeno, peri sauce",
            prices: [p(260)],
          },
          {
            name: "Chicken Mexican Pizza",
            note: "Crispy chicken, onion, capsicum, olive, jalapeno, mozzarella",
            prices: [p(280)],
          },
          {
            name: "Grilled Chicken Pizza",
            note: "Grilled chicken, onion, capsicum, jalapeno",
            prices: [p(290)],
          },
          {
            name: "Chicken Cheeza",
            note: "No pizza base, only chicken: crispy chicken patty, onion, capsicum, olive, jalapeno, melted cheese",
            prices: pieces("2 pc", 250, "4 pc", 490),
            best: true,
          },
        ],
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps & Shawarma",
    emoji: "🌯",
    groups: [
      {
        title: "Tortilla Wraps (8\")",
        items: [
          { name: "Crispy Wrap", prices: wrap() },
          { name: "Cheesy Wrap", prices: wrap() },
          { name: "Zinger Wrap", prices: wrap() },
          { name: "Barbeque Wrap", prices: wrap() },
          { name: "Tandoori Wrap", prices: wrap() },
          { name: "Peri Peri Wrap", prices: wrap() },
          { name: "Sriracha Wrap", prices: wrap() },
          { name: "Chilli Garlic Wrap", prices: wrap() },
        ],
      },
      {
        title: "Grilled Chicken Shawarma",
        items: [
          { name: "Classic Chicken Shawarma", prices: pieces("Pita", 100, "Tortilla", 110) },
          { name: "Chicken Cheesy Shawarma", prices: pieces("Pita", 110, "Tortilla", 119) },
          { name: "Peri Peri Chicken Shawarma", prices: pieces("Pita", 120, "Tortilla", 129) },
          { name: "Tandoori Chicken Shawarma", prices: pieces("Pita", 130, "Tortilla", 139) },
        ],
      },
      {
        title: "Cheesy Pita Pocket",
        items: [
          { name: "Classic Chicken", prices: [p(210)] },
          { name: "Cheesy Chicken", prices: [p(259)] },
          { name: "Peri Peri Chicken", prices: [p(259)] },
          { name: "Tandoori Chicken", prices: [p(259)] },
        ],
      },
    ],
  },
  {
    id: "fries",
    label: "Friend's Fries",
    emoji: "🍟",
    footnote: "Loaded and wedge items are available in Medium and Large.",
    groups: [
      {
        items: [
          { name: "French Fries", prices: sml(69, 99, 159) },
          { name: "Peri Peri Fries", prices: sml(79, 109, 179) },
          { name: "Chilly Garlic Fries", prices: sml(79, 109, 179) },
          { name: "Cheesy Fries", prices: sml(99, 139, 209) },
          { name: "Peri Peri Cheesy Fries", prices: sml(109, 149, 229) },
          { name: "Veg Cheesy Loaded Fries", note: "Melted mozzarella cheese", prices: ml(159, 239), veg: true },
          { name: "Chicken Cheesy Fries", prices: ml(169, 249) },
          { name: "Chicken Cheesy Loaded", note: "Melted mozzarella cheese", prices: ml(259, 359), best: true },
          { name: "Potato Wedges", prices: ml(120, 220) },
          { name: "Peri Peri Wedges", prices: ml(130, 230) },
          { name: "Cheesy Wedges", prices: ml(150, 250) },
        ],
      },
    ],
  },
  {
    id: "momos",
    label: "Momos",
    emoji: "🥟",
    footnote: "Prices for 6 pc / 12 pc.",
    groups: [
      {
        title: "Veg",
        items: [
          { name: "Veg Steam Momos", prices: pieces("6 pc", 70, "12 pc", 140), veg: true },
          { name: "Veg Fried Momos", prices: pieces("6 pc", 90, "12 pc", 160), veg: true },
          { name: "Veg Cheesy Fried", prices: pieces("6 pc", 100, "12 pc", 180), veg: true },
          { name: "Veg Kurkure Fried", prices: pieces("6 pc", 110, "12 pc", 200), veg: true },
        ],
      },
      {
        title: "Paneer",
        items: [
          { name: "Paneer Steam", prices: pieces("6 pc", 80, "12 pc", 150), veg: true },
          { name: "Paneer Fried", prices: pieces("6 pc", 90, "12 pc", 170), veg: true },
          { name: "Paneer Cheese Fried", prices: pieces("6 pc", 100, "12 pc", 190), veg: true },
          { name: "Paneer Kurkure Momos", prices: pieces("6 pc", 110, "12 pc", 210), veg: true },
        ],
      },
      {
        title: "Chicken",
        items: [
          { name: "Chicken Steam Momos", prices: pieces("6 pc", 90, "12 pc", 160) },
          { name: "Chicken Fried Momos", prices: pieces("6 pc", 100, "12 pc", 180) },
          { name: "Chicken Cheese Fried", prices: pieces("6 pc", 110, "12 pc", 200) },
          { name: "Chicken Kurkure Fried", prices: pieces("6 pc", 120, "12 pc", 220) },
        ],
      },
    ],
  },
  {
    id: "meals",
    label: "Meals & Combos",
    emoji: "🍱",
    groups: [
      {
        title: "Veg Meals",
        items: [
          { name: "Veg Meal", note: "Aaloo tikki burger, small fries, cold drink", prices: [p(149)], veg: true, best: true },
          { name: "Veg Combo", note: "Veggie burger, small fries + veg nuggets, cold drink", prices: [p(199)], veg: true },
          { name: "Paneer Meal", note: "Peri peri paneer burger, small fries, cold drink", prices: [p(210)], veg: true, best: true },
        ],
      },
      {
        title: "Meal Box",
        items: [
          { name: "Kids Meal", note: "Small fries, crispy chicken burger, cold drink", prices: [p(169)] },
          { name: "Budget Meal", note: "Crispy burger, 2 pc lollipop + 2 pc nuggets, garlic dip & cold drink", prices: [p(229)] },
          { name: "Crispy Meal", note: "Crispy burger, chicken popcorn 10 pcs, small fries + cold drink", prices: [p(249)], best: true },
          { name: "Zinger Meal", note: "Zinger burger, chicken nuggets (4 pcs), small fries + cold drink", prices: [p(259)], best: true },
          { name: "Regular Meal", note: "4 pc wings, 2 pc lollipop, 4 pc nuggets, small fries, garlic & sriracha dips, cold drink", prices: [p(399)], best: true },
        ],
      },
      {
        title: "Sharing Meals",
        items: [
          { name: "Friends Meal", note: "2 crispy chicken burgers, 2 zinger burgers, medium fries, cold drink", prices: [p(539)] },
          {
            name: "Family Meal",
            note: "1 chicken crispy pizza, 1 zinger wrap, 1 chicken peri peri burger, 4 pcs chicken strips, 4 pcs lollipop, 4 pcs nuggets, garlic & sriracha dips, peri peri medium fries, 4 cold drinks",
            prices: [p(999)],
            best: true,
          },
          {
            name: "Party Meal",
            note: "1 chicken crispy pizza, 2 zinger burgers, 2 full chicken popcorn, 8 pcs nuggets, 4 pc strips, 4 pc lollipop, 4 pc wings, 2 pc hot n spicy drumsticks, large fries, dips, 6 cold drinks",
            prices: [p(1549)],
          },
        ],
      },
    ],
  },
  {
    id: "buckets",
    label: "Buckets & Starters",
    emoji: "🍗",
    groups: [
      {
        title: "Crispy Chicken Bucket",
        items: [
          { name: "Lollypop Bucket", note: "12 pcs", prices: [p(449)] },
          { name: "Crispy Wings Bucket", note: "12 pcs", prices: [p(449)] },
          { name: "Chicken Popcorn Box", note: "75 pcs", prices: [p(449)] },
          { name: "Chicken Strip Bucket", note: "12 pcs", prices: [p(449)] },
          { name: "Chicken Nuggets", note: "24 pcs", prices: [p(449)] },
          { name: "Drumstick Bucket", note: "8 pcs", prices: [p(599)] },
          { name: "Broast Bucket", note: "7 pcs", prices: [p(649)] },
        ],
      },
      {
        title: "Veg Starters",
        items: [
          { name: "Paneer Popcorn", note: "15 pcs", prices: [p(129)], veg: true },
          { name: "Jalapeno Cheese Pops", note: "10 pcs", prices: [p(119)], veg: true },
          { name: "Veggie Nuggets", note: "10 pcs", prices: [p(119)], veg: true },
          { name: "Potato Chilly Shots", note: "12 pcs", prices: [p(129)], veg: true },
          { name: "Veg Cheesy Stick", note: "8 pcs", prices: [p(129)], veg: true },
        ],
      },
    ],
  },
  {
    id: "sandwich",
    label: "Sandwich & Bread",
    emoji: "🥪",
    groups: [
      {
        items: [
          { name: "Cheese Garlic Bread", note: "5 pcs", prices: [p(140)], veg: true },
          { name: "Chilly Cheese Garlic Bread", note: "5 pcs", prices: [p(150)], veg: true },
          { name: "Veg Cheese Grilled Sandwich", prices: [p(110)], veg: true },
          { name: "Veg American Club Sandwich", prices: [p(169)], veg: true },
          { name: "Paneer Cheesy Grilled", prices: [p(130)], veg: true },
          { name: "Paneer American Club Sandwich", prices: [p(199)], veg: true },
          { name: "Crispy Chicken Grilled", prices: [p(150)] },
          { name: "Chicken American Club Sandwich", prices: [p(280)] },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Shakes",
    emoji: "🥤",
    groups: [
      {
        title: "Shakes & Mocktails",
        items: [
          { name: "Sweet Lime Soda", prices: [p(49)] },
          { name: "Mint Lime Mojito", prices: [p(79)] },
          { name: "Blue Curacao", prices: [p(89)] },
          { name: "Passion Fruit", note: "Strawberry, watermelon, blueberry", prices: [p(89)] },
          { name: "Cold Coffee", prices: [p(99)] },
          { name: "Chocolate Milkshake", prices: [p(99)] },
          { name: "Strawberry Milkshake", prices: [p(99)] },
          { name: "Butterscotch Milkshake", prices: [p(99)] },
          { name: "Oreo Milkshake", prices: [p(99)] },
          { name: "Roasted Hazelnut Milkshake", prices: [p(129)] },
        ],
      },

    ],
  },\n  {\n    id: "dips",\n    label: "Dips",\n    emoji: "🥣",\n    groups: [\n{
        title: "Dips & Mayo",
        items: [
          { name: "Fresh Garlic Dip", prices: [p(30)] },
          { name: "Yellow / White Cheesy Dip", prices: [p(30)] },
          { name: "Garlic Mayo", prices: [p(30)] },
          { name: "Peri Peri Mayo", prices: [p(30)] },
          { name: "Barbeque Dips", prices: [p(30)] },
          { name: "Red Sriracha Sauce", prices: [p(30)] },
        ],
      },\n    ],\n  },\n
];

export type Highlight = {
  name: string;
  desc: string;
  from: number;
  emoji: string;
  tag?: string;
};

export const HIGHLIGHTS: Highlight[] = [
  { name: "Crispy Fried Chicken", desc: "Golden broast, wings, strips and popcorn fried fresh in store.", from: 85, emoji: "🍗", tag: "Signature" },
  { name: "Chicken Cheeza", desc: "No pizza base. Crispy chicken patty topped with veggies and melted cheese.", from: 250, emoji: "🍕", tag: "Chizza" },
  { name: "Zinger & Crispy Burgers", desc: "From the classic crispy burger to the Al-Baik Special and Korean crispy.", from: 99, emoji: "🍔", tag: "Fan favourite" },
  { name: "Loaded Wraps", desc: "Crispy, tandoori, peri peri, sriracha and more in veg, paneer or chicken.", from: 89, emoji: "🌯" },
  { name: "Cheesy Loaded Fries", desc: "Fries buried under melted mozzarella, chicken and peri peri.", from: 159, emoji: "🍟", tag: "Loaded" },
  { name: "Chicken Drumsticks", desc: "Hot n spicy drumsticks, crunchy outside and juicy inside.", from: 160, emoji: "🍖" },
  { name: "Al-Baik Special Platter", desc: "25 pcs popcorn, 8 nuggets, 4 strips and medium fries. Made for sharing.", from: 559, emoji: "🍗", tag: "Special" },
];
