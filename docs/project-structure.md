# Project Structure Documentation - The Crafted Hospitality

## 📁 Complete Directory Structure

```
thecraftedhospitality.com/
├── .cursor/                     # Cursor IDE configuration
├── .taskmaster/                 # Task management system
├── .vscode/                     # VS Code workspace settings
├── docs/                        # Project documentation
│   ├── nextjs-tailwind-setup.md
│   ├── railway-integration.md
│   ├── railway-deployment-guide.md
│   ├── railway-environment-variables.md
│   └── project-structure.md    # This file
├── memory-bank/                 # AI assistant context and progress tracking
│   ├── activeContext.md
│   ├── progress.md
│   ├── projectbrief.md
│   ├── productContext.md
│   ├── systemPatterns.md
│   └── techContext.md
├── public/                      # Static assets
│   ├── fonts/                   # Self-hosted fonts (if needed)
│   ├── images/                  # Static images and graphics
│   │   ├── icons/               # Service and UI icons
│   │   ├── hero/                # Hero section backgrounds
│   │   ├── team/                # Team member photos
│   │   ├── logos/               # Client and partner logos
│   │   └── case-studies/        # Portfolio images
│   ├── favicon.ico
│   └── [Next.js default SVGs]
├── src/                         # Application source code
│   ├── app/                     # Next.js App Router structure
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   ├── page.tsx             # Homepage
│   │   └── [future pages]/      # Additional pages/routes
│   ├── components/              # React components
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar.tsx       # Navigation component
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   ├── Header.tsx       # Header component
│   │   │   └── Sidebar.tsx      # Sidebar component
│   │   ├── sections/            # Page section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicePillars.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── CaseStudiesSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.tsx       # Button component
│   │   │   ├── Input.tsx        # Input field component
│   │   │   ├── Card.tsx         # Card component
│   │   │   ├── Modal.tsx        # Modal component
│   │   │   └── [other UI]/      # Additional UI components
│   │   └── PerformanceTracker.tsx # Performance monitoring
│   ├── lib/                     # Utility functions and configurations
│   │   └── performance.ts       # Performance utilities
│   ├── styles/                  # Additional CSS and styling
│   │   ├── components.module.css # Component-specific styles
│   │   ├── animations.css       # Animation definitions
│   │   ├── themes.css           # Theme variables
│   │   └── utilities.css        # Utility classes
│   └── types/                   # TypeScript type definitions
│       ├── index.ts             # Main types export
│       ├── services.ts          # Service-related types
│       ├── contact.ts           # Contact form types
│       ├── api.ts               # API response types
│       └── components.ts        # Component prop types
├── deployment-checklist.md      # Railway deployment checklist
├── README.md                    # Project overview and setup
├── [config files]               # Next.js, TypeScript, Tailwind, etc.
└── [package files]              # package.json, package-lock.json
```

## 🎯 Directory Purpose & Organization

### `/src/components/` - Component Architecture

**Three-tier component organization:**

1. **`/ui/`** - **Atomic Components**
   - Pure, reusable UI elements
   - No business logic
   - Highly reusable across pages
   - Examples: Button, Input, Card, Modal

2. **`/layout/`** - **Layout Components**
   - Structural components for page layout
   - Navigation, headers, footers
   - Consistent across multiple pages
   - Examples: Navbar, Footer, Sidebar

3. **`/sections/`** - **Composite Components**
   - Larger, page-specific sections
   - Combine multiple UI components
   - Contain business logic and content
   - Examples: HeroSection, ServicePillars, ContactForm

### `/src/lib/` - Utilities & Configurations

- **Utility functions**: Shared helper functions
- **API clients**: External service integrations
- **Configuration files**: App-specific configurations
- **Helper scripts**: Data processing and validation

### `/src/types/` - TypeScript Definitions

- **Centralized type definitions** for the entire application
- **Domain-specific types**: Services, contacts, business logic
- **Component prop types**: Ensure type safety across components
- **API response types**: Type-safe external data handling

### `/src/styles/` - Advanced Styling

- **CSS Modules**: Component-scoped styles
- **Animation definitions**: Custom animations and transitions
- **Theme variables**: Extended design system variables
- **Utility classes**: Custom Tailwind extensions

### `/public/` - Static Assets

**Organized by asset type:**
- **`/images/`**: All static images with subcategories
- **`/fonts/`**: Self-hosted fonts (when needed)
- **Root assets**: favicon, robots.txt, sitemap.xml

## 🚀 Development Workflow Benefits

### **Scalability**
- Clear separation of concerns
- Easy to locate and modify specific components
- Supports team development and code reviews

### **Maintainability**
- Consistent organization patterns
- Type safety throughout the application
- Documentation-driven development

### **Performance**
- Optimized for Next.js App Router
- Component-level code splitting
- Static asset optimization

### **Developer Experience**
- IntelliSense support with TypeScript
- Hot reloading with organized file structure
- Clear import paths and component hierarchy

## 📋 Naming Conventions

### **Components**
- **PascalCase**: `HeroSection.tsx`, `ServiceCard.tsx`
- **Descriptive names**: Clear purpose and usage
- **Suffix convention**: Section, Card, Form, Modal, etc.

### **Utilities & Types**
- **camelCase**: `formatDate.ts`, `validateEmail.ts`
- **Descriptive filenames**: Clear functionality indication
- **Type files**: Singular nouns (`service.ts`, `contact.ts`)

### **Directories**
- **lowercase with hyphens**: `case-studies/`, `hero-backgrounds/`
- **Plural forms**: `components/`, `images/`, `types/`
- **Clear categorization**: Obvious content grouping

## 🛠️ Technology Integration

### **Next.js App Router**
- File-system based routing in `/src/app/`
- Layout and page components follow Next.js conventions
- Metadata and SEO optimization built-in

### **TypeScript**
- Full type safety with centralized type definitions
- Component prop validation
- API response type checking

### **Tailwind CSS**
- Utility-first styling approach
- Component-scoped styles when needed
- Responsive design patterns

### **Performance Optimization**
- Image optimization in `/public/images/`
- Component-level performance monitoring
- Lazy loading and code splitting support

## 📈 Future Expansion

### **Ready for Growth**
- **Additional pages**: Easy routing in `/src/app/`
- **New components**: Clear categorization system
- **External integrations**: Prepared `/src/lib/` structure
- **Content management**: Type-safe data handling

### **Team Development**
- **Clear ownership**: Component responsibility boundaries
- **Code reviews**: Consistent organization patterns
- **Onboarding**: Self-documenting structure

This structure provides a solid foundation for building a professional, scalable, and maintainable hospitality consulting website.

---

**Last Updated**: January 2025  
**Structure Version**: 1.0  
**Next Phase**: Core Layout Component Implementation 