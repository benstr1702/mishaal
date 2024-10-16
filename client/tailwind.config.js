// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"], // Enable dark mode using a class
	content: [
		"./index.html", // Include your index.html file
		"./src/**/*.{js,ts,jsx,tsx}", // Include all component files
	],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				primary: "#0D92F4",
				secondary: "#77CDFF",
				lightRed: "#F95454",
				strongRed: "#C62E2E",
			},
			fontFamily: {
				custom: ["DM Sans", "sans-serif"],
			},
		},
	},
	plugins: [
		require("tailwindcss"), // Include TailwindCSS
		require("autoprefixer"), // Include Autoprefixer for browser compatibility
		require("tailwindcss-animate"), // Include tailwindcss-animate for animations
	],
};
