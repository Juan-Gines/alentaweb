/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			dancing: ['Dancing Script', 'cursive']			
		},
		extend: {
			animation: {
				aparecer: 'aparecer 1.5s linear forwards',
				growDown: 'growDown 300ms ease-in-out forwards',
				growUp: 'growUp 300ms ease-in-out forwards',
			},
			backgroundImage: {
        'header': "url('src/assets/img/bgheader.png')",        
      },
			keyframes: {
				aparecer: {
					'0%': { opacity: '0'},
					'100%': { opacity: '1' },
				},
				growDown: {
					'0%': { transform: 'scaleY(0)' },
					'80%': { transform: 'scaleY(1.1)' },
					'100%': { transform: 'scaleY(1)' },
				},
				growUp: {
					'0%': { transform: 'scaleY(1)' },
					'20%': { transform: 'scaleY(1.1)' },
					'100%': { transform: 'scaleY(0)' },
				},
			},
			transformOrigin: {
				'top-center': 'top center',
			}
		},
	},
	plugins: [],
};
