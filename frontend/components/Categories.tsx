import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Indoor Plants",
    count: "15+ Plants",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600",
    href: "/shop?category=indoor",
  },
  {
    id: 2,
    name: "Low Maintenance",
    count: "12+ Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f596e38bc74e?auto=format&fit=crop&q=80&w=600",
    href: "/shop?category=low-maintenance",
  },
  {
    id: 3,
    name: "Air Purifying",
    count: "10+ Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e735e?auto=format&fit=crop&q=80&w=600",
    href: "/shop?category=air-purifying",
  },
  {
    id: 4,
    name: "Succulents & Cacti",
    count: "18+ Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=600",
    href: "/shop?category=succulents",
  },
];

export const Categories = () => {
  return (
    <section className="py-16 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Discover By Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            Shop For Every Space
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Find the perfect green companion that fits your lifestyle and home decor.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-emerald-100 flex flex-col h-80"
            >
              {/* Category Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent group-hover:from-gray-900/90 transition-colors" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 mt-auto p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-medium text-emerald-300 uppercase tracking-wide mb-1">
                  {cat.count}
                </span>
                <h3 className="text-xl font-bold group-hover:text-emerald-300 transition-colors">
                  {cat.name}
                </h3>
                <div className="flex items-center space-x-1 text-sm font-semibold text-emerald-400 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;