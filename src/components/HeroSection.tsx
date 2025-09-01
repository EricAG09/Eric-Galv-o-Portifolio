import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 50
      });

      // Hero animations timeline
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");

      // Floating shapes animation
      if (shapesRef.current) {
        const shapes = shapesRef.current.children;
        Array.from(shapes).forEach((shape, index) => {
          gsap.to(shape, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-5, 5)",
            duration: "random(4, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      gsap.to(window, {
        scrollTo: { y: projectsSection, offsetY: 80 },
        duration: 1.5,
        ease: "power3.inOut"
      });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
      
      {/* Floating Geometric Shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rotate-45" />
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-secondary/15 rotate-12" />
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-primary/25 rounded-full" />
        <div className="absolute top-32 right-1/3 w-14 h-14 bg-secondary/20 rotate-45" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 ref={titleRef} className="hero-title mb-6">
          Eric Galvão
        </h1>
        
        <p ref={subtitleRef} className="hero-subtitle mb-12 max-w-3xl mx-auto">
          Desenvolvedor Frontend Pleno especializado em React, Node.js e MongoDB
        </p>
        
        <a
          ref={buttonRef}
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToProjects();
          }}
          className="btn-hero inline-flex items-center gap-2 group cursor-pointer"
        >
          Ver Projetos
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;