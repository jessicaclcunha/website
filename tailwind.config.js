/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Fundo escuro "tinta" — inspirado em wireframes de computação gráfica
        ink: {
          50: '#F4F5F8',
          100: '#E7E8EF',
          400: '#5B6178',
          500: '#3E4258',
          600: '#2B2E40',
          700: '#20222F',
          800: '#181A24',
          900: '#12131B',
          950: '#0C0D12',
        },
        // Fundo claro "porcelana"
        porcelain: {
          100: '#FFFFFF',
          200: '#F8F6F2',
          300: '#F1EEE7',
          400: '#E4DFD4',
        },
        // Acento principal — roxo "viola" (nod ao violino + à identidade lavender original)
        viola: {
          100: '#EFEAFD',
          200: '#D9CDFB',
          300: '#B9A4F5',
          400: '#9678EE',
          500: '#7454E5',
          600: '#5F3ED0',
          700: '#4C31A8',
          800: '#3A2680',
        },
        // Acento secundário — latão quente (madeira/cordas de instrumento)
        brass: {
          200: '#F1DFB8',
          300: '#E7C793',
          400: '#DBAE6C',
          500: '#C9964B',
          600: '#A87638',
        },
        // Mantido por compatibilidade com código existente
        lavender: {
          100: '#F3E5FF',
          200: '#E2C0FF',
          300: '#D19BFF',
          400: '#C076FF',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'mesh-grid': 'linear-gradient(rgba(180,164,245,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(180,164,245,0.10) 1px, transparent 1px)',
      },
      backgroundSize: {
        'mesh': '44px 44px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'draw': 'draw 1.6s ease forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
    }
  },
  plugins: [],
}
