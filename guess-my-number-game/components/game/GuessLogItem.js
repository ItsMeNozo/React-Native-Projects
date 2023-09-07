import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

import { Colors } from '../../constants/colors';

export default function GuessLogItem({ roundNumber, guess }) {
	const { width, height } = useWindowDimensions();
	const marginVerticalSize = width > 500 ? 5 : 8;

	return (
		<View style={[styles.listItem, { marginVertical: marginVerticalSize }]}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Computer's Guess: {guess}</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		// marginVertical: marginVerticalSize,
		backgroundColor: Colors.accent500,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		// shadow android
		elevation: 4,
		// shadow ios
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		shadowRadius: 3
	},
	itemText: {
		fontFamily: 'open-sans'
	}
}); 