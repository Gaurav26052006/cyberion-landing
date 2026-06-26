/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050816",
          primary: "#00F5FF",
          secondary: "#8B5CF6",
          accent: "#39FF14",
          dark: "#0A0E27",
          darker: "#0F1419",
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 245, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-green': '0 0 20px rgba(57, 255, 20, 0.5)',
      },
    },
  },
  plugins: [],
}
