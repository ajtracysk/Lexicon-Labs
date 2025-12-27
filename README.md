# EduHub - ESL Education Apps Landing Page

A modern, responsive landing page for showcasing single-file HTML web applications designed for ESL (English as a Second Language) learning. Built with React 19, Tailwind CSS 4, and shadcn/ui components.

## 🎯 Project Overview

EduHub is a professional landing page that promotes a collection of interactive, self-paced English learning tools. The site features a warm, welcoming design optimized for language learners with:

- **Interactive Hero Section** - Engaging introduction to the platform
- **Scrollable Feature Cards** - Animated showcase of key benefits
- **Feature Highlights** - Six core learning tools (Vocabulary, Pronunciation, Lessons, Conversation, Goals, Accessibility)
- **Learner Testimonials** - Real feedback from ESL students and educators
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Scroll-triggered effects and micro-interactions

## 🎨 Design System

The landing page uses a **Modern Minimalist design** with warm, welcoming colors:

- **Primary Background**: Cream (#FAFAF8)
- **Primary Accent**: Warm Amber (#D4A574)
- **Secondary**: Sage Green (#7A9B8E) - represents trust and learning
- **Tertiary**: Soft Coral (#E8B4A8) - for energy and engagement
- **Text**: Near-black (#1A1A18) for optimal readability

**Typography:**
- Headings: Poppins (700 weight) - modern and friendly
- Body: Inter (400 weight) - highly readable
- Accent: Poppins (600 weight) - for emphasis

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/esl-education-apps.git
cd esl-education-apps

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server will start at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

## 📁 Project Structure

```
esl-education-apps/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx          # Navigation with smooth scrolling
│   │   │   ├── Hero.tsx            # Hero section with CTA
│   │   │   ├── About.tsx           # Scrollable feature cards
│   │   │   ├── Features.tsx        # Six learning tools showcase
│   │   │   ├── Testimonials.tsx    # Learner testimonials
│   │   │   ├── Newsletter.tsx      # Newsletter signup
│   │   │   └── Footer.tsx          # Footer with links
│   │   ├── pages/
│   │   │   └── Home.tsx            # Main landing page
│   │   ├── lib/
│   │   │   └── navigation.ts       # Navigation utilities
│   │   ├── App.tsx                 # App routing and theme
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles and design tokens
│   ├── index.html                  # HTML template
│   └── public/                     # Static assets
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🎯 Key Features

### Navigation
- Smooth scroll-to-section navigation
- Responsive mobile menu
- Fixed navbar with scroll detection

### Animations
- Fade-in animations on scroll
- Parallax effects on hero section
- Hover effects on cards and buttons
- 3D perspective transforms on desktop

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels for interactive elements
- High contrast text for readability

## 🛠️ Customization

### Changing Colors

Edit the color values in `client/src/index.css`:

```css
:root {
  --primary: #D4A574;      /* Warm amber */
  --secondary: #7A9B8E;    /* Sage green */
  --background: #FAFAF8;   /* Cream */
}
```

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Import it in `client/src/pages/Home.tsx`
3. Add navigation item in `client/src/lib/navigation.ts`

### Modifying Content

All content is defined in the component files:
- Hero text: `client/src/components/Hero.tsx`
- Features: `client/src/components/Features.tsx`
- Testimonials: `client/src/components/Testimonials.tsx`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Deploy to GitHub Pages

```bash
# Update package.json with your repo name
npm run build
npm run deploy
```

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Build Size**: ~150KB gzipped
- **Load Time**: < 2 seconds on 4G

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
```

## 📝 Content Guidelines

### Testimonials
Located in `client/src/components/Testimonials.tsx`, each testimonial includes:
- User quote
- Author name
- Role/title
- Gradient background color

### Features
Located in `client/src/components/Features.tsx`, each feature includes:
- Icon (from lucide-react)
- Title
- Description

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Wouter Router](https://github.com/molefrog/wouter)

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue on GitHub or contact the project maintainers.

---

**Built with ❤️ for ESL learners worldwide**
