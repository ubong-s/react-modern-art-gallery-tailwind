module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            themeOrange: '#D5966C',
            themeDarker: '#151515',
            themeDark: '#444444',
         },
         minHeight: {
            90: '90vh',
         },
         zIndex: {
            highest: 9999,
         },
         fontFamily: {
            bigShoulders: ['"Big Shoulders Display"', 'cursive'],
            outfit: ['"Outfit"', 'sans-serif'],
         },
         fontSize: {
            '7.5xl': ['5rem', { lineHeight: '1' }],
         },
      },
   },
   plugins: [],
};
