'use client';

import Image from "next/image";
import { useState } from "react";

// Mock data for perfume reviews
const perfumes = [
  {
    id: 1,
    name: "Chanel No. 5",
    brand: "Chanel",
    rating: 4.8,
    reviews: 1247,
    price: "$150",
    category: "Floral",
    image: "/api/placeholder/300/400",
    description: "The world's most iconic fragrance with timeless elegance",
    topNotes: ["Aldehydes", "Bergamot", "Lemon"],
    middleNotes: ["Rose", "Jasmine", "Lily of Valley"],
    baseNotes: ["Sandalwood", "Vanilla", "Vetiver"]
  },
  {
    id: 2,
    name: "Dior Sauvage",
    brand: "Dior",
    rating: 4.6,
    reviews: 892,
    price: "$120",
    category: "Fresh",
    image: "/api/placeholder/300/400",
    description: "A radically fresh composition with bergamot and pepper",
    topNotes: ["Bergamot", "Pink Pepper"],
    middleNotes: ["Geranium", "Lavender", "Elemi"],
    baseNotes: ["Ambroxan", "Cedar", "Labdanum"]
  },
  {
    id: 3,
    name: "Tom Ford Black Orchid",
    brand: "Tom Ford",
    rating: 4.7,
    reviews: 634,
    price: "$180",
    category: "Oriental",
    image: "/api/placeholder/300/400",
    description: "Luxurious and sensual with dark florals and rich spices",
    topNotes: ["Black Truffle", "Bergamot", "Black Currant"],
    middleNotes: ["Black Orchid", "Spicy Notes", "Fruity Notes"],
    baseNotes: ["Patchouli", "Vanilla", "Sandalwood"]
  },
  {
    id: 4,
    name: "Versace Eros",
    brand: "Versace",
    rating: 4.5,
    reviews: 756,
    price: "$90",
    category: "Fresh",
    image: "/api/placeholder/300/400",
    description: "Fresh, woody, and slightly oriental with mint and vanilla",
    topNotes: ["Mint", "Green Apple", "Lemon"],
    middleNotes: ["Tonka Bean", "Ambroxan", "Geranium"],
    baseNotes: ["Vanilla", "Vetiver", "Oakmoss"]
  },
  {
    id: 5,
    name: "Yves Saint Laurent Black Opium",
    brand: "YSL",
    rating: 4.9,
    reviews: 1105,
    price: "$140",
    category: "Oriental",
    image: "/api/placeholder/300/400",
    description: "Addictive gourmand fragrance with coffee and vanilla",
    topNotes: ["Pink Pepper", "Orange Blossom", "Pear"],
    middleNotes: ["Coffee", "Jasmine", "Bitter Almond"],
    baseNotes: ["Vanilla", "Patchouli", "Cedar"]
  },
  {
    id: 6,
    name: "Creed Aventus",
    brand: "Creed",
    rating: 4.8,
    reviews: 543,
    price: "$350",
    category: "Fresh",
    image: "/api/placeholder/300/400",
    description: "Sophisticated blend of pineapple, birch, and musk",
    topNotes: ["Pineapple", "Bergamot", "Black Currant"],
    middleNotes: ["Birch", "Patchouli", "Moroccan Jasmine"],
    baseNotes: ["Musk", "Oakmoss", "Ambergris"]
  }
];

const categories = ["All", "Fresh", "Floral", "Oriental", "Woody"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPerfumes = perfumes.filter(perfume => {
    const matchesCategory = selectedCategory === "All" || perfume.category === selectedCategory;
    const matchesSearch = perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         perfume.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                FragranceHub
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Reviews</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Brands</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Your
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Perfect Scent
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore thousands of perfume reviews and find your signature fragrance with our comprehensive guide to the world's finest perfumes.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search perfumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfume Reviews Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Reviews
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPerfumes.map((perfume) => (
              <div
                key={perfume.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:scale-105"
              >
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100">
                  <Image
                    src={perfume.image}
                    alt={perfume.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-sm font-semibold text-purple-600">{perfume.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{perfume.name}</h3>
                      <p className="text-gray-600">{perfume.brand}</p>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">{perfume.price}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{perfume.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(perfume.rating)}
                      </div>
                      <span className="text-gray-600 text-sm">({perfume.reviews} reviews)</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{perfume.rating}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-xs text-gray-600 mb-2">
                      <span className="font-medium">Top:</span> {perfume.topNotes.join(", ")}
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      <span className="font-medium">Heart:</span> {perfume.middleNotes.join(", ")}
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">Base:</span> {perfume.baseNotes.join(", ")}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium">
                    Read Full Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              FragranceHub
            </h3>
            <p className="text-gray-600 mb-8">
              Your ultimate destination for perfume reviews and fragrance discovery.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
