import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Truck, Headphones } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white py-16 lg:py-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Healthy & Natural Plants</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Bring Nature Inside with <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">GreenNest</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Transform your living space into a serene sanctuary. Discover hand-picked indoor plants, low-maintenance succulents, and premium eco-friendly pots delivered straight to your door.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30 transition-all duration-200 group"
              >
                <span>Explore Shop</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white hover:bg-emerald-50/50 border border-gray-200 rounded-xl transition-all duration-200"
              >
                Our Story
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">50+</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Plant Species</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">1,500+</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Happy Planters</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">4.9★</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Customer Rating</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual / Image Card Area */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-emerald-100 aspect-[4/5]">
                {/* Yahan aap apni plant image laga sakte hain, abhi placeholder gradient / styling hai */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800"
                  alt="Beautiful indoor plant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    🌿
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Fresh & Oxygen Rich</p>
                    <p className="text-xs text-gray-500">Hand-delivered with care instructions</p>
                  </div>
                </div>
              </div>

              {/* Decorative background accent shape */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-200/50 rounded-full blur-2xl -z-10" />
            </div>
          </div>

        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-emerald-100/60">
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100/60">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Free Plant Shipping</h3>
              <p className="text-xs text-gray-500">On orders over $50</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100/60">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Healthy Plant Guarantee</h3>
              <p className="text-xs text-gray-500">30-day replacement policy</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100/60">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Plant Care Support</h3>
              <p className="text-xs text-gray-500">Expert gardening tips anytime</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;