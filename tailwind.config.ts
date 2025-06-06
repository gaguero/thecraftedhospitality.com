import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand Color Palette from Style Guide
        brand: {
          primary: "#1F3D2F",        // Primary Green
          accent: "#D5A20D",         // Accent Gold
          white: "#FFFFFF",          // Pure White
          cream: "#FAF7F2",          // Off-White / Cream
          shadow: "#0E1E16",         // Forest Shadow
        },
        // Semantic color mappings
        primary: {
          DEFAULT: "#1F3D2F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FAF7F2",
          foreground: "#1F3D2F",
        },
        accent: {
          DEFAULT: "#D5A20D",
          foreground: "#FFFFFF",
        },
        background: "#FAF7F2",
        foreground: "#1F3D2F",
        muted: {
          DEFAULT: "#F5F3F0",
          foreground: "#1F3D2F",
        },
        card: {
          DEFAULT: "#FAF7F2",
          foreground: "#1F3D2F",
        },
        border: "#E0DDD8",
        input: "#C0BCB7",
        ring: "#D5A20D",
        // Legacy colors for compatibility
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
      },
      fontFamily: {
        // Primary Heading Font
        heading: ["Playfair Display", "serif"],
        // Body Copy Font
        sans: ["Lato", "Open Sans", "system-ui", "sans-serif"],
        // Monospace remains for code
        mono: ["var(--font-geist-mono)", "Menlo", "monospace"],
      },
      fontSize: {
        // Typography Scale from Style Guide
        'h1': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],      // 40px
        'h2': ['2rem', { lineHeight: '1.35', fontWeight: '600' }],       // 32px
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],      // 24px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],      // 16px
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '300' }], // 14px
        'button': ['1rem', { lineHeight: '1.2', fontWeight: '600' }],    // 16px
      },
      spacing: {
        // Layout Spacing from Style Guide
        'section': '5rem',      // 80px section padding
        'content': '2rem',      // 32px content padding
        'content-wide': '4rem', // 64px wide content padding
      },
      borderRadius: {
        lg: "0.5rem",    // 8px
        md: "0.375rem",  // 6px  
        sm: "0.25rem",   // 4px
        // Button radius from style guide
        button: "0.375rem", // 6px
      },
      backgroundImage: {
        'woodgrain': "url('/images/textures/woodgrain-subtle.png')",
      },
      opacity: {
        '85': '0.85',
        '80': '0.8',
        '60': '0.6',
        '35': '0.35',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0, 0, 0, 0.08)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'focus': '0 0 0 3px rgba(213, 162, 13, 0.2)',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

export default config;
