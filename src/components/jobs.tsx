import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Jobs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const Enterprise = [
    {
      title: "PWR Gestão",
      description:
        "Empresa de consultoria focada em soluções de software para gestão empresarial, oferecendo sistemas personalizados para otimizar processos e melhorar a eficiência dos negócios.",
        technologies: ["Gestão", "Negócios", "Tecnologias", "Sistemas"],
      demoUrl: "https://www.linkedin.com/company/pwrgestao/posts/?feedView=all",
    },
    {
      title: "Bolha",
      description:
        "Empresa de tecnologia especializada em desenvolvimento de software, oferecendo soluções inovadoras para atender às necessidades dos clientes e impulsionar o crescimento dos negócios.",
      technologies: ["Desenvolvimento", "Inovação", "Tecnologia", "Robotica", "Automação"],
      demoUrl: "https://www.linkedin.com/company/bolha/posts/?feedView=all",
    },
    {
      title: "Prefeitura de Apuiarés",
      description:
        "Órgão governamental responsável pela administração municipal de Apuiarés, oferecendo serviços públicos e promovendo o desenvolvimento da cidade.",
      technologies: [
        "Administração",
        "Governança",
        "Tecnologia",
        "Sistemas",
        "Desenvolvimento",
        "Inovação",
      ],
      demoUrl: "https://www.apuiares.ce.gov.br/",
    },
    {
      title: "Desenvolvedor Freelancer",
      description:
        "Atuação como desenvolvedor freelancer, oferecendo serviços de desenvolvimento de software personalizados para clientes diversos, utilizando tecnologias modernas e práticas ágeis para entregar soluções eficientes e de alta qualidade.",
      technologies: ["React", "Tailwind CSS", "Vite", "Node.js", "TypeScript", "Context API", "Supabase", "NestJS"],
    },
    {
      title: "World of Hackers",
      description:
        "Empresa especialiada em manutenção e desenvolvimento de sistemas, com foco em soluções personalizadas para atender às necessidades dos clientes e impulsionar o crescimento dos negócios.",
      technologies: ["Desenvolvimento web", "Manutenção de computdores", "TI"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.children;

        // Set initial state
        gsap.set(cards, {
          opacity: 0,
          y: 60,
          scale: 0.9,
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
            toggleActions: "play none none reverse",
          },
        });

        // Hover animations for each card
        Array.from(cards).forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-container">
      <h2 className="section-title">Experiência</h2>

      <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Enterprise.map((project, index) => (
          <div key={index} className="project-card group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-secondary/20 transition-all duration-300 group/btn"
                  aria-label="Ver mais detalhes"
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

export default Jobs;
