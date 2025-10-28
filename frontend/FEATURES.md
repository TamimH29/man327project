# SmartSwap - Feature Overview

## Implemented Features

### 🏠 Welcome/Landing Page
- **Large centered "SmartSwap" branding** with bold typography
- **"What do you want to SmartSwap?"** headline
- **Search bar** that accepts food/snack queries
- **Feature highlights** showcasing personalization, health benefits, and ease of use
- Clicking search redirects to authentication

### 🔐 Authentication Page
- **Login/Signup toggle** - seamless switching between modes
- **Form fields**: Name (signup only), Email, Password
- **Mock authentication** - currently simulates login for demo purposes
- After login, redirects to search results page

### 🔍 Search Results Page with Filters
- **Search bar at top** for new queries
- **Filter button** that reveals comprehensive filtering options:
  - **Texture filter**: Crunchy, Soft, Chewy, Creamy
  - **Health Score slider**: Minimum health rating (0-10)
  - **Availability**: All stores, Local only, Online
  - **Child Profile selector**: Choose which child you're shopping for
  - **Allergen filtering** (built into results display)

### 📊 Results Display (10 Items)
Each product card shows:
- **Product image** (emoji placeholder)
- **Product name & brand**
- **Price**
- **Health Score** (1-10 stars visualization)
- **Texture** information
- **Taste** profile
- **Key ingredients** list
- **Allergen warnings** (highlighted in red)
- **Save Result** button

### 👤 Profile Sidebar (Right Panel)
- **User info** with avatar and email
- **Manage Profile** button
- **Favorites section** - displays favorite foods
- **Saved Results** - shows previously saved product swaps
- Sticky positioning for easy access while scrolling

### 👨‍👩‍👧 Profile Management Page
**Parent Profile Section:**
- Edit name and email

**Child Profiles Section:**
- **View all child profiles** as cards
- **Add new child** button with expandable form
- Each child profile includes:
  - Name
  - Age
  - Favorite foods (displayed as green tags)
  - Allergies (displayed as red tags)
  - Health conditions (displayed as orange tags)
- Profile cards show all information in an organized, visual layout

### 🎨 Design Features
- **Gradient backgrounds** (blue, purple, pink tones)
- **Modern UI** with rounded corners and shadows
- **Color-coded information**:
  - Blue: Primary actions and branding
  - Green: Positive attributes (favorites, benefits)
  - Red: Warnings (allergens)
  - Orange: Health conditions
- **Responsive layout** adapts to different screen sizes
- **Interactive elements** with hover effects and transitions

## User Flow
1. **Landing Page** → Enter search query → Click search
2. **Auth Page** → Login or Sign up
3. **Search Results** → View 10 healthier alternatives with filters
4. **Profile Sidebar** → Quick access to favorites and saved results
5. **Profile Page** → Manage user info and child profiles

## Future Enhancements (Not Yet Implemented)
- Real backend API integration
- Actual authentication with JWT tokens
- Database persistence for profiles and favorites
- Image upload for product scanning
- Store location integration
- Shopping list feature
- Nutritional comparison charts
- Recipe suggestions based on swaps
