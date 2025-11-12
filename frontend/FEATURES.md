# BetterBites - Feature Overview

## Implemented Features

### 🧭 App Architecture (Modular + Routed)
- React + Vite + Tailwind v4
- React Router with nested routes and an authenticated Profile area
- Global `AuthContext` with mock `signIn`, `signUp`, and `signOut`
- Root layout with sticky NavBar and footer
- Comprehensive mock data for products, recipes, and ingredients

### 🧱 Shared Components
- `NavBar`: Brand, About link, Notifications dropdown, Profile menu with sign-out, conditional SearchBar
- `SearchBar`: Navigates to `/search?q=...`
- `NotificationsBell`: Simple dropdown with demo alerts
- `ProfileMenu`: Shows user initial/name, quick links to profile subpages, and sign out
- `ProductCard`: Consistent card for search results

### 🏠 Home (Landing)
- Brand-aligned hero with subtle animated background accent
- Prominent search powered by `SearchBar`
- Trending searches and Quick Category chips
- Personalized banner linking to Preferences

### 🔐 Authentication Pages
- Separate pages: `SignIn` and `SignUp`
- Mock auth via context; redirects to Home after success

### 🔍 Enhanced Search Results Page
**Dynamic Filters Sidebar:**
- Texture filters (Crunchy, Creamy, Chewy, Soft, Crispy)
- Allergen avoidance (Peanuts, Tree Nuts, Dairy, Gluten, Soy, Eggs)
- Availability (All, Local Stores, Online)
- Health Score range slider (0-10)
- Diet Type filters (Vegan, Keto, Low-Sugar, Gluten-free)

**Sorting Options:**
- Sort by Healthiest, Most Popular (rating), Price

**Comparison View:**
- Toggle to show/hide side-by-side nutritional comparison
- Original snack vs. better alternative
- "Why this match?" explanations for each result

**Enhanced Result Cards:**
- Product image, name, brand
- Health score badge
- Star ratings with review count
- Tags (dietary info, allergen-free, kid-approved)
- Brief description
- Expandable comparison panel

### 📦 Product/Recipe Detail Page
**Header Section:**
- Large product image (emoji placeholder for demo)
- Health Score visual gauge (x/10)
- Customer Rating (5-star display with review count)
- Tags: Dietary info, allergen-free status, kid-approved badges
- "Add to Favorites" ❤️ button with profile selector
- "Save For Later" 📌 button with profile selector (personal or child profile)

**Short Description:**
- 2-3 sentence highlight of why it\'s a better choice

**Nutrition Snapshot:**
- Complete nutritional breakdown (calories, protein, fat, carbs, fiber, sugar, sodium)
- "Compare to Original" toggle - side-by-side comparison view
- Color-coded panels (red for original, green for better option)

**Ingredients List:**
- Clickable ingredients linking to individual Ingredient Pages
- Tags for each ingredient (whole grain, natural sweetener, etc.)

**Allergen Info:**
- Major allergen warnings (visual badges)
- "Safe for..." badges (e.g., "Safe for nut-free classrooms")
- Clear visual distinction between allergen-free and contains-allergen

**Recipe Instructions (for recipes):**
- Step-by-step numbered instructions
- Collapsible/expandable section

**Why This Match:**
- Dedicated section explaining the swap logic
- Highlights health benefits and similarity to original

**Swap Suggestions:**
- "If you like this, try..." section
- Grid of 3 similar products with quick-view cards
- Links to other Product/Recipe pages

**Reviews:**
- Interactive 5-star rating system
- Users can submit their own rating

### 🧪 Ingredient Detail Page
**Header Section:**
- Ingredient name, image (emoji), one-line summary
- Example: "A high-fiber, gluten-free flour alternative"

**Overview:**
- What it is, origin, common uses
- Neutral, factual tone

**Health Benefits & Concerns:**
- "Good for you because..." panel (green)
- "Watch out if..." panel (orange)
- List format with clear explanations

**Nutritional Overview:**
- Per 100g or typical serving
- Calories, protein, fat, fiber, sugar breakdown
- Visual grid layout

**Substitute Ingredients:**
- "Looking for alternatives?" section
- Clickable links to similar ingredients
- Categorized by use case (For Baking, For Sweetening, etc.)
- Reason for each substitute

