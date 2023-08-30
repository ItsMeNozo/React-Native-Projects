import Title from "../components/ui/Title";
import { View, Image, StyleSheet, Text } from "react-native";

import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


export default function GameOverScreen({ userNumber, onStartNewGame, roundsNumber }) {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
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
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
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