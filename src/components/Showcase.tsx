"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Sparkles, X, ChevronRight, Eye } from "lucide-react";
import { PRODUCTS, ProductItem, BAKERY_INFO } from "@/data/bakeryData";

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: "all", label: "Toate Creațiile (15)" },
    { id: "cakes", label: "Torturi Festive" },
    { id: "vintage", label: "Stil Vintage Lambeth" },
    { id: "themed", label: "Tematice & Iluzie" },
    { id: "mini", label: "Cupe & Candy Bar" },
    { id: "prints", label: "Print Comestibil Zahăr" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <section id="creatii" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E6] border border-[#E8D4C2] text-[#9C663A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portofoliu Real • Fotografii Autentice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241C18] font-normal tracking-tight mb-4">
            Creațiile Noastre Dulci
          </h2>
          <p className="text-base sm:text-lg text-[#6A5D56] leading-relaxed">
            Fiecare imagine reflectă o comandă reală realizată de Sweet Spot în Satu Mare. Lucrăm manual fiecare detaliu pentru ca desertul tău să fie deopotrivă o încântare vizuală și o plăcere desăvârșită la gust.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#9C663A] text-[#FAF7F2] shadow-sm"
                  : "bg-white text-[#5A4D45] border border-[#EBDED2] hover:border-[#9C663A]/40 hover:bg-[#FAF0E6]/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EBDED2] shadow-sm hover:shadow-warm transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div
                className="relative aspect-square overflow-hidden cursor-pointer bg-[#F5EFE6]"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-xs text-[#241C18] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-[#9C663A]" />
                    Mărește Fotografia
                  </span>
                </div>

                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#9C663A] text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border border-[#EBDED2] shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9C663A] font-semibold block mb-1">
                    {product.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl text-[#241C18] font-medium mb-2.5 group-hover:text-[#9C663A] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A5D56] leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Flavor Notes Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.flavorNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#FAF0E6] text-[#7A502D] font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F2E8DF] flex items-center justify-between gap-2">
                  {product.servings && (
                    <span className="text-[11px] text-[#786B64] font-medium">
                      {product.servings}
                    </span>
                  )}
                  <a
                    href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20să%20comand%20sau%20să%20aflu%20detalii%20despre:%20${encodeURIComponent(
                      product.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C663A] hover:text-[#82532B] ml-auto transition-colors"
                  >
                    <span>Comandă modelul</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-16 bg-[#F5EFE6] rounded-3xl p-8 sm:p-10 border border-[#EBDED2] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9C663A] block mb-1">
              Comenzi Personalizate în Satu Mare
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#241C18] font-normal mb-2">
              Ai o fotografie de referință sau o dorință anume?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4D45] leading-relaxed">
              Realizăm torturi aniversare tematice, modele vintage cu dantelărie din cremă, printuri comestibile cu personajele preferate ale copiilor sau torturi elegante pentru nunți și botezuri.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Am%20o%20poză%20cu%20un%20model%20de%20tort%20pe%20care%20aș%20dori%20să%20îl%20discutăm.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9C663A] text-[#FAF7F2] text-xs sm:text-sm font-medium hover:bg-[#82532B] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Trimite poză pe WhatsApp</span>
            </a>
            <a
              href={BAKERY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#EBDED2] text-[#241C18] text-xs sm:text-sm font-medium hover:bg-[#FAF0E6] transition-colors"
            >
              <span>Vezi mai mult pe Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full overflow-hidden shadow-warm-lg border border-[#EBDED2] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Închide fereastra"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-[#241C18] flex items-center justify-center hover:bg-white shadow-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-square w-full bg-[#EFE6DD]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-[#9C663A] font-semibold block mb-1">
                {selectedProduct.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#241C18] mb-3 font-medium">
                {selectedProduct.title}
              </h3>
              <p className="text-sm text-[#5A4D45] leading-relaxed mb-5">
                {selectedProduct.description}
              </p>

              <div className="mb-6">
                <span className="text-xs font-semibold text-[#241C18] block mb-2">
                  Specificații & Arome:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#FAF0E6] text-[#7A502D] font-medium border border-[#E8D4C2]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProduct.servings && (
                <div className="text-xs text-[#786B64] mb-6 pb-6 border-b border-[#EBDED2]">
                  <strong>Porții orientative:</strong> {selectedProduct.servings}
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-full border border-[#EBDED2] text-xs font-medium text-[#5A4D45] hover:bg-white transition-colors"
                >
                  Închide
                </button>
                <a
                  href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20să%20comand%20sau%20să%20discutăm%20despre:%20${encodeURIComponent(
                    selectedProduct.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9C663A] text-white text-xs font-medium hover:bg-[#82532B] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comandă pe WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
