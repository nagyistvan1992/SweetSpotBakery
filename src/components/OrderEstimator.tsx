"use client";

import React, { useState } from "react";
import { Cake, Users, Sparkles, MessageCircle, Calendar, Send, Check } from "lucide-react";
import { BAKERY_INFO } from "@/data/bakeryData";

export default function OrderEstimator() {
  const [occasion, setOccasion] = useState<string>("Aniversare / Zi de Naștere");
  const [portion, setPortion] = useState<string>("8 - 12 persoane (cca 1.8 - 2 kg)");
  const [flavor, setFlavor] = useState<string>("Fistic & Zmeură proaspătă");
  const [extraCustom, setExtraCustom] = useState<string[]>(["Mesaj personalizat scris"]);
  const [eventDate, setEventDate] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const occasionOptions = [
    "Aniversare / Zi de Naștere",
    "Nuntă / Cununie",
    "Botez",
    "Cinnamon Rolls Box (4 / 6 / 12 buc)",
    "Babka Artizanal cu Ciocolată & Nuci",
    "Candy Bar & Platou Festiv",
  ];

  const portionOptions = [
    "4 - 6 persoane (tort intim / cca 1.2 kg)",
    "8 - 12 persoane (cca 1.8 - 2 kg)",
    "15 - 20 persoane (cca 2.5 - 3 kg)",
    "25 - 40 persoane (tort etajat)",
    "Peste 50 persoane (eveniment mare)",
  ];

  const flavorOptions = [
    "Fistic & Zmeură proaspătă",
    "Ciocolată belgiană intensă & Vișine",
    "Vanilie de Madagascar & Fructe de pădure",
    "Caramel sărat, Lotus Biscoff & Nuci pecan",
    "Lămâie răcoroasă, Bezea & Mac",
    "Recomandare artizanală (discutăm împreună)",
  ];

  const extraOptions = [
    "Mesaj personalizat scris",
    "Print alimentar pe foaie de zahăr (poză/logo)",
    "Decor cu flori naturale igienizate",
    "Topper aniversar",
  ];

  const toggleExtra = (item: string) => {
    if (extraCustom.includes(item)) {
      setExtraCustom(extraCustom.filter((x) => x !== item));
    } else {
      setExtraCustom([...extraCustom, item]);
    }
  };

  const generateMessage = () => {
    let msg = `Bună ziua Sweet Spot! 🍰 Aș dori o cerere de comandă în Satu Mare:\n\n`;
    msg += `🎉 Eveniment: ${occasion}\n`;
    msg += `👥 Estimare porții: ${portion}\n`;
    msg += `🍓 Aromă preferată: ${flavor}\n`;
    if (extraCustom.length > 0) {
      msg += `✨ Detalii/Opțiuni: ${extraCustom.join(", ")}\n`;
    }
    if (eventDate) {
      msg += `📅 Data dorită: ${eventDate}\n`;
    }
    if (notes) {
      msg += `📝 Mențiuni speciale: ${notes}\n`;
    }
    msg += `\nAștept cu drag recomandarea și disponibilitatea dumneavoastră! Mulțumesc.`;
    return msg;
  };

  const whatsappUrl = `https://wa.me/${BAKERY_INFO.phoneNumber}?text=${encodeURIComponent(
    generateMessage()
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="estimator" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E6] border border-[#E8D4C2] text-[#9C663A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planifică În Câteva Clicuri</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241C18] font-normal tracking-tight mb-4">
            Configurator Rapid de Comandă
          </h2>
          <p className="text-sm sm:text-base text-[#6A5D56] leading-relaxed">
            Selectează detaliile dorite pentru tortul sau desertul tău, iar noi îți trimitem mesajul gata formulat direct pe WhatsApp sau Instagram.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EBDED2] shadow-warm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1: Occasion */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-[#241C18] uppercase tracking-wider mb-3">
                <Cake className="w-4 h-4 text-[#9C663A]" />
                <span>1. Tipul Ocaziei / Desertului</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {occasionOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setOccasion(opt)}
                    className={`text-left text-xs sm:text-sm px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                      occasion === opt
                        ? "bg-[#FAF0E6] border-[#9C663A] text-[#7A502D] font-medium shadow-xs"
                        : "border-[#EBDED2] text-[#5A4D45] hover:bg-[#FAF7F2]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Portions */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-[#241C18] uppercase tracking-wider mb-3">
                <Users className="w-4 h-4 text-[#9C663A]" />
                <span>2. Număr Invitați / Porții</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {portionOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setPortion(opt)}
                    className={`text-left text-xs sm:text-sm px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                      portion === opt
                        ? "bg-[#FAF0E6] border-[#9C663A] text-[#7A502D] font-medium shadow-xs"
                        : "border-[#EBDED2] text-[#5A4D45] hover:bg-[#FAF7F2]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Flavors */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-[#241C18] uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-[#9C663A]" />
                <span>3. Combinație de Arome</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {flavorOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFlavor(opt)}
                    className={`text-left text-xs sm:text-sm px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                      flavor === opt
                        ? "bg-[#FAF0E6] border-[#9C663A] text-[#7A502D] font-medium shadow-xs"
                        : "border-[#EBDED2] text-[#5A4D45] hover:bg-[#FAF7F2]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Extras, Date & Notes */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#241C18] uppercase tracking-wider mb-2.5">
                  4. Opțiuni Suplimentare de Personalizare
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {extraOptions.map((extra) => {
                    const isChecked = extraCustom.includes(extra);
                    return (
                      <button
                        key={extra}
                        type="button"
                        onClick={() => toggleExtra(extra)}
                        className={`text-left text-xs px-3.5 py-2 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                          isChecked
                            ? "bg-[#FAF0E6] border-[#9C663A] text-[#7A502D] font-medium"
                            : "border-[#EBDED2] text-[#5A4D45] hover:bg-[#FAF7F2]"
                        }`}
                      >
                        <span>{extra}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-[#9C663A]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[#241C18] uppercase tracking-wider mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#9C663A]" />
                  <span>Data Evenimentului (opțional)</span>
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-[#EBDED2] bg-[#FAF7F2] text-[#241C18] focus:outline-hidden focus:border-[#9C663A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241C18] uppercase tracking-wider mb-1.5">
                  Mențiuni / Preferințe particulare (opțional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: tematică culori, alergii, textul dorit pe tort..."
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#EBDED2] bg-[#FAF7F2] text-[#241C18] focus:outline-hidden focus:border-[#9C663A] resize-none"
                />
              </div>
            </div>
          </div>

          {/* Live Message Summary & Action Box */}
          <div className="mt-8 pt-8 border-t border-[#EBDED2]">
            <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#EBDED2] mb-6">
              <span className="text-[11px] font-semibold text-[#9C663A] uppercase tracking-wider block mb-2">
                Previzualizare Mesaj Cerere:
              </span>
              <pre className="text-xs sm:text-sm text-[#5A4D45] font-sans whitespace-pre-wrap leading-relaxed">
                {generateMessage()}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#786B64] text-center sm:text-left">
                Răspundem cu drag pe WhatsApp cu disponibilitatea și o estimare exactă de preț.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto px-4 py-3 rounded-full border border-[#E0D4C7] bg-white text-xs font-medium text-[#5A4D45] hover:bg-[#FAF0E6] transition-colors cursor-pointer"
                >
                  {copied ? "Mesaj Copiat!" : "Copiază textul"}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9C663A] text-white text-xs sm:text-sm font-medium hover:bg-[#82532B] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Trimite pe WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
