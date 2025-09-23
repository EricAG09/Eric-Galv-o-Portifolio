import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Fortalimp",
      description: "Site para desemtupidora com SEO otimizado, design responsivo e integração com WhatsApp.",
      technologies: ["React", "TypeScript", "Node.JS", "Tailwind CSS", "Vite"],
      demoUrl: "https://www.fortalimp.com/",
      githubUrl: "https://github.com/EricAG09/fortalimp"
    },
    {
      title: "GM-Tech Solutions",
      description: "Site corporativo para empresa de tecnologia, com seções dinâmicas e design moderno. Com agendamento de serviços via WhatsApp.",
      technologies: ["React", "Node.js", "TypeScript", "vite"],
      demoUrl: "https://gm-solucoes-tecnologicas.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "The Prince of Jacu",
      description: "App para reservas de horarios em barbearia, com sistema de autenticação e painel de administração e integração com whatsApp.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase", "whatsApp API"],
      demoUrl: "https://the-barber-prince-of-jacu.vercel.app/",
      githubUrl: "https://github.com/EricAG09/Barbearia-LA-MARFIA"
    },
    {
      title: "Site institucional de um hotel e restaurante local",
      description: "Site institucional moderno com design responsivo e otimização de performance.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      demoUrl: "https://espaco-bem-estar.vercel.app/",
      githubUrl: "#"
    },
    // {
    //   title: "Restaurant Menu",
    //   description: "Sistema de cardápio digital com carrinho de compras, filtros de categoria e integração de pagamento.",
    //   technologies: ["React", "Context API", "Stripe", "Firebase"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Chat Application",
    //   description: "Aplicação de chat em tempo real com salas personalizadas, emojis e notificações push.",
    //   technologies: ["React", "Socket.io", "Express", "JWT"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        
        // Set initial state
        gsap.set(cards, {
          opacity: 0,
          y: 60,
          scale: 0.9
        });

        // Stagger animation
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Hover animations for each card
        Array.from(cards).forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-container">
      <h2 className="section-title">Projetos</h2>
      
      <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 transition-all duration-300 group/btn"
                  aria-label="Ver código no GitHub"
                >
                  <Github className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
                </a>
                <a
                  href={project.demoUrl}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-secondary/20 transition-all duration-300 group/btn"
                  aria-label="Ver demo do projeto"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:text-secondary transition-colors" />
                </a>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-muted/30 text-muted-foreground rounded-full border border-border/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;