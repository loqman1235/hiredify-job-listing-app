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
        primary: "hsl(var(--primary))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        footer: "hsl(var(--footer))",
        muted: "hsl(var(--muted))",
        text: {
          primary: "hsl(var(--text))",
          secondary: "hsl(var(--text-light))",
        },
        border: "hsl(var(--border))",
        destructive: {
          foreground: "hsl(var(--destructive-foreground))",
          background: "hsl(var(--destructive-background))",
        },
        success: "hsl(var(--success-color))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
        "input-placeholder": "hsl(var(--input-placeholder))",
      },
    },
  },
  plugins: [],
};
export default config;
