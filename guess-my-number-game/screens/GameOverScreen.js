import Title from "../components/ui/Title";
import {
  View, Image, StyleSheet, Text,
  useWindowDimensions,
  ScrollView
} from "react-native";

import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


export default function GameOverScreen({ userNumber, onStartNewGame, roundsNumber }) {
  const { width, height } = useWindowDimensions();

  console.log(width, height);
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageContainerStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageContainerStyle]}>
          <Image source={require("../assets/images/success.png")}
            style={styles.image} />
        </View>
        <Text style={styles.summaryText}>Your number <Text style={styles.highlight}>
          {userNumber}</Text> was guessed <Text style={styles.highlight}>{roundsNumber}
          </Text> times.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: Window.width < 380 ? 150 : 300,
    // height: Window.width < 380 ? 150 : 300,
    // borderRadius: Window.width < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.accent600,
    overflow: 'hidden', // this view acts as a mask for the actual image (crop image corners)
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
}); 