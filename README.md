# MedicallyPlus - AI-Powered Global Healthcare Platform

![MedicallyPlus Logo](./public/medically-plus-logo.png)

A revolutionary healthcare landing page showcasing an AI-driven telemedicine platform that connects patients with world-class specialists globally. Built with React, TypeScript, and Tailwind CSS v4.

## 🌟 Features

- **🤖 AI-Powered Specialist Matching**: Advanced algorithms match patients with the perfect specialists in under 30 seconds
- **🌍 Global Healthcare Network**: Access to 10,000+ certified specialists across 50+ countries
- **💼 SaaS Platform Preview**: Interactive demos of our comprehensive healthcare management system
- **🎯 Multi-Step Interactive Form**: Gamified user onboarding with smart validation
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **♿ Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **🎨 Modern Design**: Glass-morphism effects, smooth animations, and micro-interactions
- **🔒 HIPAA Compliant**: Enterprise-grade security and privacy compliance

## 🚀 Live Demo

Visit the live website: **[https://medicallyplus.vercel.app](https://medicallyplus.vercel.app)**

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4 (Alpha)
- **Build Tool**: Vite
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Font**: Poppins (Google Fonts)

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0B67B4` - Main brand color
- **Medical Red**: `#E53935` - Accent and CTA color
- **Teal Blue**: `#5EAAA5` - Secondary brand color
- **Accent Red**: `#FF3C3C` - Highlights and alerts
- **Deep Black**: `#1E1E1E` - Primary text
- **Shadow Gray**: `#A3A3A3` - Secondary text

### Typography
- **Font Family**: Poppins (100-900 weights)
- **Base Size**: 14px
- **Responsive Scaling**: Fluid typography system

## 🏗️ Project Structure

```
medicallyplus-landing/
├── components/                 # React components
│   ├── ui/                    # Reusable UI components (Radix-based)
│   ├── form/                  # Multi-step form components
│   ├── figma/                 # Figma-imported components
│   ├── Header.tsx             # Main navigation
│   ├── HeroSection.tsx        # Landing hero with 3D elements
│   ├── ProblemFramingSection.tsx
│   ├── OurPromiseSection.tsx
│   ├── FeaturesOverviewSection.tsx
│   ├── SaaSPreviewSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── InteractiveFormSection.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css            # Global styles and Tailwind config
├── public/                    # Static assets
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+ or yarn 1.22+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/medicallyplus-landing.git
   cd medicallyplus-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure build settings
   - Deploy with default settings

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Use `VITE_` prefix for client-side variables

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository for continuous deployment

### Manual Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Serve the `dist` folder**
   - Upload the contents of `dist/` to your web server
   - Configure your server to serve `index.html` for all routes

## 🎯 Key Sections

### 1. Hero Section
- Interactive 3D globe (Three.js placeholder)
- Animated statistics
- Prominent CTAs with smooth scrolling

### 2. Problem Framing
- Healthcare accessibility statistics
- Interactive problem visualization
- Animated counters and progress bars

### 3. Our Promise
- Rotating promise cards with auto-play
- Interactive feature demonstrations
- Trust-building elements

### 4. Features Overview
- Carousel-style feature showcase
- Interactive platform demos
- Hover effects and micro-interactions

### 5. SaaS Preview
- Platform screenshots with overlays
- Feature highlighting
- Device-responsive previews

### 6. Testimonials
- Auto-rotating testimonial slider
- Global patient and provider stories
- Trust indicators and ratings

### 7. Interactive Form
- Multi-step onboarding process
- Smart validation and progress tracking
- Gamified user experience

## 🔧 Customization

### Updating Colors
1. Edit CSS custom properties in `styles/globals.css`
2. Update utility classes for new brand colors
3. Modify component color props throughout the codebase

### Adding New Sections
1. Create component in `components/`
2. Import and add to `App.tsx`
3. Add navigation links in `Header.tsx`
4. Update smooth scrolling in utility functions

### Modifying Form Steps
1. Update `components/form/constants.ts`
2. Add new step components in `components/form/`
3. Update validation logic in `utils.ts`

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔒 Security & Privacy

- No personal data collection in demo
- GDPR compliant design patterns
- HIPAA compliance mockup elements
- Secure form validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- **Email**: contact@medicallyplus.com
- **Documentation**: [docs.medicallyplus.com](https://docs.medicallyplus.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/medicallyplus-landing/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://radix-ui.com) for accessible components
- [Tailwind CSS](https://tailwindcss.com) for styling system
- [Lucide](https://lucide.dev) for beautiful icons
- [Google Fonts](https://fonts.google.com) for Poppins font family

---

**Built with ❤️ for better global healthcare access**