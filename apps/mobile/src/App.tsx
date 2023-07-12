import React from "react"
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native"
import { ResizeMode, Video } from "expo-av"

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "https://i.imgur.com/3sZgdBF.mp4",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "https://i.imgur.com/FOq3tCq.mp4",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "https://i.imgur.com/67tGWQI.mp4",
	},
]

type ItemProps = { title: string }

const Item = ({ title }: ItemProps) => (
	<View style={styles.item}>
		<Video
			source={{
				uri: title,
			}}
			resizeMode={ResizeMode.CONTAIN}
			shouldPlay={true}
			isLooping
			onError={console.log}
			style={{
				width: "100%",
				height: "100%",
			}}
		/>
	</View>
)

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={(item) => item.id}
				windowSize={4}
				initialNumToRender={0}
				maxToRenderPerBatch={2}
				removeClippedSubviews
				// viewabilityConfig={{
				// 	itemVisiblePercentThreshold: 0,
				// }}
				pagingEnabled
				decelerationRate={"normal"}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		height: 800,
		// backgroundColor: "#f9c2ff",
		marginVertical: 8,
		// marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
})

export default App
