/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],			
		},
		extend: {
			animation: {
				aparecer: 'aparecer 1.5s linear forwards',
			},
			keyframes: {
				aparecer: {
					'0%': { opacity: '0'},
					'100%': { opacity: '1' },
				}
			}
		},
	},
	plugins: [],
};
