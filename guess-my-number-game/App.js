import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { Colors } from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as SplashScreen from 'expo-splash-screen';  // waiting screen 
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

let guessRounds = 0;

export default function App() {
  // configure font and load font
  const [fontsLoaded, fontError] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });

  // hide splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);



  // set initial state null = no number to later check this and switch to appropriate screen
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    // setGameOver(false);
  }

  function startNewGame() {
    // reset
    setGameOver(false);
    setUserNumber(null);

    // change screen
    screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    guessRounds = numberOfRounds;
    console.log(guessRounds);
  }


  if (userNumber) {
    screen =
      <GameScreen userNumber={userNumber}
        onGameOver={gameOverHandler}
      />;
  }

  if (gameOver)
    screen = <GameOverScreen userNumber={userNumber}
      onStartNewGame={startNewGame}
      roundsNumber={guessRounds}
    />


  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar style='light' />
      <LinearGradient style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
        onLayout={onLayoutRootView}
      >
        <ImageBackground source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {/* execute either GameScreen or StartGameScreen or GameOver*/}
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
