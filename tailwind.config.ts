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
        "error": "#ba1a1a",
        "primary-fixed": "#d9e2ff",
        "inverse-surface": "#2e3132",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e1e3e4",
        "tertiary": "#251800",
        "surface-tint": "#2b5bb5",
        "surface-container": "#edeeef",
        "inverse-on-surface": "#f0f1f2",
        "surface-bright": "#f8f9fa",
        "on-primary-container": "#6b95f3",
        "tertiary-fixed-dim": "#e9c176",
        "surface-container-high": "#e7e8e9",
        "on-tertiary-container": "#b6924c",
        "secondary-fixed-dim": "#bbc8d0",
        "inverse-primary": "#b0c6ff",
        "primary-container": "#002c6e",
        "on-background": "#191c1d",
        "error-container": "#ffdad6",
        "on-secondary": "#ffffff",
        "surface": "#f8f9fa",
        "on-secondary-fixed-variant": "#3c494f",
        "on-error-container": "#93000a",
        "secondary": "#546067",
        "on-error": "#ffffff",
        "secondary-fixed": "#d7e4ec",
        "surface-variant": "#e1e3e4",
        "secondary-container": "#d7e4ec",
        "outline-variant": "#c6c5d4",
        "background": "#f8f9fa",
        "surface-container-lowest": "#ffffff",
        "primary": "#001944",
        "tertiary-container": "#402c00",
        "on-secondary-fixed": "#111d23",
        "on-primary-fixed": "#001945",
        "outline": "#767683",
        "on-tertiary-fixed": "#261900",
        "on-tertiary-fixed-variant": "#5d4201",
        "on-surface-variant": "#454652",
        "tertiary-fixed": "#ffdea5",
        "surface-container-low": "#f3f4f5",
        "on-surface": "#191c1d",
        "on-secondary-container": "#5a666d",
        "on-tertiary": "#ffffff",
        "surface-dim": "#d9dadb",
        "on-primary-fixed-variant": "#00429c",
        "primary-fixed-dim": "#b0c6ff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["var(--font-manrope)", "sans-serif"],
        "body": ["var(--font-inter)", "sans-serif"],
        "label": ["var(--font-inter)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
