import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#FAFAFA',
          subtle: '#F4F4F5',
          dark: '#09090B',
          'dark-subtle': '#121215',
        },
        fg: {
          light: '#111111',
          muted: '#71717A',
          subtle: '#A1A1AA',
          dark: '#F4F4F5',
          'dark-muted': '#A1A1AA',
        },
        border: {
          light: '#E4E4E7',
          subtle: '#F0F0F2',
          dark: '#27272A',
          'dark-subtle': '#1D1D21',
        },
        accent: {
          light: '#09090B',
          dark: '#FAFAFA',
          highlight: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-lg': ['4.75rem', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-md': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'heading-xl': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'heading-md': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body-base': ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0em' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'caption': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'editorial': '1140px',
      }
    },
  },
  plugins: [
    typography,
  ],
};
