import { StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Skeleton, Text } from '@rneui/themed';

export default function Home(props) {
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Text h4>Mentis App</Text>
			<Text>Skeleton</Text>
			<Skeleton width={120} height={40} />

			<Text>Button</Text>
			<Button
				ViewComponent={LinearGradient}
				linearGradientProps={{
					colors: ['#FFBDDB', '#FF9ABE', '#CF99FF', '#978EEF'],
					start: { x: 0, y: 0.5 },
					end: { x: 1, y: 0.5 },
				}}
				onPress={() =>
					navigation.navigate('Login')
				}
			>
				Logout
			</Button>



		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
