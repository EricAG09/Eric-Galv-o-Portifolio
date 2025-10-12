'use client'; // se estiver usando Next.js app router

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ajuste conforme a altura do seu header
  const OFFSET_Y = 96; // px

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  const scrollToSection = (href: string) => {
    if (typeof window === 'undefined') return;

    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (!el) return; // se não encontrar o id, não previna o default

    // tentativa com GSAP + ScrollToPlugin
    try {
      gsap.to(window, {
        duration: 0.9,
        ease: 'power3.out',
        scrollTo: { y: el, offsetY: OFFSET_Y }
      });
    } catch {
      // fallback nativo
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // compensa o header
      window.setTimeout(() => {
        window.scrollBy({ top: -OFFSET_Y, behavior: 'instant' as ScrollBehavior });
      }, 0);
    }

    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Eric.dev
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-card/80 backdrop-blur-md rounded-lg mt-2 border border-border/50">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
