import React from "react";
import { Star, Sparkles, Quote } from "lucide-react";
import { REVIEWS } from "@/data/bakeryData";

export default function Reviews() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E6] border border-[#E8D4C2] text-[#9C663A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aprecieri Locale</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241C18] font-normal tracking-tight mb-4">
            Ce Spun Oaspeții Noștri
          </h2>
          <p className="text-base text-[#6A5D56] leading-relaxed">
            Fiecare zâmbet la tăierea tortului este cea mai mare răsplată pentru munca noastră în laborator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#EBDED2] shadow-xs hover:shadow-warm transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#D08B4B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#4A3E38] italic leading-relaxed mb-6 font-serif">
                  „{review.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2E8DF] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#241C18]">
                    {review.name}
                  </h3>
                  <span className="text-[11px] text-[#786B64] block">
                    {review.occasion}
                  </span>
                </div>
                <span className="text-[11px] text-[#9C663A] font-medium">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
