import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Interior Designer",
    comment: "GreenNest ke plants ki quality zabardast hai! Packaging itni secure thi ke e-commerce par pehli baar koi plant bina kisi damage ke mila.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Bilal Ahmed",
    role: "Software Engineer",
    comment: "Maine apne office desk ke liye Snake Plant mangaaya tha. Yeh bohot healthy condition mein aaya aur care instructions bhi sath thin.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Sobia Malik",
    role: "Plant Enthusiast",
    comment: "Inka customer support incredible hai! Mujhe watering ke baray mein kuch poochhna tha aur unhon ne foran guide kiya. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Happy Planters
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Hear from people who have transformed their spaces into lush green sanctuaries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 text-emerald-200">
                <Quote className="w-10 h-10 opacity-50" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User Profile Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                  <p className="text-xs text-emerald-600 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;