"use client";

import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { BAKERY_INFO } from "@/data/bakeryData";

export default function MobileQuickBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#EBDED2] px-4 py-2.5 shadow-warm-lg">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href="#estimator"
          className="flex-1 py-2 px-3 rounded-xl bg-white border border-[#EBDED2] text-[#241C18] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#9C663A]" />
          <span>Configurator</span>
        </a>

        <a
          href={BAKERY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-xl bg-white border border-[#EBDED2] text-[#241C18] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <InstagramIcon className="w-3.5 h-3.5 text-[#9C663A]" />
          <span>Instagram</span>
        </a>

        <a
          href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20informații%20despre%20o%20comandă%20la%20Sweet%20Spot.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-xl bg-[#9C663A] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
