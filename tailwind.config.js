/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',         
      './src/**/*.{js,ts,jsx,tsx}',  // This should cover all your source files
    ],
    theme: {
      extend: {
        fontFamily: {
            orbitron: ["Orbitron", "sans-serif"],
            protestGuerrilla: ["Protest Guerrilla", "sans-serif"]
          },
      },
    },
    plugins: [],
  };
