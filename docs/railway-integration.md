# Railway Integration Strategy - The Crafted Hospitality (Next.js)

## 🚀 Overview

This document outlines the integration strategy for deploying The Crafted Hospitality Next.js application to Railway.

## 🔄 Development & Deployment Workflow

1.  **Local Development**: Build and test features in your local Next.js environment (`npm run dev`).
2.  **Version Control**: Commit changes to a feature branch (e.g., `feature/new-section`).
3.  **Pull Request**: Open a PR to the `develop` branch for review.
4.  **Merge to `develop`**: After review and checks, merge to `develop`.
    - (Optional) `develop` branch can be auto-deployed to a staging environment on Railway.
5.  **Merge to `main`**: For production release, merge `develop` into `main`.
6.  **Automatic Deployment**: Railway detects changes on the `main` branch and automatically builds and deploys the Next.js application.

## 📁 Repository Structure (Next.js Specific)

(Refer to `docs/nextjs-tailwind-setup.md` for the detailed Next.js project structure. Railway will typically build from this structure.)

Key files for Railway:

- `package.json`: Defines dependencies and scripts (e.g., `build`, `start`).
- `next.config.js`: Next.js specific configurations.
- Potentially a `Procfile` or `railway.json` if custom build/start commands are needed beyond what Nixpacks infers.

## ⚙️ Railway Configuration

### Build Settings

- **Builder**: Railway typically uses Nixpacks, which auto-detects Next.js projects.
- **Build Command**: Usually `npm run build` (or `yarn build`), as defined in `package.json`.
- **Start Command**: Usually `npm run start` (or `yarn start`), as defined in `package.json` (e.g., `next start`).

### railway.json (Optional - Nixpacks often handles this automatically)

If more control is needed, you can add a `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "nixpacksConfig": {
      "startCommand": "npm run start"
    }
  },
  "deploy": {
    "startCommand": "npm run start",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### package.json Scripts (Example)

```json
{
  "name": "thecraftedhospitality",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p $PORT", // Important: Use $PORT for Railway
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.x.x", // Use appropriate Next.js version
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3.x.x" // Use appropriate Tailwind version
    // ... other dependencies
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.x.x",
    "postcss": "^8",
    "autoprefixer": "^10"
    // ... other devDependencies
  }
}
```

**Note**: Ensure the `start` script in `package.json` uses `$PORT` (e.g., `next start -p $PORT`) as Railway injects the port it expects the application to listen on via this environment variable.

## 🌐 Domain Configuration

- **Domain**: `thecraftedhospitality.com`
- **Railway Setup**: Add as a custom domain in the Railway project settings.
- **DNS**: Update your domain's DNS records (e.g., CNAME or A records) to point to the service provided by Railway.
- **SSL**: Railway automatically provisions and renews SSL certificates for custom domains.

## 🌱 Environment Variables

Set these in your Railway project's service settings:

- `NODE_ENV=production`
- `NEXT_PUBLIC_BASE_URL=https://thecraftedhospitality.com` (Example for client-side absolute URLs)
- Any other API keys or service URLs (e.g., for a headless CMS, email service if using API routes).

## 🔧 Custom Code & API Routes (Example: Contact Form)

Next.js API routes (e.g., `src/app/api/contact/route.ts`) can handle form submissions.

```typescript
// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // TODO: Process the data (e.g., send email, save to database)
    console.log("Contact form data:", data);
    // Example: Send email using a service like Resend or Nodemailer
    return NextResponse.json(
      { message: "Form submitted successfully!", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { message: "Error submitting form." },
      { status: 500 }
    );
  }
}
```

Client-side form submission would then fetch this API route.

## 📊 Performance & SEO Considerations for Next.js on Railway

- **Image Optimization**: Use Next.js `<Image>` component. No extra server config needed on Railway.
- **Caching**: Next.js handles caching strategies (SSR, SSG, ISR). Railway's CDN will also cache static assets.
- **SEO**: Utilize Next.js Metadata API for `title`, `description`, Open Graph tags, etc. Ensure `sitemap.xml` and `robots.txt` are generated and served.

## 📋 Deployment Checklist (Next.js)

### Pre-Deployment

- [ ] Local development and testing completed.
- [ ] `package.json` scripts (especially `build` and `start` with `$PORT`) are correct.
- [ ] Environment variables identified and ready to be set in Railway.
- [ ] `next.config.js` reviewed for any production-specific settings.
- [ ] Code linted and formatted.

### Railway Deployment & Configuration

- [ ] GitHub repository connected to Railway service.
- [ ] Build and start commands verified (or Nixpacks allowed to auto-detect).
- [ ] Environment variables set in Railway service settings.
- [ ] Custom domain (`thecraftedhospitality.com`) added and DNS configured.
- [ ] SSL certificate verified.

### Post-Deployment

- [ ] Website accessible via `thecraftedhospitality.com`.
- [ ] Test all core functionalities (navigation, forms, dynamic content).
- [ ] Check browser console for errors.
- [ ] Verify analytics tracking (if implemented).
- [ ] Submit sitemap to Google Search Console.
- [ ] Perform basic performance check (e.g., PageSpeed Insights).

## 🔄 Update Workflow

- Push changes to the `main` branch (usually via merging `develop`).
- Railway automatically picks up changes, rebuilds, and redeploys.
- Monitor deployment logs in Railway if issues arise.

This revised strategy aligns the deployment process with a Next.js application on Railway.
