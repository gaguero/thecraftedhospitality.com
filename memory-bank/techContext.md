# Tech Context - The Crafted Hospitality

## Technology Stack (Revised)

### Primary Stack: Next.js + Tailwind CSS

- **Framework**: Next.js (React)
  - **Reasoning**: Optimal performance (SSR/SSG), scalability, excellent developer experience, SEO control, large ecosystem.
  - **Key Features Used**: App Router, Server Components, API Routes (for contact form, etc.).
- **Styling**: Tailwind CSS
  - **Reasoning**: Utility-first for rapid UI development, highly customizable, consistent design system.
- **Language**: TypeScript
  - **Reasoning**: Type safety, improved code quality and maintainability.
- **Linting/Formatting**: ESLint & Prettier
  - **Reasoning**: Code consistency and adherence to best practices.

### Hosting & Infrastructure

- **Deployment Platform**: Railway
  - **Reasoning**: Easy GitHub integration, automatic deployments, serverless functions for API routes (if needed), custom domain and SSL support.
  - **Build Process**: Railway will build the Next.js application using Nixpacks or similar buildpacks.
- **Repository**: GitHub
  - **URL**: `https://github.com/gaguero/thecraftedhospitality.com`
  - **Branching Strategy**: `main` (production on Railway), `develop` (integration/staging).
- **Domain**: `thecraftedhospitality.com` (Managed via Railway/DNS provider).

### Content Management

- **Initial Approach**: Markdown files or directly within Next.js components.
- **Future Option**: Headless CMS (e.g., Strapi, Sanity, Contentful) integrated with Next.js if content becomes complex or requires frequent non-technical updates.

### Analytics & SEO

- **Analytics**: Google Analytics 4 (GA4)
- **SEO Tools**: Next.js built-in features (Metadata API), Google Search Console.

### Development Workflow

- **Local Development**: `npm run dev` for Next.js hot-reloading server.
- **Version Control**: Git with GitHub.
- **Package Manager**: npm (or yarn, if preferred during `create-next-app`).
- **CI/CD**: GitHub Actions for automated checks (linting, testing) and Railway for deployment from the `main` branch.

### Previous Consideration: Webflow

- Webflow was initially considered for its visual design capabilities and no-code aspects.
- The decision was revised to Next.js + Tailwind CSS to prioritize custom development flexibility, performance, and long-term scalability.

## Key Technical Decisions & Patterns

1.  **App Router**: Utilize Next.js App Router for routing, layouts, and server components.
2.  **Server Components**: Prefer Server Components for fetching data and reducing client-side JavaScript, improving performance.
3.  **Client Components**: Use Client Components (`'use client'`) only when necessary for interactivity.
4.  **Atomic Design Principles (Conceptual)**: Organize components into atoms, molecules, organisms for better reusability and maintainability (e.g., `src/components/ui` for basic elements, `src/components/layout` for structural parts, `src/components/sections` for page-specific larger components).
5.  **Static Site Generation (SSG)**: For pages like blog posts, about, and services where content doesn't change frequently, to maximize performance and SEO.
6.  **Server-Side Rendering (SSR)**: For pages requiring dynamic data on each request (if any).
7.  **API Routes**: For backend functionalities like contact form submission, implemented within `/src/app/api/`.
8.  **Responsive Design**: Mobile-first approach using Tailwind CSS utility classes.
9.  **Image Optimization**: Utilize Next.js `<Image>` component for automatic image optimization (WebP, lazy loading, responsive sizes).

This revised technology stack provides a powerful and flexible foundation for The Crafted Hospitality website, aligning with modern web development best practices.

## Performance Requirements

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Strategies

- **Images**: WebP format, lazy loading, responsive images
- **Fonts**: Preload critical fonts, fallback fonts
- **CSS**: Critical CSS inline, non-critical deferred
- **JavaScript**: Minimal, deferred loading
- **Caching**: Browser caching, CDN implementation

## SEO Technical Requirements

### On-Page SEO

- **Meta Tags**: Unique title/description per page
- **Headings**: Proper H1-H6 hierarchy
- **URLs**: Clean, descriptive URLs
- **Images**: Alt text, descriptive filenames
- **Schema**: LocalBusiness, Service, Review markup

### Technical SEO

- **Sitemap**: XML sitemap auto-generation
- **Robots.txt**: Proper crawling directives
- **Canonical URLs**: Prevent duplicate content
- **Mobile-First**: Mobile-optimized indexing
- **Page Speed**: Core Web Vitals optimization

## Security Considerations

### Basic Security

- **SSL/TLS**: HTTPS everywhere
- **Forms**: reCAPTCHA protection
- **Headers**: Security headers implementation
- **Updates**: Regular platform/plugin updates

### Data Privacy

- **GDPR Compliance**: Cookie consent, privacy policy
- **Local Compliance**: Panama data protection laws
- **Contact Forms**: Secure data transmission
- **Analytics**: Privacy-compliant tracking

## Integration Requirements

### Essential Integrations

1. **Google Analytics 4**

   - Enhanced ecommerce tracking
   - Goal tracking (form submissions, downloads)
   - Custom events for CTAs

2. **Google Search Console**

   - Search performance monitoring
   - Indexing status tracking
   - Core Web Vitals monitoring

3. **Contact Form Solution**
   - Webflow Forms (if using Webflow)
   - Gravity Forms (if WordPress)
   - Custom solution (if Next.js)

### Optional Integrations

1. **Calendar Booking**: Calendly embed
2. **Email Marketing**: Mailchimp/ConvertKit
3. **Live Chat**: Tawk.to or Intercom
4. **CRM**: HubSpot or Pipedrive
5. **Social Media**: Instagram feed, LinkedIn integration

## Content Management

### Content Strategy

- **CMS**: Built-in platform CMS or headless solution
- **Workflow**: Draft → Review → Publish
- **SEO**: Content optimization guidelines
- **Media**: Image compression and optimization

### Backup & Recovery

- **Automated Backups**: Daily incremental backups
- **Version Control**: Content versioning
- **Recovery Plan**: RTO < 4 hours, RPO < 24 hours

## Monitoring & Analytics

### Performance Monitoring

- **Core Web Vitals**: Google PageSpeed Insights
- **Uptime**: UptimeRobot or similar
- **Error Tracking**: Built-in platform monitoring

### Business Analytics

- **Traffic**: Google Analytics 4
- **Search**: Google Search Console
- **Conversion**: Goal tracking, form analytics
- **User Behavior**: Hotjar (optional)

## Scalability Considerations

### Traffic Scaling

- **Current**: 1,000-5,000 monthly visitors expected
- **Growth**: 10,000+ visitors within 12 months
- **Peak**: Conference/event traffic spikes

### Feature Expansion

- **Phase 1**: Basic consulting website
- **Phase 2**: Client portal, resource downloads
- **Phase 3**: Online booking system, course platform

## Development Timeline

### Phase 1: Foundation (Weeks 1-2)

- Repository setup and initial commit
- Basic site structure and navigation
- Core pages content integration

### Phase 2: Design & Content (Weeks 3-4)

- Brand identity implementation
- Content creation and optimization
- Responsive design completion

### Phase 3: Features & SEO (Weeks 5-6)

- Contact forms and integrations
- SEO optimization and testing
- Performance optimization

### Phase 4: Launch (Week 7)

- Final testing and QA
- DNS setup and SSL configuration
- Go-live and monitoring setup
