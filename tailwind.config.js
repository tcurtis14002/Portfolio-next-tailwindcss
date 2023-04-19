// @type {import('tailwindcss').Config}
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				sm: "390px",
				// => @media (min-width: 390px) {...}
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
