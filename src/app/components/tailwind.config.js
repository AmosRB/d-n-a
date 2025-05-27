module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spin3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        spin3d: 'spin3d 15s linear infinite',
      },
    },
  },
  plugins: [],
};

