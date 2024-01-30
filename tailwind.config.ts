import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        flamingo: {
          "50": "#fef5ee",
          "100": "#fde8d7",
          "200": "#fbccad",
          "300": "#f8a879",
          "400": "#f47a43",
          "500": "#f15a22",
          "600": "#e23e14",
          "700": "#bb2d13",
          "800": "#952417",
          "900": "#782116",
          "950": "#410d09",
        },

        ecstasy: {
          "50": "#fff9ec",
          "100": "#fff2d3",
          "200": "#ffe1a5",
          "300": "#ffcb6d",
          "400": "#ffa932",
          "500": "#ff8e0a",
          "600": "#ff7500",
          "700": "#cc5502",
          "800": "#a1410b",
          "900": "#82380c",
          "950": "#461a04",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", "sans-serif"], // Geist Variable for sans-serif
      mono: ["var(--font-jetbrains-mono)", "monospace"], // JetBrains Mono for monospace
    },
  },
  plugins: [require("tailwindcss-animate"), "prettier-plugin-tailwindcss"],
} satisfies Config;

export default config;
