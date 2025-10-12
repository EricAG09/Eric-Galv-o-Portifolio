🚀 Portfolio Eric Galvão - Desenvolvedor Frontend

Um portfólio moderno, responsivo e animado criado com React, TypeScript, Tailwind CSS e GSAP. Apresenta animações fluidas, design elegante e experiência de usuário excepcional.










🎯 Sobre o Projeto

Este portfólio foi desenvolvido para showcasing das habilidades de Eric Galvão como Desenvolvedor Frontend Pleno. O site apresenta:

Design Moderno: Interface clean com gradientes azul/roxo elegantes

Animações Fluidas: Implementadas com GSAP para experiência imersiva

Responsivo: Adaptável para todos os dispositivos e tamanhos de tela

Performance: Otimizado para carregamento rápido e SEO

Interativo: Formulário de contato funcional e navegação suave

🛠️ Tecnologias Utilizadas
Frontend

React 18.3.1

TypeScript

Vite

Tailwind CSS

Animações

GSAP (GreenSock)

ScrollTrigger

UI/UX

shadcn/ui

Lucide React

Sonner (toasts)

Outras Ferramentas

React Router DOM

React Hook Form

ESLint

📋 Pré-requisitos

Node.js 18+

npm ou yarn

Git

node --version
npm --version
git --version

🚀 Instalação e Configuração
1. Clone o Repositório
git clone https://github.com/seu-usuario/portfolio-eric-galvao.git
cd portfolio-eric-galvao

2. Instale as Dependências
npm install
# ou
yarn install

3. Configuração do Ambiente

Crie um .env.local na raiz:

VITE_APP_TITLE=Eric Galvão - Portfolio
VITE_CONTACT_EMAIL=eric@exemplo.com

4. Execute o Projeto
npm run dev
# ou
yarn dev


Acesse: http://localhost:5173

📁 Estrutura do Projeto
portfolio-eric-galvao/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts

✨ Funcionalidades

Design System com gradientes e tipografia consistente

Animações GSAP: entrada, scroll, hover e stagger

Responsividade: grid e navegação mobile

Sections: Navigation, Hero, About, Projects, Skills, Contact

🎨 Personalização

Cores em src/index.css:

:root {
  --primary: 217 91% 60%;
  --secondary: 271 81% 56%;
  --primary-glow: 217 91% 70%;
}


Conteúdo:

Atualize projetos em ProjectsSection.tsx

Habilidades em SkillsSection.tsx

Textos nas respectivas sections

Troque o avatar em src/assets/

Exemplo GSAP:

useEffect(() => {
  gsap.fromTo('.meu-elemento',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, scrollTrigger: '.meu-elemento' }
  );
}, []);

📱 Scripts
npm run dev
npm run build
npm run preview
npm run lint

🚀 Deploy
Vercel

Push para o GitHub

Conecte na Vercel

Configure variáveis de ambiente

Deploy automático a cada commit

Netlify

npm run build

Faça upload de dist/

Configure redirects para SPA (se necessário)

GitHub Pages
npm run build
npm run deploy

🔧 Solução de Problemas
Módulos
rm -rf node_modules package-lock.json
npm install

GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

Build
npm ls --depth=0

📚 Recursos

GSAP: https://greensock.com/docs/

Tailwind: https://tailwindcss.com/docs

React: https://react.dev/

Vite: https://vitejs.dev/guide/

🤝 Contribuição

Fork

Branch: feature/minha-feature

Commit: feat: minha feature

Push

Pull Request

📄 Licença

MIT — veja LICENSE
.

👨‍💻 Desenvolvedor

Eric Galvão

LinkedIn: linkedin.com/in/eric-galvao

GitHub: github.com/eric-galvao

Email: contato@ericgalvao.dev

⭐ Se este projeto te ajudou, considere dar uma estrela!

Desenvolvido com ❤️ usando React, GSAP e Tailwind CSS