/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './frontend/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'opacity': '0.85'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
            'opacity': '1'
          },
        },
      },
      dropShadow: {
        'glow-orange': '0 0 3px rgba(234,88,12,0.4)',
        'glow-blue': '0 0 3px rgba(59,130,246,0.4)',
      },
    },
  },
  plugins: [],
} 