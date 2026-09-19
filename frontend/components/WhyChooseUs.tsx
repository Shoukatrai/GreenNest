import { ShieldCheck, Truck, Sprout, Headphones, RefreshCw, Award } from "lucide-react";

const benefits = [
  {
    icon: <Sprout className="w-6 h-6 text-emerald-600" />,
    title: "100% Organic & Healthy",
    description: "Every plant is nurtured with organic soil and expert care before reaching your home.",
  },
  {
    icon: <Truck className="w-6 h-6 text-emerald-600" />,
    title: "Eco-Friendly Delivery",
    description: "Secure, plastic-free packaging designed specifically to keep leaves and pots safe in transit.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-emerald-600" />,
    title: "30-Day Plant Guarantee",
    description: "If your plant doesn't thrive within 30 days, we will replace it free of charge.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-emerald-600" />,
    title: "Free Expert Support",
    description: "Get lifetime access to professional gardening tips, watering guides, and care advice.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Why GreenNest
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            Built for Plant Lovers
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            We make indoor gardening simple, sustainable, and joyful for everyone.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-emerald-50/40 border border-emerald-100/60 hover:bg-emerald-50/80 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-emerald-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;