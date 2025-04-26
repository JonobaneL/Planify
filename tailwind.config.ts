import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1440px',
      },
      backgroundImage: {
        profile: "url('/assets/profile_back1.svg')",
        profile2: "url('/assets/profile_back2.svg')",
        profile3: "url('/assets/profile_back3.svg')",
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#15367b',
        'primary-120': '#0F1D40',
        'primary-80': '#255eda',
        'primary-50': '#7c9fe9',
        'primary-10': '#edf3f8',
        'primary-5': '#f3f6fc',
        'p-background': '#f9f8fa',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 6px)',
      },
      fontFamily: {
        figtree: ['var(--font-figtree)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
