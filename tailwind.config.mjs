/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		  },
		extend: {
			colors: {
				rocketseat: "#7159C1"
			},
		},
	},
	plugins: [],
}
