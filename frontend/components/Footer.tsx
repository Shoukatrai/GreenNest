"use client"
import Link from "next/link";
import { Leaf, Mail, Send, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-emerald-900/40 border border-emerald-700/40 rounded-3xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Join the GreenNest Community 🌿
            </h3>
            <p className="text-emerald-200/80 text-sm max-w-xl">
              Subscribe to get 10% off on your first plant order, weekly gardening tips, and exclusive new arrivals.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full lg:w-auto gap-2">
            <div className="relative flex-grow sm:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-800/80 border border-emerald-700/60 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition-colors flex items-center justify-center shadow-lg shadow-emerald-600/20"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                GreenNest
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your ultimate destination for indoor plants, eco-friendly pots, and expert gardening advice to bring nature closer to your home.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors">
                {/* <Facebook className="w-5 h-5" /> */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors">
                {/* <Instagram className="w-5 h-5" /> */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors">
                {/* <Twitter className="w-5 h-5" /> */}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-emerald-400 transition-colors">Shop Plants</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shop?category=indoor" className="hover:text-emerald-400 transition-colors">Indoor Plants</Link>
              </li>
              <li>
                <Link href="/shop?category=low-maintenance" className="hover:text-emerald-400 transition-colors">Low Maintenance</Link>
              </li>
              <li>
                <Link href="/shop?category=air-purifying" className="hover:text-emerald-400 transition-colors">Air Purifying</Link>
              </li>
              <li>
                <Link href="/shop?category=succulents" className="hover:text-emerald-400 transition-colors">Succulents</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>123 Green Avenue, Plant District, Karachi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>+92 (300) 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>support@greennest.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GreenNest. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;