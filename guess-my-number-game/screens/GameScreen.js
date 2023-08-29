import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect, useMemo } from "react";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  // console.log(min, max, exclude, rndNum);

  if (rndNum === exclude)
    return generateRandomBetween(min, max, exclude);

  return rndNum;
}

let minBoundary = 1, maxBoundary = 100; // it's actually 99 

export default function GameScreen({ userNumber, onGameOver }) {
  // exclude to add an extra difficulty: fail user first time
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);


  // check for game over
  useEffect(() => {
    // console.log(currentGuess);
    if (currentGuess === userNumber) {
      // switch to game over screen
      // console.log("Test");
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]); // whenever currentGuess or userNumber or onGameOver changes, re-execute effect

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => {
              if (currentGuess > userNumber) {
                Alert.alert('Dont lie', "You know that it's wrong",
                  [{ text: 'Sorry!', style: 'cancel' }]);
              }
              else {
                minBoundary = currentGuess + 1;
                setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary, currentGuess));
              }
            }}>+</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => {
              // maxBoundary = prevGuess;
              if (currentGuess < userNumber) {
                Alert.alert('Dont lie', "You know that it's wrong",
                  [{ text: 'Sorry!', style: 'cancel' }]);
              }
              else {
                maxBoundary = currentGuess;
                setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary, currentGuess));
              }
            }}>-</PrimaryButton>
          </View>

        </View>
      </Card>
      <View>
        {/* LOG ROUNDS */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText: {
    marginBottom: 12
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }
})