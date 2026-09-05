import React from "react";
import { Sparkles, Check, Droplets, Heart, Wheat, ShieldCheck } from "lucide-react";

export default function Ingredients() {
  const points = [
    {
      title: "Unt Pur 82% Grăsime",
      description:
        "Baza oricărui aluat fraged și a oricărei creme catifelate. Nu folosim margarină, grăsimi vegetale hidrogenate sau uleiuri ieftine.",
      icon: Wheat,
    },
    {
      title: "Ciocolată Belgiană Veritabilă",
      description:
        "Folosim ciocolată fină cu conținut ridicat de unt de cacao pur, ce oferă un gust intens și o textură mătăsoasă fără compuși sintetici.",
      icon: Heart,
    },
    {
      title: "Frișcă Naturală & Mascarpone Italian",
      description:
        "Exclusiv frișcă naturală din lapte (35% grăsime) și mascarpone autentic. Refuzăm ferm friștile vegetale la tub sau spray.",
      icon: Droplets,
    },
    {
      title: "Piureuri Pure de Fructe & Fructe Proaspete",
      description:
        "Inserțiile din torturi sunt realizate din zmeură, vișine, căpșuni sau mango proaspete, fierte lent cu un minim de zahăr.",
      icon: Sparkles,
    },
    {
      title: "Păstăi de Vanilie de Madagascar",
      description:
        "Aroma caldă și nobilă din cremele noastre provine din extracte veritabile de vanilie, nu din esențe artificiale sintetice.",
      icon: ShieldCheck,
    },
    {
      title: "Fără Premixuri sau Amelioratori",
      description:
        "Fiecare blat este copt de la zero cu făină aleasă, ouă proaspete și dragoste de meșteșug curat de cofetărie.",
      icon: Check,
    },
  ];

  return (
    <section id="ingrediente" className="py-16 md:py-24 bg-[#F5EFE6]/50 border-y border-[#EBDED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDED2] text-[#9C663A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Calitate Fără Compromis</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241C18] font-normal tracking-tight mb-4">
            Ingrediente Nobile. Gust Autentic.
          </h2>
          <p className="text-base sm:text-lg text-[#6A5D56] leading-relaxed">
            Un tort spectaculos începe din interior. Iată de ce creațiile Sweet Spot au acel gust inconfundabil de prăjitură adevărată de casă.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#EBDED2] shadow-xs hover:shadow-warm transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-[#9C663A] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#241C18] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6A5D56] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance banner */}
        <div className="mt-12 text-center">
          <p className="font-script text-2xl sm:text-3xl text-[#9C663A]">
            „Rețete curate, respect pentru gust și bucuria de a împărtăși dulcele adevărat.”
          </p>
        </div>
      </div>
    </section>
  );
}
