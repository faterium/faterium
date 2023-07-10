/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		"next",
		"turbo",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier",
	],
	rules: {
		"import/no-anonymous-default-export": "off",
		"@next/next/no-html-link-for-pages": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{ prefer: "type-imports", fixStyle: "inline-type-imports" },
		],
		quotes: [2, "double"],
		semi: [2, "never"],
		"comma-dangle": ["error", "always-multiline"],
	},
	ignorePatterns: ["**/*.config.js", "**/*.config.cjs", "packages/config/**"],
	reportUnusedDisableDirectives: true,
}

module.exports = config
