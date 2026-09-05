import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Showcase from "@/components/Showcase";
import Ingredients from "@/components/Ingredients";
import OrderEstimator from "@/components/OrderEstimator";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#241C18]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <Showcase />
        <Ingredients />
        <OrderEstimator />
        <Process />
        <Reviews />
        <FaqSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}
