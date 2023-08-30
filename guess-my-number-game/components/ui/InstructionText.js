import { Text, StyleSheet } from "react-native"

export default function InstructionText({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: '#fff3b0',
        fontSize: 25
    },
}); 