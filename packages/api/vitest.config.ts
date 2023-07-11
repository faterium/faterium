import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		globals: true,
		setupFiles: ["dotenv/config"],
		environment: "miniflare",
		environmentOptions: {
			wranglerConfigPath: "../../apps/workers/wrangler.toml",
			d1Databases: ["__D1_BETA__DB"],
		},
	},
})
