/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#028090',      // Teal
        secondary: '#00A896',    // Seafoam
        accent: '#02C39A',       // Mint
        dark: '#065A82',         // Deep blue
        barrier: '#E67E22',      // Orange
        solution: '#27AE60',     // Green
        evidence: '#9B59B6',     // Purple
      },
    },
  },
  plugins: [],
}
