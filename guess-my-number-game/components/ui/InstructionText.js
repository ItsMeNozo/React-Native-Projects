import { Text, StyleSheet, Dimensions } from "react-native"

export default function InstructionText({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: '#fff3b0',
        fontSize: width < 380 ? 20 : 24
    },
}); 