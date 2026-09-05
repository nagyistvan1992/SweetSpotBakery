import React from "react";
import Image from "next/image";
import { MessageCircle, MapPin, Clock, Phone, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { BAKERY_INFO } from "@/data/bakeryData";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#241C18] text-[#FAF7F2] pt-16 pb-24 md:pb-16 border-t border-[#3A2E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E8D4C2]/30">
                <Image
                  src="/images/logo.jpg"
                  alt="Sweet Spot Bakery Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl text-[#FAF7F2] font-medium block">
                  Sweet Spot
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#E8D4C2] uppercase block">
                  Homemade Cakes • Satu Mare
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B8AAA2] leading-relaxed max-w-sm mb-6">
              {BAKERY_INFO.tagline}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BAKERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Sweet Spot"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF7F2] hover:bg-[#9C663A] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BAKERY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Sweet Spot"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF7F2] hover:bg-[#9C663A] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20să%20plasez%20o%20comandă.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Sweet Spot"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF7F2] hover:bg-[#9C663A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-medium text-[#FAF7F2] mb-4">
              Navigare Rapidă
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8AAA2]">
              <li>
                <a href="#creatii" className="hover:text-[#E8D4C2] transition-colors">
                  Creații & Portofoliu
                </a>
              </li>
              <li>
                <a href="#poveste" className="hover:text-[#E8D4C2] transition-colors">
                  Povestea Noastră
                </a>
              </li>
              <li>
                <a href="#ingrediente" className="hover:text-[#E8D4C2] transition-colors">
                  Ingrediente Pure
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#E8D4C2] transition-colors">
                  Configurator de Comandă
                </a>
              </li>
              <li>
                <a href="#proces" className="hover:text-[#E8D4C2] transition-colors">
                  Cum Comanzi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Satu Mare info */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-base font-medium text-[#FAF7F2] mb-4">
              Comenzi & Locație
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#B8AAA2]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8D4C2] shrink-0 mt-0.5" />
                <span>Satu Mare, România (ridicare pe bază de programare)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E8D4C2] shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#E8D4C2] shrink-0 mt-0.5" />
                <a
                  href={BAKERY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  {BAKERY_INFO.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FacebookIcon className="w-4 h-4 text-[#E8D4C2] shrink-0 mt-0.5" />
                <a
                  href={BAKERY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  {BAKERY_INFO.facebookName}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7C75]">
          <p>
            © {new Date().getFullYear()} Sweet Spot Bakery • Satu Mare. Toate drepturile rezervate.
          </p>
          <p className="flex items-center gap-1">
            Realizat cu <Heart className="w-3 h-3 text-[#E8D4C2] fill-current" /> pentru iubitorii de dulce adevărat.
          </p>
        </div>
      </div>
    </footer>
  );
}
