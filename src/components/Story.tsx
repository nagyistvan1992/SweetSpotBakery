import React from "react";
import Image from "next/image";
import { Heart, Sparkles, CheckCircle2 } from "lucide-react";

export default function Story() {
  return (
    <section id="poveste" className="py-16 md:py-24 bg-[#F5EFE6]/60 border-y border-[#EBDED2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Story */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-warm border-4 border-white aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                alt="Pasiunea pentru patiserie artizanală de casă"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <p className="font-script text-3xl sm:text-4xl text-[#FAF0E6] mb-1">
                  Lucrat cu dragoste & răbdare
                </p>
                <p className="text-xs uppercase tracking-widest text-[#E8D4C2]">
                  Sweet Spot • Satu Mare
                </p>
              </div>
            </div>

            {/* Floating Logo Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white p-3 rounded-2xl shadow-warm border border-[#EBDED2] flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#9C663A]/30">
                <Image
                  src="/images/logo.jpg"
                  alt="Sweet Spot Homemade Cakes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-2">
                <span className="text-xs font-semibold text-[#241C18] block">Atelier de Casă</span>
                <span className="text-[11px] text-[#9C663A] font-medium block">Satu Mare, RO</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDED2] text-[#9C663A] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Filozofia Noastră</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241C18] font-normal leading-tight mb-6">
              O mică cofetărie de casă, unde fiecare detaliu contează.
            </h2>

            <div className="space-y-4 text-[#5A4D45] text-base sm:text-lg leading-relaxed mb-8">
              <p>
                La <strong className="text-[#241C18]">Sweet Spot</strong>, credem că cele mai bune deserturi nu se nasc din producții industriale rapide, ci din liniștea unui laborator de casă, unde timpul are răbdare și calitatea primează înaintea cantității.
              </p>
              <p>
                Ne concentrăm pe comenzi personalizate pentru comunitatea din <strong>Satu Mare</strong>. Fie că pregătim un tort somptuos de nuntă, un tort vesel pentru prima aniversare a unui copil, sau o tavă aburindă de <em>cinnamon rolls</em> pentru o dimineață de duminică, punem aceeași migală și pasiune în fiecare pas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#EBDED2] shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9C663A] shrink-0" />
                  <h3 className="font-serif text-base font-semibold text-[#241C18]">
                    Exclusiv la comandă
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6A5D56] leading-relaxed">
                  Nu ținem produse în congelatoare sau vitrine. Totul este copt și asamblat proaspăt chiar înainte de evenimentul tău.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#EBDED2] shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Heart className="w-5 h-5 text-[#9C663A] shrink-0" />
                  <h3 className="font-serif text-base font-semibold text-[#241C18]">
                    Echilibru în dulceață
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6A5D56] leading-relaxed">
                  Reducem zahărul adăugat pentru a lăsa aromele adevărate de fistic, fructe de pădure și ciocolată să strălucească.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
