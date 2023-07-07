import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"

export default function App() {
	return (
		<View className="flex-1 bg-[#fff] items-center justify-center">
			<Text>Hello from Faterium!</Text>
			<StatusBar style="auto" />
		</View>
	)
}
