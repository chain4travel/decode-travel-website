const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			gray: colors.neutral,
			white: '#fff',
			primary: '#00F3B1',
			company: '#691DE7',
			decoder: '#FF166A'
		},
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			backgroundImage: {
				'gradient-primary': 'radial-gradient(150% 150% at 100% 0%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 55%);',
				'gradient-company': 'radial-gradient(145% 145% at 100% 0%, rgba(105, 29, 231, 0.59) 0%, rgba(105, 29, 231, 0.00) 55%);',
				'gradient-decoder': 'radial-gradient(145% 145% at 100% 0%, rgba(255, 22, 106, 0.50) 0%, rgba(255, 22, 106, 0.00) 55%);',
			},
			animation: {
				'spin-slow': 'spin 30s linear infinite',
			}
		}
	},
	plugins: [],
}