**Recipes Using This Ingredient:**
- Dynamic list of recipes that include this ingredient
- Links to Product/Recipe pages
- Shows recipe type and health score

**Allergen & Sustainability Info:**
- Quick badges: "Eco-friendly source," "Non-GMO," "Vegan," "Contains nuts"
- Visual badge display

### 📖 Enhanced About Page
**Hero Section:**
- Emotional, clean messaging
- "Small food swaps. Big health wins."
- Gradient background with subtle animation
- Dual CTA buttons: Sign Up and Sign In

**How BetterBites Helps (Carousel/Slideshow):**
- 4-panel interactive carousel
- Discover healthier swaps
- Customize based on preferences
- Save & Track what works
- Shop smarter with grocery lists
- Dot navigation for slide control

**Feature Highlights:**
- 6 feature cards in grid layout
- Smart Search, Personalized Profiles, Child-Specific Preferences
- Ingredient Insights, Health Score Transparency, Local Availability
- Icon + title + description format

**Testimonials Section:**
- 3 parent testimonials
- 5-star ratings
- Real quotes with attribution
- Styled cards with gradient backgrounds

**Trust Section:**
- "Built with care, backed by science"
- Badges: Privacy first, Science-backed, Dietitian-approved
- Clear privacy statement

**Sign-Up Prompt:**
- Bottom CTA section
- "Ready to start swapping?"
- Dual action buttons
- Newsletter subscription link

### 👤 Profile Area (Authenticated)
- Route: `/profile/*` guarded by `RequireAuth`
- Tabs: Overview, Favorites, Saved Results, Preferences, Child Profiles
- Overview page with quick stats and navigation cards
- Demo data for favorites/saved and simple edit flows

### 🎨 Design Features
- Soft gradient surfaces, rounded corners, shadows
- Color system:
  - Emerald for primary actions and positive attributes
  - Red for warnings and allergen info
  - Blue/Purple for features and trust elements
  - Orange for cautions and concerns
  - Gray for neutral content
- Responsive layout with fluid spacing
- Interactive hover states and transitions
- Accessibility-friendly color contrasts

## User Flow
1. **Home** → Enter search or pick trending/category chip
2. **Sign In/Sign Up** if needed (or browse as guest)
3. **Search Results** → Apply filters (texture, allergens, diet type, health score)
4. **Sort results** by healthiest, most popular, or price
5. **Toggle comparison view** to see original vs. alternative
6. **Click product** → View detailed Product/Recipe page
7. **Save to Favorites or Save For Later** (choose profile)
8. **Click ingredient** → Learn about ingredient in detail
9. **Explore swap suggestions** from product pages
10. **Profile area** (after sign-in) → Manage Favorites, Saved Results, Preferences, Child Profiles

## Routes
- `/` - Home/Landing
- `/about` - About page with carousel and features
- `/signin`, `/signup` - Authentication
- `/search?q=query` - Search results with filters
- `/product/:id` - Product/Recipe detail page
- `/ingredient/:id` - Ingredient detail page
- `/profile` - Profile overview (authenticated)
- `/profile/favorites`, `/profile/saved`, `/profile/preferences`, `/profile/children` - Profile subpages

## Mock Data Structure
**Products** (`src/data/mockProducts.js`):
- 4 sample products/recipes with full details
- Nutrition comparison (original vs. better)
- Ingredients with clickable IDs
- Allergen information
- Recipe steps, swap suggestions
- Tags, dietary info, health scores

**Ingredients** (`src/data/mockIngredients.js`):
- 5 detailed ingredients
- Health benefits and concerns
- Nutritional breakdown per serving
- Substitute recommendations with reasons
- Recipes using each ingredient
- Allergen and sustainability badges

## Future Enhancements
- Real backend API integration
- Real authentication (JWT/session) and persistence
- Save/favorite across sessions with database
- User-generated reviews and ratings
- Nutritional comparison charts and visualizations
- Store location integration with real inventory
- Image scan/import for product detection
- Shopping list generation and export
- Recipe scaling and meal planning
- Community features (share swaps, discuss alternatives)
- Mobile app with barcode scanning
