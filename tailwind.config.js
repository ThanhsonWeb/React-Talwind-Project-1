/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				sen: ["Sen", "sans-serif"],
			},
			colors: {
				brandBlue: "#1e40af",
				brandOrange: "#f97316",
			},
		},
	},
	plugins: [],
};
