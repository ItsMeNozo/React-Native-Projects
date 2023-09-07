import {
	TextInput, View, StyleSheet, Alert, useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView
} from 'react-native';
import { useState } from 'react';
import { Colors } from '../constants/colors';

import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';


export default function StartGameScreen({ onPickedNumber }) {
	const [enteredNumber, setEnteredNumber] = useState('');

	const { width, height } = useWindowDimensions();

	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		// checks number validity
		const chosenNumber = parseInt(enteredNumber);

		// checks if the conversion fails
		if (isNaN(chosenNumber) || chosenNumber <= 0) {
			// show alert ...
			Alert.alert(
				"Invalid number!",
				"Number has to be between 1 and 99",
				[{ text: "Okay", onPress: resetInputHandler, style: 'destructive' }]
			)
			return; // cancel execution
		}
		onPickedNumber(chosenNumber);
	}

	const marginTopDistance = height < 380 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior='position'>
				<View style={[styles.mainContainer, { marginTop: marginTopDistance }]}>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a Number</InstructionText>
						<TextInput style={styles.textInput}
							maxLength={2}
							keyboardType='number-pad'
							autoCapitalize='none' // often used for email fields
							autoCorrect={false} // often used for email fields
							value={enteredNumber}
							onChangeText={numberInputHandler}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	)

}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	mainContainer: {
		flex: 1,
		// marginTop: Window.height < 380 ? 30 : 100,
		alignItems: 'center',
	},
	textInput: {
		width: 50,
		height: 50,
		fontSize: 22,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		//text color
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1
	}
});