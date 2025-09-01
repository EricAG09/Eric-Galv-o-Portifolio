import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import avatarImage from '@/assets/developer-avatar.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([imageRef.current, textRef.current], {
        opacity: 0,
        y: 60
      });

      // Create scroll-triggered animation
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      .to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7");

      // Hover animation for image
      if (imageRef.current) {
        const image = imageRef.current;
        image.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.05,
            filter: "drop-shadow(0 20px 40px hsl(217 91% 60% / 0.3))",
            duration: 0.4,
            ease: "power2.out"
          });
        });

        image.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            filter: "drop-shadow(0 10px 20px hsl(217 91% 60% / 0.2))",
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-container">
      <h2 className="section-title">Sobre Mim</h2>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              ref={imageRef}
              src={avatarImage}
              alt="Eric Galvão - Desenvolvedor Frontend"
              className="w-80 h-80 rounded-2xl object-cover"
              style={{
                filter: "drop-shadow(0 10px 20px hsl(217 91% 60% / 0.2))"
              }}
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl -z-10 blur-xl" />
          </div>
        </div>

        {/* About Text */}
        <div ref={textRef} className="space-y-6">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Olá! Sou <span className="text-gradient font-semibold">Eric Galvão</span>, 
              desenvolvedor frontend com mais de 3 anos de experiência criando 
              experiências digitais excepcionais.
            </p>
            
            <p>
              Especializado em <span className="text-primary font-medium">React</span>, 
              <span className="text-secondary font-medium"> TypeScript</span> e 
              <span className="text-primary font-medium"> Node.js</span>, transformo 
              ideias em aplicações web modernas e responsivas.
            </p>
            
            <p>
              Minha paixão está em combinar design elegante com código limpo, 
              sempre buscando as melhores práticas e tecnologias mais recentes 
              para entregar soluções que realmente fazem a diferença.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="skill-card text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;