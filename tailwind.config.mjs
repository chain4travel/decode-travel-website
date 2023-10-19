const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			gray: colors.neutral,
			white: '#fff',
		},
		container: {
			center: true,
			padding: '2rem'
		},
		backgroundImage: {
			'travelr': 'radial-gradient(145% 145% at 100% 0%, rgba(105, 29, 231, 0.59) 0%, rgba(105, 29, 231, 0.00) 55%);',
			'decoder': 'radial-gradient(145% 145% at 100% 0%, rgba(255, 22, 106, 0.50) 0%, rgba(255, 22, 106, 0.00) 55%);',
		},
	},
	plugins: [],
}
