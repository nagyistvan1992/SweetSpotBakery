import React from "react";
import { MessageSquare, UtensilsCrossed, Clock, CheckCircle2, Sparkles } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Ideea & Inspirația",
      description:
        "Alege un model din creațiile noastre sau trimite-ne o poză de referință pe WhatsApp / Instagram. Povestim deschis despre stilul și tematica dorită.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Arome & Porții",
      description:
        "Stabilim împreună compoziția ideală (fistic, ciocolată belgiană, vanilie, zmeură), numărul de porții și eventualele personalizări cu print comestibil.",
      icon: UtensilsCrossed,
    },
    {
      step: "03",
      title: "Pregătire Proaspătă",
      description:
        "Coacem blaturile și asamblăm cremele artizanale cu 24-48 de ore înainte de eveniment, garantând prospețime maximă și zero congelare.",
      icon: Clock,
    },
    {
      step: "04",
      title: "Răsfățul Tău",
      description:
        "Ridicarea se face comod în Satu Mare la ora agreată. Pentru nunți și evenimente mari, asigurăm transportul securizat direct la sală.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="proces" className="py-16 md:py-24 bg-[#F5EFE6]/40 border-y border-[#EBDED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDED2] text-[#9C663A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simplu & Clar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241C18] font-normal tracking-tight mb-4">
            Cum Funcționează Comanda
          </h2>
          <p className="text-base text-[#6A5D56] leading-relaxed">
            Un proces transparent și prietenos, de la prima idee până la momentul în care tai prima felie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EBDED2] shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-light text-[#C89467] block mb-4">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-[#9C663A] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#241C18] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A5D56] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
