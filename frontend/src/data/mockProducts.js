// Mock product/recipe data
export const mockProducts = [
  {
    id: 1,
    name: 'Organic Oat Cookies',
    brand: "Nature's Best",
    type: 'product',
    image: '🍪',
    healthScore: 8.5,
    rating: 4.5,
    reviews: 127,
    texture: 'Crunchy',
    taste: 'Mildly Sweet',
    price: '$4.99',
    tags: ['Dairy-free', 'Whole grain', 'Kid-approved'],
    dietType: ['Vegan'],
    availability: 'online',
    ingredients: [
      { id: 'oats', name: 'Organic oats', tag: 'whole grain' },
      { id: 'coconut-oil', name: 'Organic coconut oil', tag: 'natural fat' },
      { id: 'cane-sugar', name: 'Organic cane sugar', tag: 'natural sweetener' }
    ],
    allergens: ['Gluten'],
    nutrition: {
      calories: 140,
      protein: 3,
      fat: 6,
      carbs: 20,
      fiber: 2,
      sugar: 8,
      sodium: 95
    },
    originalNutrition: {
      calories: 160,
      protein: 2,
      fat: 8,
      carbs: 22,
      fiber: 1,
      sugar: 12,
      sodium: 150
    },
    whyMatch: 'Lower sodium and sugar with added fiber. Similar crunchy texture and sweet taste your kids love.',
    description: 'Crispy oat cookies with a hint of sweetness — perfect for lunchboxes without the guilt.',
    swapSuggestions: [2, 3]
  },
  {
    id: 2,
    name: 'Apple Cinnamon Bites',
    brand: 'Happy Kids',
    type: 'recipe',
    image: '🍎',
    healthScore: 9.0,
    rating: 4.8,
    reviews: 203,
    texture: 'Soft & Chewy',
    taste: 'Naturally Sweet',
    price: '$3.99',
    tags: ['Gluten-free', 'No added sugar', 'Quick snack'],
    dietType: ['Vegan', 'Low-Sugar'],
    availability: 'local',
    ingredients: [
      { id: 'apples', name: 'Organic apples', tag: 'whole fruit' },
      { id: 'apple-juice', name: 'Organic apple juice', tag: 'natural sweetener' },
      { id: 'cinnamon', name: 'Cinnamon', tag: 'spice' }
    ],
    allergens: [],
    nutrition: {
      calories: 60,
      protein: 0,
      fat: 0,
      carbs: 15,
      fiber: 2,
      sugar: 11,
      sodium: 0
    },
    originalNutrition: {
      calories: 110,
      protein: 1,
      fat: 2,
      carbs: 22,
      fiber: 1,
      sugar: 18,
      sodium: 80
    },
    whyMatch: 'Made with real fruit, no preservatives. Half the sugar of typical fruit snacks with authentic apple flavor.',
    description: 'Soft, chewy apple bites sweetened only with fruit — a wholesome treat kids actually enjoy.',
    recipeSteps: [
      'Peel and dice 3 large apples',
      'Simmer with apple juice and cinnamon for 15 minutes',
      'Blend until smooth or leave chunky',
      'Spread on parchment and dehydrate or bake at 170°F for 4 hours',
      'Cut into bite-sized pieces and store in airtight container'
    ],
    swapSuggestions: [1, 4]
  },
  {
    id: 3,
    name: 'Banana Oat Bars',
    brand: 'GoodMom',
    type: 'product',
    image: '🍌',
    healthScore: 8.0,
    rating: 4.3,
    reviews: 89,
    texture: 'Soft',
    taste: 'Sweet & Nutty',
    price: '$5.49',
    tags: ['Gluten-free', 'Protein-rich', 'Kid-approved'],
    dietType: [],
    availability: 'local',
    ingredients: [
      { id: 'oats', name: 'Organic oats', tag: 'whole grain' },
      { id: 'bananas', name: 'Organic bananas', tag: 'whole fruit' },
      { id: 'honey', name: 'Organic honey', tag: 'natural sweetener' },
      { id: 'almonds', name: 'Almonds', tag: 'tree nuts' }
    ],
    allergens: ['Tree Nuts'],
    nutrition: {
      calories: 180,
      protein: 5,
      fat: 7,
      carbs: 26,
      fiber: 3,
      sugar: 12,
      sodium: 45
    },
    originalNutrition: {
      calories: 220,
      protein: 3,
      fat: 10,
      carbs: 32,
      fiber: 2,
      sugar: 18,
      sodium: 120
    },
    whyMatch: 'More protein and fiber, less sodium. Naturally sweet from bananas — no artificial flavors.',
    description: 'Chewy banana oat bars with a hint of honey — fuel for active kids without the crash.',
    swapSuggestions: [1, 2]
  },
  {
    id: 4,
    name: 'Veggie Crisps',
    brand: 'Garden Fresh',
    type: 'product',
    image: '🥕',
    healthScore: 7.5,
    rating: 4.0,
    reviews: 156,
    texture: 'Crispy',
    taste: 'Savory',
    price: '$3.49',
    tags: ['Vegan', 'Low-sodium', 'Colorful'],
    dietType: ['Vegan', 'Keto'],
    availability: 'online',
    ingredients: [
      { id: 'sweet-potatoes', name: 'Sweet potatoes', tag: 'whole vegetable' },
      { id: 'beets', name: 'Beets', tag: 'whole vegetable' },
      { id: 'sea-salt', name: 'Sea salt', tag: 'mineral' }
    ],
    allergens: [],
    nutrition: {
      calories: 130,
      protein: 2,
      fat: 5,
      carbs: 20,
      fiber: 3,
      sugar: 4,
      sodium: 85
    },
    originalNutrition: {
      calories: 150,
      protein: 2,
      fat: 10,
      carbs: 15,
      fiber: 1,
      sugar: 1,
      sodium: 180
    },
    whyMatch: 'Real vegetables, not potato starch. Vibrant colors make veggies fun, and the crunch satisfies chip cravings.',
    description: 'Colorful veggie chips that crunch like the real thing — made from sweet potatoes and beets.',
    swapSuggestions: [1, 3]
  }
];

export const getProductById = (id) => mockProducts.find(p => p.id === parseInt(id));
export const getProductsByIds = (ids) => mockProducts.filter(p => ids.includes(p.id));
