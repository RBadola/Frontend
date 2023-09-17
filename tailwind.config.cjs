/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
            '0%, 100%': {
                transform: 'translateX(-10px)'
                // transform: translateX(42px)
            },
            '50%': {
                transform: 'translateX(10px)'
            },
        }
    },
    animation: {
        shake: 'shake 0.5s ease-in-out 4',
    }
},
    },

  plugins: [
    
  ],
  
};
