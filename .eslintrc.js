/** @type {import("eslint").Linter.Config} */
const config = {
	root: true,
	extends: ["@faterium/eslint-config"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		tsconfigRootDir: __dirname,
		project: true,
	},
}

module.exports = config
