import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  fontFamily: {
    monda: ["Monda", "sans-serif"],
    vesber: ["Vesper Libre", "sans-serif"]
  }, 
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
  },
  keyframes: {
    marquee: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
    "slide-left": {
      "0%": { transform: "translateX(-100%)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
    "slide-left-out": {
      "0%": { transform: "translateX(0)", opacity: "1" },
      "100%": { transform: "translateX(-100%)", opacity: "0" },
    },
    rotate360: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
  animation: {
    marquee: 'marquee 15s linear infinite',
    "slide-left": "slide-left 0.3s ease-out forwards",
    "slide-left-out": "slide-left-out 0.3s ease-in forwards",
    'spin-slow': 'rotate360 10s linear infinite',
  },
  screens: {
    's': '390px',
    'sm': '550px',   
    'md': '768px',   
    "lg": '1024px',
    "xl": '1200px',  
    '2xl': '1440px',
  }
}

  },
  plugins: [],
} satisfies Config;
