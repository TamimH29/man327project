// Mock ingredient data
export const mockIngredients = {
  'oats': {
    id: 'oats',
    name: 'Oats',
    image: '🌾',
    summary: 'A high-fiber, gluten-free whole grain',
    description: 'Oats are a nutritious whole grain packed with soluble fiber, particularly beta-glucan, which supports heart health and digestion. Commonly used in breakfast foods, baked goods, and snacks.',
    origin: 'Cultivated worldwide, with major production in North America and Europe',
    healthBenefits: [
      'Rich in soluble fiber that helps lower cholesterol',
      'Provides sustained energy and keeps you full longer',
      'Contains antioxidants and anti-inflammatory compounds',
      'May help regulate blood sugar levels'
    ],
    concerns: [
      'May contain traces of gluten from cross-contamination (look for certified gluten-free)',
      'Some people may experience digestive discomfort when first increasing fiber intake'
    ],
    nutrition: {
      per: '100g',
      calories: 389,
      protein: 17,
      fat: 7,
      carbs: 66,
      fiber: 11,
      sugar: 1
    },
    substitutes: [
      { id: 'quinoa-flakes', name: 'Quinoa flakes', reason: 'For gluten-free, protein-rich alternative' },
      { id: 'buckwheat', name: 'Buckwheat groats', reason: 'For nutty flavor and complete protein' },
      { id: 'millet', name: 'Millet', reason: 'For light texture and easy digestion' }
    ],
    usedIn: [1, 3],
    badges: ['Whole grain', 'Heart-healthy', 'High fiber', 'Eco-friendly']
  },
  'apples': {
    id: 'apples',
    name: 'Apples',
    image: '🍎',
    summary: 'Naturally sweet fruit packed with fiber and antioxidants',
    description: 'Apples are one of the most popular fruits worldwide, known for their crisp texture, natural sweetness, and impressive nutritional profile. Rich in pectin fiber and vitamin C.',
    origin: 'Native to Central Asia, now grown globally in temperate climates',
    healthBenefits: [
      'High in antioxidants that protect cells from damage',
      'Pectin fiber supports gut health and regularity',
      'May reduce risk of heart disease and type 2 diabetes',
      'Low in calories and naturally hydrating'
    ],
    concerns: [
      'Conventional apples may have pesticide residues (consider organic)',
      'High fructose content may affect blood sugar in sensitive individuals'
    ],
    nutrition: {
      per: '1 medium apple (182g)',
      calories: 95,
      protein: 0,
      fat: 0,
      carbs: 25,
      fiber: 4,
      sugar: 19
    },
    substitutes: [
      { id: 'pears', name: 'Pears', reason: 'For similar sweetness and texture' },
      { id: 'peaches', name: 'Peaches', reason: 'For softer texture and stone fruit flavor' },
      { id: 'berries', name: 'Mixed berries', reason: 'For lower sugar and higher antioxidants' }
    ],
    usedIn: [2],
    badges: ['Natural sweetener', 'Whole fruit', 'Vitamin C', 'Low calorie']
  },
  'coconut-oil': {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    image: '🥥',
    summary: 'A tropical fat with unique medium-chain fatty acids',
    description: 'Coconut oil is extracted from mature coconuts and is solid at room temperature. It contains primarily saturated fats, with a high proportion of medium-chain triglycerides (MCTs) that are metabolized differently than other fats.',
    origin: 'Derived from coconuts grown in tropical regions',
    healthBenefits: [
      'MCTs may support quick energy and metabolism',
      'Natural antimicrobial properties',
      'May raise HDL (good) cholesterol',
      'Heat-stable for cooking and baking'
    ],
    concerns: [
      'High in saturated fat (use in moderation)',
      'May raise LDL (bad) cholesterol in some individuals',
      'Not suitable for those avoiding tree nut products (coconut allergy)'
    ],
    nutrition: {
      per: '1 tablespoon (14g)',
      calories: 121,
      protein: 0,
      fat: 14,
      carbs: 0,
      fiber: 0,
      sugar: 0
    },
    substitutes: [
      { id: 'olive-oil', name: 'Olive oil', reason: 'For heart-healthy monounsaturated fats' },
      { id: 'avocado-oil', name: 'Avocado oil', reason: 'For high smoke point and neutral flavor' },
      { id: 'butter', name: 'Grass-fed butter', reason: 'For rich flavor in baking' }
    ],
    usedIn: [1],
    badges: ['Natural fat', 'MCT source', 'Vegan', 'Dairy-free']
  },
  'bananas': {
    id: 'bananas',
    name: 'Bananas',
    image: '🍌',
    summary: 'Potassium-rich fruit with natural sweetness',
    description: 'Bananas are tropical fruits known for their convenience, natural sweetness, and high potassium content. They provide quick energy and are easily digestible.',
    origin: 'Native to Southeast Asia, now grown in tropical regions worldwide',
    healthBenefits: [
      'Excellent source of potassium for heart and muscle health',
      'Provides quick, natural energy from easily digestible carbs',
      'Contains prebiotics that support gut bacteria',
      'May help regulate blood pressure'
    ],
    concerns: [
      'Higher in natural sugars and carbs than some fruits',
      'Ripeness affects glycemic index (greener = lower)',
      'Not suitable for low-carb diets like keto'
    ],
    nutrition: {
      per: '1 medium banana (118g)',
      calories: 105,
      protein: 1,
      fat: 0,
      carbs: 27,
      fiber: 3,
      sugar: 14
    },
    substitutes: [
      { id: 'dates', name: 'Dates', reason: 'For natural sweetness in baking' },
      { id: 'applesauce', name: 'Applesauce', reason: 'For moisture and binding in recipes' },
      { id: 'sweet-potato', name: 'Sweet potato puree', reason: 'For lower sugar and more fiber' }
    ],
    usedIn: [3],
    badges: ['Whole fruit', 'Natural sweetener', 'High potassium', 'Quick energy']
  },
  'sweet-potatoes': {
    id: 'sweet-potatoes',
    name: 'Sweet Potatoes',
    image: '🍠',
    summary: 'Nutrient-dense root vegetable with natural sweetness',
    description: 'Sweet potatoes are starchy root vegetables rich in beta-carotene (vitamin A), fiber, and complex carbohydrates. Their natural sweetness makes them versatile for both savory and sweet dishes.',
    origin: 'Native to Central and South America, now grown globally',
    healthBenefits: [
      'Extremely high in vitamin A (beta-carotene) for eye health',
      'Rich in fiber for digestive health',
      'Contains antioxidants that fight inflammation',
      'May help regulate blood sugar despite natural sweetness'
    ],
    concerns: [
      'Higher in carbs and calories than some vegetables',
      'Oxalates may affect kidney stone formation in susceptible individuals'
    ],
    nutrition: {
      per: '1 medium sweet potato (130g, baked)',
      calories: 112,
      protein: 2,
      fat: 0,
      carbs: 26,
      fiber: 4,
      sugar: 5
    },
    substitutes: [
      { id: 'butternut-squash', name: 'Butternut squash', reason: 'For similar sweetness and texture' },
      { id: 'carrots', name: 'Carrots', reason: 'For beta-carotene and crunch' },
      { id: 'pumpkin', name: 'Pumpkin', reason: 'For lower carb alternative in purees' }
    ],
    usedIn: [4],
    badges: ['Whole vegetable', 'Vitamin A', 'High fiber', 'Antioxidants']
  }
};

export const getIngredientById = (id) => mockIngredients[id];
export const getAllIngredients = () => Object.values(mockIngredients);
