import Link from "next/link";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";

// Sample product data (Aap ise baad mein backend API ya database se connect kar sakte hain)
const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor Plant",
    price: "$45.00",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Snake Plant (Sansevieria)",
    category: "Low Maintenance",
    price: "$28.50",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593482892290-f596e38bc74e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Air Purifying",
    price: "$34.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e735e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    category: "Large Plant",
    price: "$65.00",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Handpicked For You
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
              Featured Green Plants
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold group transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-emerald-50/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {product.category}
                </span>
              </div>

              {/* Content Info */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>In Stock</span>
                    <div className="flex items-center text-amber-500 font-semibold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xl font-extrabold text-gray-900">
                    {product.price}
                  </span>
                  <Link
                    href={`/shop`}
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors shadow-sm"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;