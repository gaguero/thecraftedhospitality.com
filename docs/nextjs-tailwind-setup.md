# Next.js + Tailwind CSS Setup - The Crafted Hospitality

## 1. Technology Stack Decision

- **Selected Stack**: Next.js (React Framework) + Tailwind CSS
- **Decision Date**: January 2025 (Revision from Webflow)
- **Rationale**:
  - **Flexibility & Scalability**: Provides a robust foundation for custom features and future growth.
  - **Performance**: Leverages Next.js's capabilities (SSR, SSG, ISR) for optimal loading times.
  - **Developer Experience**: Modern React development with the utility-first approach of Tailwind CSS.
  - **SEO Control**: Fine-grained control over SEO elements and metadata.
  - **Ecosystem**: Rich ecosystem of React libraries and tools.

## 2. Project Initialization (Subtask 3.1.1)

- **Command**:
  ```bash
  npx create-next-app@latest thecraftedhospitality --typescript --tailwind --eslint
  # Follow prompts:
  # ✔ Would you like to use `src/` directory? ... No / Yes (Recommended: Yes)
  # ✔ Would you like to use App Router? (recommended) ... No / Yes (Recommended: Yes)
  # ✔ Would you like to customize the default import alias? ... No / Yes (Recommended: No, keep @/*)
  ```
- **Output**: A new Next.js project with TypeScript, Tailwind CSS, and ESLint pre-configured.
- **Action**: Run this command in the workspace root (`/c%3A/Users/jovy2/Documents/VTF/thecraftedhospitality.com`). This will create a `thecraftedhospitality` sub-directory. We will then move its contents to the root.

## 3. Project Structure (Post-Initialization - Subtask 3.1.2)

After running `create-next-app` and moving contents to the root:

```
/
├── .next/                  # Next.js build output
├── .vscode/                # VS Code settings (optional)
├── node_modules/           # Project dependencies
├── public/                 # Static assets (images, fonts, favicon.ico)
│   └── images/
│   └── fonts/
├── src/                    # Source code (if chosen during init)
│   ├── app/                # App Router: Pages, layouts, components
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles (Tailwind base, custom globals)
│   ├── components/         # Shared UI components (e.g., Button, Navbar, Footer)
│   │   └── ui/             # Potentially for Shadcn UI or similar
│   ├── lib/                # Utility functions, helpers
│   ├── styles/             # Additional global styles or themes (if needed)
│   └── types/              # TypeScript type definitions
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration (for Tailwind CSS)
├── README.md               # Project README
└── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 4. Tailwind CSS Configuration (`tailwind.config.ts` - Subtask 3.1.3)

- **Extend Theme**:

  ```typescript
  import type { Config } from "tailwindcss";

  const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          "brand-primary": "#2D4A3E", // Dark Green
          "brand-secondary": "#3A3A3A", // Anthracite
          "brand-accent": "#B8860B", // Gold/Brass
          "brand-background": "#FFFFFF", // White
          "brand-text": "#333333", // Dark Gray for text
        },
        fontFamily: {
          serif_custom: ['"Playfair Display"', "serif"], // For "Crafted"
          sans_custom: ['"Open Sans"', '"Montserrat"', "sans-serif"], // For "Hospitality" & body
          script_custom: ['"Dancing Script"', "cursive"], // For premium touches (optional)
        },
        // ... other extensions like spacing, borderRadius, etc.
      },
    },
    plugins: [],
  };
  export default config;
  ```

- **Global Styles (`src/app/globals.css`)**:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Import custom fonts if not using a service like Google Fonts via <link> in layout.tsx */
  /* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Playfair+Display:wght@700&family=Montserrat:wght@400;700&display=swap'); */

  body {
    @apply font-sans_custom text-brand-text bg-brand-background;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* Example: Applying Playfair Display to main headers */
    /* Adjust as per specific design needs */
  }

  .crafted-title {
    /* Example class for "Crafted" part of logo/titles */
    @apply font-serif_custom;
  }

  .hospitality-title {
    /* Example class for "Hospitality" part of logo/titles */
    @apply font-sans_custom;
  }
  ```

## 5. ESLint & Prettier Setup (Subtask 3.1.4)

- **ESLint**: Already configured by `create-next-app`. Customize `.eslintrc.json` if needed.
- **Prettier**:
  ```bash
  npm install --save-dev prettier prettier-plugin-tailwindcss
  ```
  Create `.prettierrc.json`:
  ```json
  {
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "trailingComma": "es5",
    "plugins": ["prettier-plugin-tailwindcss"]
  }
  ```
  Create `.prettierignore`:
  ```
  node_modules
  .next
  out
  build
  ```
- **VS Code Settings (`.vscode/settings.json`)** (Recommended):
  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
  }
  ```

## 6. Initial Commit (Subtask 3.1.5)

- After setup and configuration, make an initial commit of the boilerplate.
  ```bash
  git add .
  git commit -m "feat: Initialise Next.js project with TypeScript, Tailwind CSS, ESLint & Prettier"
  git push origin develop # Assuming 'develop' branch is created and used
  ```

## 7. Next Steps (Post Subtask 3.1)

- Proceed with **Subtask 3.4 (Development Environment Setup)** which now focuses on this Next.js environment.
- Update Railway deployment configuration for a Next.js app (**Subtask 3.2 - To be revisited**).
- Begin building out components and pages based on the PRD.

This document serves as the primary guide for setting up the Next.js + Tailwind CSS project for The Crafted Hospitality.
