import { useState } from 'react';

// Icon components
const Camera = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>;
const Search = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>;
const Heart = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>;
const TrendingDown = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>;
const Leaf = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>;
const Star = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const MapPin = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const Package = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>;
const ShoppingCart = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>;
const User = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;

// Health Score Component
const HealthScore = ({ score }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {[...Array(10)].map((_, i) => <Star key={i} size={16} className={i < score ? "fill-green-500 text-green-500" : "text-gray-300"} />)}
    </div>
    <span className="text-sm font-medium">{score}/10</span>
  </div>
);

// Nutrition Row Component
const NutritionRow = ({ label, value, bold, indent, indent2 }) => (
  <div className={`flex justify-between border-b border-gray-200 py-1 ${indent ? 'pl-4' : indent2 ? 'pl-8' : ''}`}>
    <span className={`text-sm ${bold ? 'font-bold' : ''}`}>{label}</span>
    <span className={`text-sm ${bold ? 'font-bold' : ''}`}>{value}</span>
  </div>
);

// Product Details Component
const ProductDetails = ({ product, onBack }) => (
  <div className="max-w-6xl mx-auto">
    <button onClick={onBack} className="mb-6 text-gray-600 hover:text-gray-900 font-medium">← Back to Results</button>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="text-8xl">{product.image}</div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
            <HealthScore score={product.healthScore} />
            <div className="text-4xl font-bold text-green-600 mt-4">{product.price}</div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-4">
          <p className="text-base font-semibold text-green-800 mb-3 flex items-center gap-2"><Heart size={20} />Health Benefits</p>
          <div className="flex flex-wrap gap-2">
            {product.benefits.map((b, i) => <span key={i} className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">{b}</span>)}
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <p className="text-base font-semibold text-blue-800 mb-3 flex items-center gap-2"><MapPin size={20} />Available at these stores</p>
          <div className="flex flex-wrap gap-3">
            {product.stores.map((s, i) => <span key={i} className="bg-blue-100 text-blue-700 px-5 py-2 rounded-lg text-sm font-medium">{s}</span>)}
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold shadow-lg text-lg">Add to Shopping List</button>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Package size={28} className="text-green-600" />Nutrition Facts</h3>
          <div className="border-t-8 border-black pt-2">
            <p className="text-sm font-bold mb-1">Serving Size: {product.detailedNutrition.servingSize}</p>
            <div className="border-t-4 border-black my-2"></div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
              <span className="font-bold text-lg">Calories</span>
              <span className="font-bold text-2xl">{product.detailedNutrition.calories}</span>
            </div>
            <div className="border-t-4 border-gray-400 pt-2">
              <p className="text-xs text-right font-bold mb-2">% Daily Value*</p>
              <NutritionRow label="Total Fat" value={product.detailedNutrition.totalFat} bold />
              <NutritionRow label="Saturated Fat" value={product.detailedNutrition.saturatedFat} indent />
              <NutritionRow label="Trans Fat" value={product.detailedNutrition.transFat} indent />
              <NutritionRow label="Cholesterol" value={product.detailedNutrition.cholesterol} bold />
              <NutritionRow label="Sodium" value={product.detailedNutrition.sodium} bold />
              <NutritionRow label="Total Carbohydrate" value={product.detailedNutrition.totalCarbs} bold />
              <NutritionRow label="Dietary Fiber" value={product.detailedNutrition.dietaryFiber} indent />
              <NutritionRow label="Total Sugars" value={product.detailedNutrition.totalSugars} indent />
              <NutritionRow label="Added Sugars" value={product.detailedNutrition.addedSugars} indent2 />
              <NutritionRow label="Protein" value={product.detailedNutrition.protein} bold />
            </div>
            <div className="border-t-4 border-black mt-4 pt-2">
              <p className="text-xs text-gray-600">* The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h3>
          <p className="text-base text-gray-700 leading-relaxed">{product.ingredients}</p>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
function App() {
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const alternatives = [
    { name: "Organic Oat Cookies", brand: "Nature's Best", image: "🍪", healthScore: 8.5, benefits: ["Whole Grains", "Low Sugar", "Natural Ingredients"], price: "$4.99", stores: ["Whole Foods", "Target", "Sprouts"], nutrition: { calories: 90, sugar: "3g", sodium: "45mg", fat: "3g" }, detailedNutrition: { servingSize: "2 cookies (28g)", calories: 90, totalFat: "3g", saturatedFat: "0.5g", transFat: "0g", cholesterol: "0mg", sodium: "45mg", totalCarbs: "14g", dietaryFiber: "2g", totalSugars: "3g", addedSugars: "2g", protein: "2g" }, ingredients: "Organic oats, organic coconut oil, organic cane sugar, organic vanilla extract, sea salt, baking soda" },
    { name: "Apple Cinnamon Bites", brand: "Happy Kids", image: "🍎", healthScore: 9.0, benefits: ["No Added Sugar", "Real Fruit", "High Fiber"], price: "$3.99", stores: ["Trader Joe's", "Walmart", "Kroger"], nutrition: { calories: 70, sugar: "2g", sodium: "20mg", fat: "1g" }, detailedNutrition: { servingSize: "1 pouch (25g)", calories: 70, totalFat: "1g", saturatedFat: "0g", transFat: "0g", cholesterol: "0mg", sodium: "20mg", totalCarbs: "15g", dietaryFiber: "3g", totalSugars: "2g", addedSugars: "0g", protein: "1g" }, ingredients: "Organic apples, organic apple juice concentrate, organic cinnamon, citric acid" },
    { name: "Banana Oat Bars", brand: "GoodMom", image: "🍌", healthScore: 8.0, benefits: ["Organic", "Kid-Approved", "Protein-Rich"], price: "$5.49", stores: ["Whole Foods", "Amazon Fresh", "Target"], nutrition: { calories: 95, sugar: "4g", sodium: "35mg", fat: "2g" }, detailedNutrition: { servingSize: "1 bar (30g)", calories: 95, totalFat: "2g", saturatedFat: "0.5g", transFat: "0g", cholesterol: "0mg", sodium: "35mg", totalCarbs: "17g", dietaryFiber: "2g", totalSugars: "4g", addedSugars: "1g", protein: "3g" }, ingredients: "Organic oats, organic bananas, organic honey, organic almond butter, organic vanilla, sea salt" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
              <Leaf size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">BetterBites</h1>
              <p className="text-sm text-gray-500">Better food choices for your family</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input type="text" placeholder="Search products..." className="w-96 px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg"><ShoppingCart size={24} className="text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg"><User size={24} className="text-gray-600" /></button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {selectedProduct ? (
          <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        ) : !scanned ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-12">
                <div className="max-w-2xl mx-auto text-center">
                  <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl flex items-center justify-center">
                    {scanning ? <div className="w-32 h-32 border-8 border-green-500 border-t-transparent rounded-full animate-spin"></div> : <Camera size={96} className="text-green-600" />}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{scanning ? "Scanning Product..." : "Scan a Product"}</h2>
                  <p className="text-xl text-gray-600 mb-8">Upload an image or use your camera to scan any food product and discover healthier alternatives</p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <button onClick={() => { setScanning(true); setTimeout(() => { setScanning(false); setScanned(true); }, 1500); }} disabled={scanning} className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 text-lg">{scanning ? "Analyzing..." : "Start Camera Scan"}</button>
                    <button onClick={() => { setScanning(true); setTimeout(() => { setScanning(false); setScanned(true); }, 1500); }} disabled={scanning} className="px-8 py-4 bg-white border-2 border-green-500 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all disabled:opacity-50 text-lg">Upload Image</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2"><Heart size={24} className="text-red-500" />How It Works</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3"><span className="text-green-600 font-bold">1.</span><span>Scan any packaged food item with your camera</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-600 font-bold">2.</span><span>Get instant health ratings and concerns</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-600 font-bold">3.</span><span>Discover healthier alternatives nearby</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-600 font-bold">4.</span><span>Compare nutrition and make better choices</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-3">Why BetterBites?</h3>
                <p className="text-green-50 leading-relaxed">Make informed food choices for your family. Our AI-powered scanner identifies unhealthy ingredients and suggests better alternatives available at stores near you.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scanned Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-6">
                  <div className="text-8xl">🍪</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Chocolate Chip Cookies</h3>
                    <p className="text-lg text-gray-600 mb-4">Sweet Treats</p>
                    <HealthScore score={2.5} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <p className="text-base font-semibold text-red-800 mb-3 flex items-center gap-2"><TrendingDown size={20} />Health Concerns</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">High Sugar</span>
                      <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">Artificial Colors</span>
                      <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">Trans Fats</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-xs text-gray-500">Calories</div><div className="text-lg font-bold text-gray-900">160</div></div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-xs text-gray-500">Sugar</div><div className="text-lg font-bold text-gray-900">12g</div></div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-xs text-gray-500">Sodium</div><div className="text-lg font-bold text-gray-900">180mg</div></div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-xs text-gray-500">Fat</div><div className="text-lg font-bold text-gray-900">8g</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Leaf size={32} className="text-green-500" />Healthier Alternatives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alternatives.map((alt, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-6xl">{alt.image}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-900">{alt.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{alt.brand}</p>
                        <div className="text-2xl font-bold text-green-600">{alt.price}</div>
                      </div>
                    </div>
                    <HealthScore score={alt.healthScore} />
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-4">
                      <div className="flex flex-wrap gap-2">
                        {alt.benefits.map((b, j) => <span key={j} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">{b}</span>)}
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                      <p className="text-xs font-semibold text-blue-800 mb-2">Available at:</p>
                      <div className="flex flex-wrap gap-2">
                        {alt.stores.map((s, j) => <span key={j} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{s}</span>)}
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {Object.entries(alt.nutrition).map(([k, v]) => (
                        <div key={k} className="bg-gray-50 rounded-lg p-2 text-center"><div className="text-xs text-gray-500 capitalize">{k}</div><div className="text-sm font-bold text-green-600">{v}</div></div>
                      ))}
                    </div>
                    <button onClick={() => setSelectedProduct(alt)} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">View Details</button>
                  </div>
                ))}
              </div>
              <button onClick={() => setScanned(false)} className="w-full mt-8 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all text-lg">Scan Another Product</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
