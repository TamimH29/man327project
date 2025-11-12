import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Discover healthier swaps',
      desc: 'Find better alternatives for your family\'s favorite foods - without sacrificing taste or convenience.',
      emoji: '🔍'
    },
    {
      title: 'Customize for your family',
      desc: 'Set preferences, allergens, and dietary goals. Create profiles for each child\'s unique needs.',
      emoji: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Save & Track what works',
      desc: 'Build your go-to list of approved swaps and track what your family loves.',
      emoji: '📋'
    },
    {
      title: 'Shop smarter',
      desc: 'Get personalized grocery lists with healthier options available at your local stores.',
      emoji: '🛒'
    }
  ];

  const features = [
    { icon: '🔍', title: 'Smart Search', desc: 'Find healthier alternatives for any food in seconds' },
    { icon: '👤', title: 'Personalized Profiles', desc: 'Create profiles for each family member with unique preferences' },
    { icon: '🧒', title: 'Child-Specific Preferences', desc: 'Tailor texture, taste, and allergen filters for each kid' },
    { icon: '🧪', title: 'Ingredient Insights', desc: 'Learn about every ingredient with detailed nutritional info' },
    { icon: '💚', title: 'Health Score Transparency', desc: 'Understand exactly why each swap is healthier' },
    { icon: '🏪', title: 'Local Availability', desc: 'See which stores carry your favorite alternatives' }
  ];

  const testimonials = [
    {
      quote: "I swapped sugary cereal for a crunchy oat blend, and my kids didn't even notice!",
      author: 'Erica, mom of two',
      rating: 5
    },
    {
      quote: "BetterBites helped me find nut-free snacks my son actually enjoys. Game changer for school lunches.",
      author: 'Michael, dad of three',
      rating: 5
    },
    {
      quote: "The ingredient pages taught me so much. I feel confident making healthier choices now.",
      author: 'Priya, parent',
      rating: 5
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Small food swaps.<br />Big health wins.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            BetterBites helps parents make healthier choices — without giving up the foods your family loves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="px-8 py-4 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg">
              👋 New here? Sign Up
            </Link>
            <Link to="/signin" className="px-8 py-4 rounded-lg border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all">
              Already a member? Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* How BetterBites Helps Parents - Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How BetterBites Helps Parents</h2>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
              <div className="text-7xl mb-6">{slides[currentSlide].emoji}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{slides[currentSlide].title}</h3>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">{slides[currentSlide].desc}</p>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-emerald-600 w-8' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Everything you need to swap smarter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What parents are saying</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-800 italic mb-4">"{test.quote}"</p>
                <p className="text-sm text-gray-600 font-medium">— {test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with care, backed by science</h2>
          <p className="text-lg text-gray-700 mb-8">
            BetterBites is developed with input from dietitians and food scientists. Our recommendations are based on nutritional research and real parent feedback.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="px-6 py-3 bg-white rounded-lg border shadow-sm">
              <span className="text-gray-700 font-medium">🔒 Privacy first</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg border shadow-sm">
              <span className="text-gray-700 font-medium">🧪 Science-backed</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg border shadow-sm">
              <span className="text-gray-700 font-medium">👨‍⚕️ Dietitian-approved</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Your preferences and data stay with you. We never share your information with third parties.
          </p>
        </div>
      </section>

      {/* Sign-Up Prompt */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to start swapping?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Join thousands of parents making healthier choices for their families.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="px-8 py-4 rounded-lg bg-white text-emerald-600 font-semibold hover:bg-emerald-50 transition-all shadow-lg">
              Create Free Account
            </Link>
            <Link to="/signin" className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-emerald-700 transition-all">
              Sign In
            </Link>
          </div>
          <p className="mt-6 text-emerald-100 text-sm">
            Want healthy snack tips? <a href="#newsletter" className="underline hover:text-white">Subscribe to our weekly newsletter</a>
          </p>
        </div>
      </section>
    </main>
  );
}
