# System Patterns - The Crafted Hospitality

## Architecture Overview

Professional consulting website with modern, responsive design optimized for B2B lead generation and SEO positioning in the hospitality industry.

## Site Structure

```
The Crafted Hospitality Website
├── Homepage (/)
│   ├── Hero Section with Value Proposition
│   ├── Three Service Pillars
│   ├── Testimonials Section
│   ├── Featured Case Studies
│   └── Newsletter Signup
├── About (/sobre-mi)
│   ├── Professional Story
│   ├── Credentials & Certifications
│   ├── Methodology & Values
│   └── CTA to Services
├── Services (/servicios)
│   ├── DMC & Experiences
│   │   ├── Reservations & Commissions
│   │   ├── Custom Packages
│   │   └── 24/7 Group Support
│   └── Hotel Consulting & Technology
│       ├── Process Diagnosis
│       ├── Technology Implementation
│       ├── Guest Experience Strategy
│       ├── Team Training
│       └── Quality Audits
├── Portfolio (/casos-de-exito)
│   ├── Case Study Grid
│   ├── Individual Case Pages
│   └── Results & Testimonials
├── Blog (/blog)
│   ├── Industry Insights
│   ├── Best Practices
│   ├── Technology Trends
│   └── Case Study Summaries
├── Contact (/contacto)
│   ├── Contact Form
│   ├── Direct Contact Info
│   ├── Calendar Booking (Calendly)
│   └── Location Map
└── Legal (/legal)
    ├── Privacy Policy
    └── Terms & Conditions
```

## Design Patterns

### Brand Identity System

- **Logo**: "CH" monogram in header and favicon
- **Color Palette**:
  - Primary: Dark green (#2D4A3E)
  - Secondary: Anthracite (#3A3A3A)
  - Accent: Gold/brass (#B8860B)
  - Background: Clean white (#FFFFFF)
- **Typography**:
  - Headers: Serif font for "Crafted" elegance
  - Body: Sans-serif for "Hospitality" readability
  - Accent: Script for premium touches

### Navigation Patterns

- **Desktop**: Horizontal menu with prominent CTA button
- **Mobile**: Hamburger menu with sticky CTA
- **Footer**: Comprehensive sitemap and contact info

### Content Patterns

- **Service Pages**: Problem → Solution → Benefits → CTA
- **Case Studies**: Challenge → Approach → Results → Testimonials
- **Blog Posts**: SEO-optimized with clear CTAs
- **Forms**: Progressive disclosure, mobile-optimized

## Technical Architecture

### Frontend Stack Options

1. **WordPress + Custom Theme**

   - Elementor for design flexibility
   - Yoast SEO for optimization
   - WooCommerce for potential future services

2. **Webflow (Recommended)**

   - Visual design control
   - Built-in SEO tools
   - Fast hosting included
   - No-code updates

3. **Next.js + Headless CMS**
   - Modern React framework
   - Optimal performance
   - Headless CMS (Strapi/Contentful)

### Hosting & Deployment

- **Platform**: Railway
- **Repository**: GitHub
- **Domain**: thecraftedhospitality.com
- **SSL**: Automatic via Railway
- **CDN**: Built-in or Cloudflare

### Performance Patterns

- **Image Optimization**: WebP format, lazy loading
- **Caching Strategy**: Browser caching, CDN
- **Minification**: CSS/JS compression
- **Mobile-First**: Responsive breakpoints

## Data Architecture

### Content Structure

```
Content Types:
├── Pages (Static content)
├── Services (Structured service offerings)
├── Case Studies (Portfolio items)
├── Blog Posts (SEO content)
├── Testimonials (Social proof)
└── Team Members (About content)
```

### SEO Structure

- **URL Pattern**: `/categoria/titulo-post`
- **Meta Structure**: Title, description, OG tags
- **Schema Markup**: LocalBusiness, Service, Review
- **Sitemap**: Auto-generated XML

## Integration Patterns

### Lead Generation

- **Contact Forms**: Custom forms with validation
- **Calendar Booking**: Calendly integration
- **Newsletter**: Mailchimp/ConvertKit
- **CRM**: HubSpot/Pipedrive potential

### Analytics & Tracking

- **Google Analytics 4**: Enhanced ecommerce tracking
- **Google Search Console**: SEO monitoring
- **Facebook Pixel**: Retargeting (optional)
- **Hotjar**: User behavior analysis

### Communication

- **Email**: Professional email hosting
- **WhatsApp Business**: Quick consultation chat
- **Live Chat**: Tawk.to or similar (optional)

## Security Patterns

- **SSL Certificate**: Automatic HTTPS
- **Form Protection**: reCAPTCHA integration
- **Data Privacy**: GDPR/Local compliance
- **Backup Strategy**: Automated daily backups

## Development Workflow

1. **Version Control**: Git with feature branches
2. **Environment**: Development → Staging → Production
3. **CI/CD**: Automated deployment via Railway
4. **Testing**: Cross-browser, mobile testing
5. **Monitoring**: Uptime monitoring, performance alerts

## Content Management Workflow

- **Content Calendar**: Editorial planning
- **SEO Optimization**: Keyword research, meta optimization
- **Image Guidelines**: Brand-consistent photography
- **Quality Assurance**: Content review process
