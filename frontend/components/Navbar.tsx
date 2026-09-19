"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, ShoppingBag, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-100/80 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo with Glow Effect */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent tracking-tight">
                GreenNest
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 bg-emerald-50/50 p-1.5 rounded-full border border-emerald-100/60 shadow-sm">
            <Link
              href="/"
              className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Icons & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2.5 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {/* Cart item count badge */}
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md shadow-emerald-600/30">
                0
              </span>
            </Link>

            <div className="h-6 w-[1px] bg-gray-200 mx-1" />

            <Link
              href="/auth/login"
              className="px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50/80 rounded-xl transition-all duration-200"
            >
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 active:scale-95"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-3">
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-emerald-600"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-emerald-600 focus:outline-none rounded-lg bg-gray-50 border border-gray-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-emerald-100 px-6 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60 font-medium py-2.5 px-4 rounded-xl transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60 font-medium py-2.5 px-4 rounded-xl transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60 font-medium py-2.5 px-4 rounded-xl transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60 font-medium py-2.5 px-4 rounded-xl transition-colors"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <Link
              href="/auth/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl"
            >
              Log In
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold text-white bg-emerald-600 rounded-xl shadow-md shadow-emerald-600/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;