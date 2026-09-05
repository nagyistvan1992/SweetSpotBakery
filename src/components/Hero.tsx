import React from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";
import { BAKERY_INFO } from "@/data/bakeryData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F3E7DC] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0E6] border border-[#E8D4C2] text-[#9C663A] text-xs sm:text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#9C663A]" />
              <span>Cofetărie Artizanală de Casă • Satu Mare</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241C18] font-normal leading-[1.15] tracking-tight mb-6">
              Deserturi de casă, create cu <span className="italic font-serif text-[#9C663A]">suflet</span> și ingrediente nobile.
            </h1>

            {/* Slogan Quote from official social media */}
            <blockquote className="border-l-2 border-[#9C663A]/60 pl-4 py-1 mb-6 text-base sm:text-lg text-[#5A4D45] italic font-serif">
              „De la prăjituri simple la torturi spectaculoase – tot ce ai nevoie pentru a-ți răsfăța sufletul.”
            </blockquote>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6A5D56] leading-relaxed max-w-xl mb-8">
              Fiecare tort este lucrat manual în laboratorul nostru de casă din Satu Mare. Coacem exclusiv la comandă, folosind unt curat 82%, ciocolată belgiană veritabilă și piureuri naturale de fructe — fără premixuri sintetice sau compromisuri.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20să%20discutăm%20despre%20o%20comandă%20de%20tort.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9C663A] text-[#FAF7F2] font-medium text-sm sm:text-base hover:bg-[#82532B] transition-colors shadow-warm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Comandă pe WhatsApp</span>
              </a>

              <a
                href="#creatii"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#E0D4C7] text-[#241C18] font-medium text-sm sm:text-base hover:bg-[#FAF0E6] hover:border-[#9C663A]/40 transition-colors"
              >
                <span>Descoperă Creațiile</span>
                <ArrowRight className="w-4 h-4 text-[#9C663A]" />
              </a>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EBDED2] w-full text-xs sm:text-sm text-[#5A4D45]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9C663A] shrink-0" />
                <span>Unt 82% & fără premixuri</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#9C663A] shrink-0" />
                <span>Realizat exclusiv la comandă</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#9C663A] shrink-0" />
                <span>Personalizare în detaliu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main showcase photo */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-warm-lg border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80"
                  alt="Tort artizanal Sweet Spot Bakery Satu Mare"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Overlay bottom caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E8D4C2] font-semibold block mb-1">
                    Semnătura Sweet Spot
                  </span>
                  <p className="font-serif text-lg font-medium">
                    Tort de Fistic & Zmeură Proaspătă
                  </p>
                </div>
              </div>

              {/* Floating artisan stamp badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-warm border border-[#EBDED2] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#9C663A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#241C18] block">100% Proaspăt</span>
                  <span className="text-[11px] text-[#786B64] block">Făcut special pentru tine</span>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#241C18] text-[#FAF7F2] px-5 py-3 rounded-2xl shadow-warm-lg items-center gap-3 border border-white/10">
                <span className="text-2xl">✨</span>
                <div>
                  <span className="text-xs text-[#E8D4C2] block font-medium">Satu Mare</span>
                  <span className="text-sm font-serif font-medium">Ridicări & Livrări Evenimente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
