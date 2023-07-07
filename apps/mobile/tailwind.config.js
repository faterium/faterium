import baseConfig from "@faterium/tailwind-config"

/** @type {import("tailwindcss").Config} */
const config = {
	presets: [baseConfig],
	content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
}

export default config
