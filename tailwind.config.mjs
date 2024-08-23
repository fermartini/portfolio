/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
		},
	},
	plugins: [{
		"animation": {
		  "squeeze": "squeeze 0.6s ease-in-out"
		},
		"squeeze": {
		  "0%, 100%": {
			"transform": "scale(1, 1)"
		  },
		  "50%": {
			"transform": "scale(1.1, 0.9)"
		  }
		}
	  }],
	
}
