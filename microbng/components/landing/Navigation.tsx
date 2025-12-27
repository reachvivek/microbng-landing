"use client";

import { GlassButton } from "@/components/ui/glass-button";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#architecture", label: "Architecture" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#scalability", label: "Scalability" },
    { href: "#pricing", label: "Pricing" },
    { href: "#why", label: "Why MicroBNG" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`main-nav transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-black/40' : ''}`}>
      <div className="page-container main-nav-container">
        <a href="#hero" className="text-2xl font-bold hover:opacity-80 transition-opacity cursor-pointer z-50">
          Micro<span className="text-[#39ff14]">BNG</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-[#39ff14] transition-colors ${
                activeSection === link.href ? "text-[#39ff14] font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Desktop Get Demo Button */}
        <GlassButton href="#cta" variant="primary" className="hidden md:block w-[130px] h-[40px] text-sm">
          Get Demo
        </GlassButton>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-500 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-2xl font-semibold transition-all duration-300 hover:text-[#39ff14] ${
                activeSection === link.href ? "text-[#39ff14]" : "text-white"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {link.label}
            </a>
          ))}
          <GlassButton
            href="#cta"
            variant="primary"
            className="w-[200px] h-[50px] text-lg mt-4"
            onClick={handleLinkClick}
          >
            Get Demo
          </GlassButton>
        </div>
      </div>
    </nav>
  );
}
