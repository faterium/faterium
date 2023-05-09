module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["prettier", "eslint:recommended", "plugin:@typescript-eslint/recommended", "turbo"],
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: ["*.cjs", "zod-types/"],
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
			rules: {
				"comma-dangle": ["error", "only-multiline"],
			},
		},
	],
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
		project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		quotes: [2, "double"],
		semi: [2, "never"],
		"comma-dangle": ["error", "always-multiline"],
	},
}
