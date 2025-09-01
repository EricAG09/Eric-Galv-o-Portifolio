# 🚀 Portfolio Eric Galvão - Desenvolvedor Frontend

Um portfólio moderno, responsivo e animado criado com React, TypeScript, Tailwind CSS e GSAP. Apresenta animações fluidas, design elegante e experiência de usuário excepcional.

![Portfolio Preview](https://img.shields.io/badge/Status-Concluído-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)
![GSAP](https://img.shields.io/badge/GSAP-Latest-88ce02)

## 🎯 Sobre o Projeto

Este portfólio foi desenvolvido para showcasing das habilidades de Eric Galvão como Desenvolvedor Frontend Pleno. O site apresenta:

- **Design Moderno**: Interface clean com gradientes azul/roxo elegantes
- **Animações Fluidas**: Implementadas com GSAP para experiência imersiva
- **Responsivo**: Adaptável para todos os dispositivos e tamanhos de tela
- **Performance**: Otimizado para carregamento rápido e SEO
- **Interativo**: Formulário de contato funcional e navegação suave

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca para construção da interface
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first

### Animações
- **GSAP (GreenSock)** - Biblioteca de animações profissionais
- **ScrollTrigger** - Plugin para animações baseadas em scroll

### UI/UX
- **Shadcn/ui** - Componentes de interface modernos
- **Lucide React** - Ícones SVG otimizados
- **Sonner** - Sistema de toast notifications

### Outras Ferramentas
- **React Router DOM** - Roteamento SPA
- **React Hook Form** - Gerenciamento de formulários
- **ESLint** - Linting e qualidade de código

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Git** (controle de versão)

### Verificar instalações:
```bash
node --version    # deve retornar v18.x.x ou superior
npm --version     # deve retornar 8.x.x ou superior
git --version     # deve retornar 2.x.x ou superior
```

## 🚀 Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/portfolio-eric-galvao.git
cd portfolio-eric-galvao
```

### 2. Instale as Dependências
```bash
npm install
```

**Ou usando yarn:**
```bash
yarn install
```

### 3. Configuração do Ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
VITE_APP_TITLE=Eric Galvão - Portfolio
VITE_CONTACT_EMAIL=eric@exemplo.com
```

### 4. Execute o Projeto
```bash
npm run dev
```

**Ou usando yarn:**
```bash
yarn dev
```

O projeto estará disponível em: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
portfolio-eric-galvao/
├── public/                     # Arquivos públicos
│   ├── favicon.ico
│   └── robots.txt
├── src/                        # Código fonte
│   ├── assets/                 # Imagens e recursos
│   │   └── developer-avatar.jpg
│   ├── components/             # Componentes React
│   │   ├── ui/                 # Componentes base (shadcn)
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utilitários
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx                 # Componente principal
│   ├── index.css              # Estilos globais e design system
│   └── main.tsx               # Ponto de entrada
├── package.json               # Dependências e scripts
├── tailwind.config.ts        # Configuração Tailwind
├── tsconfig.json             # Configuração TypeScript
└── vite.config.ts            # Configuração Vite
```

## ✨ Funcionalidades

### 🎨 Design System
- **Paleta de Cores**: Gradientes azul (#3B82F6) e roxo (#8B5CF6)
- **Tipografia**: Inter (corpo) e Poppins (títulos)
- **Componentes**: Sistema consistente de botões, cards e inputs
- **Modo Dark**: Design otimizado para tema escuro

### 🎭 Animações GSAP
- **Hero Section**: Animações de entrada escalonadas
- **Scroll Animations**: Elementos aparecem conforme o scroll
- **Hover Effects**: Microinterações nos botões e cards
- **Stagger Effects**: Animações em sequência nos projetos
- **Progress Bars**: Animação das barras de habilidades

### 📱 Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Componentes Adaptativos**: Grid responsivo e navegação mobile

### 🔧 Componentes Principais

#### Navigation
- Menu fixo com efeito blur ao scroll
- Navegação suave entre seções
- Menu hambúrguer para mobile

#### HeroSection
- Título animado com gradiente
- Shapes geométricas flutuantes
- Call-to-action com scroll suave

#### AboutSection
- Avatar com efeito hover
- Texto com animação de entrada
- Tags de tecnologias

#### ProjectsSection
- Grid responsivo de projetos
- Cards com hover effects
- Links para demo e código

#### SkillsSection
- Progress bars animadas
- Ícones de tecnologias
- Efeito stagger nas animações

#### ContactSection
- Formulário funcional
- Validação de campos
- Links para redes sociais

## 🎨 Personalização

### Alterando Cores
Modifique as variáveis CSS em `src/index.css`:
```css
:root {
  --primary: 217 91% 60%;        /* Azul principal */
  --secondary: 271 81% 56%;      /* Roxo secundário */
  --primary-glow: 217 91% 70%;   /* Brilho azul */
  /* ... outras variáveis */
}
```

### Modificando Conteúdo
1. **Informações pessoais**: Edite os textos nos componentes
2. **Projetos**: Atualize o array `projects` em `ProjectsSection.tsx`
3. **Habilidades**: Modifique o array `skills` em `SkillsSection.tsx`
4. **Avatar**: Substitua a imagem em `src/assets/developer-avatar.jpg`

### Adicionando Animações
Exemplo de nova animação GSAP:
```typescript
useEffect(() => {
  gsap.fromTo('.meu-elemento', 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: '.meu-elemento'
    }
  );
}, []);
```

## 📱 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção
npm run lint         # Executa linting do código
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte o repositório na Vercel
3. Configure as variáveis de ambiente
4. Deploy automático a cada commit

### Netlify
1. Execute `npm run build`
2. Faça upload da pasta `dist`
3. Configure redirects para SPA

### GitHub Pages
```bash
npm run build
npm run deploy
```

## 🔧 Solução de Problemas

### Erro de Módulos
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas com GSAP
Certifique-se de que o GSAP está importado corretamente:
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Build Errors
Verifique se todas as dependências estão instaladas:
```bash
npm ls --depth=0
```

## 📚 Recursos Adicionais

- **GSAP Documentation**: https://greensock.com/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Documentation**: https://react.dev/
- **Vite Guide**: https://vitejs.dev/guide/

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

**Eric Galvão**
- LinkedIn: [linkedin.com/in/eric-galvao](https://linkedin.com/in/eric-galvao)
- GitHub: [github.com/eric-galvao](https://github.com/eric-galvao)
- Email: contato@ericgalvao.dev

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

*Desenvolvido com ❤️ usando React, GSAP e Tailwind CSS*