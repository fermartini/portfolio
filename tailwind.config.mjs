/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				squeeze: "squeeze 0.6s ease-in-out",
				slide1: "slide 0.2s ease-out",
				slide2: "slide 0.4s ease-out",
				slide3: "slide 0.6s ease-out",
				slide4: "slide 0.8s ease-out"

			},
			keyframes: {
				squeeze: {
					"0%, 100%": {
						transform: "scale(1, 1)"
					},
					"50%": {
						transform: "scale(1.1, 0.9)"
					}
				},
				slide: {
					"0%": {
						transform: "translateY(-20px)"
					},
					"100%": {
						transform: "translateY(0)"
					}
				}

			},
			
		}
	},
	plugins: [{
	}]
	
}
