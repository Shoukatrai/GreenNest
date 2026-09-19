import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/Products"; // ya FeaturedProducts
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
      <Footer />
      </main>
    </div>
  );
};

export default Page;