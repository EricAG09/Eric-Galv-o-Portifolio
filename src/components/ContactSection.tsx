import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Linkedin, Github, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
const WHATSAPP_NUMBER = '5585994066861';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([formRef.current, socialRef.current], {
        opacity: 0,
        y: 50
      });

      // Animate form and social links
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
      .to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");

      // Button hover animation
      if (buttonRef.current) {
        const button = buttonRef.current;
        
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate button
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }

    const texto = `Olá Eric! 👋🏻`
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
    window.open(waUrl, '_blank', "noopene noreferrer");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/eric-galvao/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/EricAG09',
      color: 'hover:text-gray-300'
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      url: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-container">
      <h2 className="section-title">Contato</h2>
      
      <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nome
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300 resize-none"
                placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
              />
            </div>

            <Button
              ref={buttonRef}
              type="submit"
              className="btn-hero w-full group"
            >
              Enviar Mensagem
              <Phone className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </form>
        </div>

        {/* Contact Info & Social Links */}
        <div ref={socialRef} className="flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                Vamos Conversar!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre aberto para discutir novos projetos, oportunidades 
                criativas ou parcerias. Seja para um trabalho freelance ou uma 
                posição em tempo integral, vamos criar algo incrível juntos!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">
                Me encontre nas redes sociais:
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg transition-all duration-300 hover:scale-110 hover:border-primary/30 ${social.color} group`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl">
              <h4 className="text-lg font-medium mb-2 text-foreground">
                Resposta Rápida
              </h4>
              <p className="text-sm text-muted-foreground">
                Normalmente respondo em até 24 horas. Para projetos urgentes, 
                me contacte diretamente pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;