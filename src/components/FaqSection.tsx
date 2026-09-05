"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/bakeryData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5EFE6]/40 border-y border-[#EBDED2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDED2] text-[#9C663A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Răspunsuri Rapide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241C18] font-normal tracking-tight mb-4">
            Întrebări Frecvente
          </h2>
          <p className="text-base text-[#6A5D56] leading-relaxed">
            Tot ce vrei să știi despre comenzi, ingrediente și livrare în Satu Mare.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EBDED2] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#241C18]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9C663A] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5A4D45] leading-relaxed border-t border-[#F2E8DF] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
