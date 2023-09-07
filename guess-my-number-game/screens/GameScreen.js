import {
  View, Text, StyleSheet, Alert, FlatList,
  useWindowDimensions
} from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect, useMemo } from "react";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  // console.log(min, max, exclude, rndNum);

  if (rndNum === exclude)
    return generateRandomBetween(min, max, exclude);

  return rndNum;
}


let minBoundary = 1, maxBoundary = 100; // it's actually 99 

export default function GameScreen({ userNumber, onGameOver }) {
  const { width, height } = useWindowDimensions();
  // exclude to add an extra difficulty: fail user first time
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessRoundsLength = guessRounds.length;

  // check for game over
  useEffect(() => {
    // console.log(currentGuess);
    if (currentGuess === userNumber) {
      // switch to game over screen
      // console.log("Test");
      onGameOver(guessRoundsLength);
    }
  }, [currentGuess, userNumber, onGameOver]); // whenever currentGuess or userNumber or onGameOver changes, re-execute effect

  // reset min and max boundaries: called whenever GameScreen gets created
  useEffect(() => {
    minBoundary = 1; maxBoundary = 100;
  }, []);

  function nextGuessHandler(action) {

    if ((action === "plus" && currentGuess > userNumber) || (action === "minus" && currentGuess < userNumber)) {
      Alert.alert('Dont lie', "You know that it's wrong",
        [{ text: 'Sorry!', style: 'cancel' }]);
      return;

    }

    if (action == "plus") {
      minBoundary = currentGuess + 1;
    }
    else if (action === "minus") {
      maxBoundary = currentGuess;
    }

    const randNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(randNum);

    // update guess logs
    setGuessRounds(prevGuesses => [randNum, ...prevGuesses]);

  }

  let content = <>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card>
      <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'plus')}>
            <AntDesign name="plus" size={24} color="white" />

          </PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'minus')}>
            <AntDesign name="minus" size={24} color="white" />
          </PrimaryButton>
        </View>

      </View>
    </Card>
  </>
  if (width > 500) {
    // landscape mode
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "plus")}>
              <AntDesign name="plus" size={24} color="white" />

            </PrimaryButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "minus")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>

      </>
    )
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.flatlistContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => {
            return (
              <GuessLogItem guess={item} roundNumber={guessRoundsLength - index} />
            )
          }}
          keyExtractor={item => item} // for key
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 10,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12,
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
  },
  flatlistContainer: {
    flex: 1,
    padding: 16
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})