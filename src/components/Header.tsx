"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, Phone, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { BAKERY_INFO } from "@/data/bakeryData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#creatii", label: "Creații & Torturi" },
    { href: "#poveste", label: "Povestea Noastră" },
    { href: "#ingrediente", label: "Ingrediente Pure" },
    { href: "#estimator", label: "Configurator Tort" },
    { href: "#proces", label: "Cum Comanzi" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-[#9C663A] text-[#FAF7F2] text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#E8D4C2]" />
            Laborator artizanal în Satu Mare
          </span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Deserturi de casă făcute exclusiv la comandă</span>
          <span className="hidden sm:inline">•</span>
          <a
            href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20informații%20despre%20o%20comandă.`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#E8D4C2] transition-colors"
          >
            Comenzi rapide pe WhatsApp
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-warm py-3"
            : "bg-[#FAF7F2] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#9C663A]/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Sweet Spot Bakery Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#241C18] tracking-tight block leading-tight font-medium">
                Sweet Spot
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#9C663A] uppercase font-semibold block">
                Homemade Cakes • Satu Mare
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A3E38]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#9C663A] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BAKERY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Sweet Spot Bakery"
              className="w-10 h-10 rounded-full border border-[#E0D4C7] flex items-center justify-center text-[#786B64] hover:text-[#9C663A] hover:border-[#9C663A] transition-colors"
              title="Instagram: @sweet_spot._bakery"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={BAKERY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Sweet Spot"
              className="w-10 h-10 rounded-full border border-[#E0D4C7] flex items-center justify-center text-[#786B64] hover:text-[#9C663A] hover:border-[#9C663A] transition-colors"
              title="Facebook: Sweet Spot Satu Mare"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20să%20discutăm%20despre%20o%20comandă%20de%20tort.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#9C663A] text-[#FAF7F2] px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-[#82532B] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Comandă WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Deschide meniul"
            className="lg:hidden p-2 rounded-lg text-[#241C18] hover:bg-[#F2EAE0] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-t border-[#EBDED2] px-6 py-6 shadow-warm-lg animate-in fade-in duration-200">
            <nav className="flex flex-col gap-4 text-base font-medium text-[#241C18]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#9C663A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-[#EBDED2] flex flex-col gap-3">
              <a
                href={`https://wa.me/${BAKERY_INFO.phoneNumber}?text=Bună%20ziua!%20Aș%20dori%20să%20plasez%20o%20comandă.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#9C663A] text-[#FAF7F2] rounded-xl font-medium flex items-center justify-center gap-2 text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Scrie-ne pe WhatsApp</span>
              </a>

              <div className="flex justify-center items-center gap-4 pt-2">
                <a
                  href={BAKERY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#786B64] hover:text-[#9C663A]"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a
                  href={BAKERY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#786B64] hover:text-[#9C663A]"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
