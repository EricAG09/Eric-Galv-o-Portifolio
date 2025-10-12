import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '📘' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'Git & GitHub', level: 90, icon: '🐙' },
    { name: 'JavaScript', level: 95, icon: '⚡' },
    { name: 'Next.js', level: 85, icon: '▲' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (skillsRef.current) {
        const skillElements = skillsRef.current.children;
        
        // Set initial states
        gsap.set(skillElements, {
          opacity: 0,
          x: -50
        });

        // Animate skill cards
        gsap.to(skillElements, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        // Animate progress bars
        Array.from(skillElements).forEach((skillElement, index) => {
          const progressBar = skillElement.querySelector('.skill-progress');
          const skill = skills[index];
          
          if (progressBar) {
            gsap.set(progressBar, { scaleX: 0 });
            
            gsap.to(progressBar, {
              scaleX: skill.level / 100,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: skillElement,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-container">
      <h2 className="section-title">Habilidades</h2>
      
      <div ref={skillsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                  {skill.name}
                </h3>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            
            <div className="relative">
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <div 
                  className="skill-progress h-full"
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 h-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Additional Technologies */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-8 text-gradient">
          Outras Tecnologias
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {[
            'GSAP', 'Redux', 'Context API', 'REST APIs', 'Supabase', 'Vercel', 'Docker', 'Jest', 'Kanban', 'Scrum', 'Strapi', 'Axios'
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;