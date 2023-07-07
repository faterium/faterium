/** @type {import("@expo/config").ExpoConfig} */
const defineConfig = {
	name: "faterium",
	slug: "faterium",
	scheme: "faterium",
	version: "0.1.0",
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	splash: {
		image: "./assets/icon.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff",
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		bundleIdentifier: "com.dodorare.faterium",
		buildNumber: "0.1.0",
		supportsTablet: true,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/icon.png",
			backgroundColor: "#ffffff",
		},
	},
	extra: {
		eas: {
			// projectId: "your-project-id",
		},
	},
	// plugins: ["./expo-plugins/with-modify-gradle.js"],
}

export default () => defineConfig
