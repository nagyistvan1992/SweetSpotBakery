"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Heart, Award, ChevronRight } from "lucide-react";
import { BAKERY_INFO, REAL_GALLERY_HERO } from "@/data/bakeryData";

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroCreations = [
    {
      image: "/images/real/dessert_cups_raspberry.jpg",
      title: "Cupe Desert cu Zmeură & Mascarpone",
      subtitle: "Candy bar & porții individuale festive",
      tag: "Candy Bar Satu Mare",
    },
    {
      image: "/images/real/cake_half_anniversary.jpg",
      title: "Tort Personalizat Dublu „48 & 25”",
      subtitle: "Jumătate verde mentă, jumătate roz pudră",
      tag: "100% Lucrat Manual",
    },
    {
      image: "/images/real/cake_medovik_berries.jpg",
      title: "Tort Medovik cu Fructe de Pădure",
      subtitle: "Foi fine cu miere și coroană de fructe proaspete",
      tag: "Rețetă Autentică de Casă",
    },
    {
      image: "/images/real/cake_vintage_gold.jpg",
      title: "Tort Vintage Auriu „Cute but Leo”",
      subtitle: "Dantelărie clasică Lambeth realizată la poș",
      tag: "Colecția Vintage",
    },
  ];

  const current = heroCreations[activeImageIndex];

  return (
    <section className="relative overflow-hidden pt-4 pb-14 md:pt-10 md:pb-20">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F3E7DC] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0E6] border border-[#E8D4C2] text-[#9C663A] text-xs sm:text-sm font-medium mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#9C663A]" />
              <span>Cofetărie de Casă • Satu Mare</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#241C18] font-normal leading-[1.18] tracking-tight mb-5">
              Torturi și deserturi create cu <span className="italic font-serif text-[#9C663A]">pasiune</span>, exclusiv la comandă.
            </h1>

            {/* Social Media Bio Slogan */}
            <blockquote className="border-l-2 border-[#9C663A] pl-4 py-1.5 mb-5 text-base sm:text-lg text-[#4A3E38] italic font-serif bg-[#FAF0E6]/30 rounded-r-xl">
              „De la prăjituri simple la torturi spectaculoase – tot ce ai nevoie pentru a-ți răsfăța sufletul.”
            </blockquote>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#6A5D56] leading-relaxed max-w-xl mb-7">
              Fiecare fotografie de pe acest site este <strong>o creație 100% reală</strong> realizată în atelierul Sweet Spot din Satu Mare. Fără imagini generate artificial, fără premixuri industriale — doar ingrediente curate, măiestrie manuală și dragoste de dulce.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20să%20discutăm%20despre%20o%20comandă%20la%20Sweet%20Spot.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#9C663A] text-[#FAF7F2] font-medium text-sm sm:text-base hover:bg-[#82532B] transition-colors shadow-warm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Comandă pe WhatsApp</span>
              </a>

              <a
                href="#creatii"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E0D4C7] text-[#241C18] font-medium text-sm sm:text-base hover:bg-[#FAF0E6] hover:border-[#9C663A]/40 transition-colors"
              >
                <span>Vezi Galeria Noastră</span>
                <ArrowRight className="w-4 h-4 text-[#9C663A]" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 border-t border-[#EBDED2] w-full text-xs text-[#5A4D45]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9C663A] shrink-0" />
                <span>Doar fotografii reale</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#9C663A] shrink-0" />
                <span>Unt 82% & ingrediente pure</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#9C663A] shrink-0" />
                <span>Satu Mare, România</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Image Interactive Hero Showcase */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Featured Photo */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-warm-lg border-4 border-white bg-[#EFE6DD]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover transition-all duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

              {/* Top badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#9C663A] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#EBDED2] shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.tag}</span>
              </div>

              {/* Floating Sweet Spot Logo Stamp */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs p-1.5 rounded-full shadow-md border border-[#EBDED2] flex items-center justify-center">
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src="/images/real/logo.jpg"
                    alt="Sweet Spot Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#E8D4C2] font-semibold block mb-0.5">
                  Creație Autentică Sweet Spot
                </span>
                <p className="font-serif text-lg sm:text-xl font-medium mb-1">
                  {current.title}
                </p>
                <p className="text-xs text-[#F2E8DF] line-clamp-1">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Thumbnail Selectors (Click to switch main photo) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {heroCreations.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-[#9C663A] ring-2 ring-[#9C663A]/30 scale-95 shadow-sm"
                      : "border-white/80 opacity-70 hover:opacity-100 hover:border-[#9C663A]/40"
                  }`}
                  aria-label={`Afișează ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Ribbon: Extra Real Photos from Social Media */}
        <div className="pt-6 border-t border-[#EBDED2]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9C663A] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Realizat recent în laboratorul nostru din Satu Mare</span>
            </span>
            <a
              href="#creatii"
              className="text-xs font-medium text-[#786B64] hover:text-[#9C663A] flex items-center gap-1"
            >
              <span>Vezi toate cele 15 creații</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
            {REAL_GALLERY_HERO.map((item, idx) => (
              <a
                key={idx}
                href="#creatii"
                className="group relative aspect-square rounded-2xl overflow-hidden border border-[#EBDED2] bg-[#EFE6DD] shadow-2xs hover:shadow-warm transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] text-white font-medium bg-black/50 backdrop-blur-xs px-1.5 py-0.5 rounded-md truncate opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
