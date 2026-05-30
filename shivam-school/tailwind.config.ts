import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3ff',
          100: '#e0e7ff',
          200: '#c3cefe',
          300: '#a0adfb',
          400: '#7b84f5',
          500: '#5a5de8',
          600: '#4540d0',
          700: '#3730b0',
          800: '#1B3A8C',
          900: '#1a2c6b',
          950: '#11193f',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#D4A017',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        warm: {
          50: '#FFFBF0',
          100: '#FFF8E7',
          200: '#FFF1CC',
          300: '#FFE499',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Nunito"', '"DM Sans"', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.97)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(27, 58, 140, 0.08)',
        'glow': '0 0 40px rgba(212, 160, 23, 0.3)',
        'card': '0 8px 32px rgba(27, 58, 140, 0.12)',
        'card-hover': '0 16px 48px rgba(27, 58, 140, 0.2)',
        'hero': '0 24px 64px rgba(27, 58, 140, 0.25)',
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B3A8C' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'stars-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 2l2.4 7.4H30l-6.2 4.5 2.4 7.4L20 17l-6.2 4.3 2.4-7.4L10 9.4h7.6z' fill='%23D4A017' fill-opacity='0.06'/%3E%3C/svg%3E\")",
        'gradient-hero': 'linear-gradient(135deg, #1B3A8C 0%, #0f2460 50%, #1B3A8C 100%)',
        'gradient-warm': 'linear-gradient(180deg, #FFFBF0 0%, #FFF8E7 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4A017 0%, #f5c842 100%)',
        'gradient-card': 'linear-gradient(135deg, #f8faff 0%, #eef2ff 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
