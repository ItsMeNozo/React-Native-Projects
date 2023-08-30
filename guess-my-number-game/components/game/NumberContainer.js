import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { useFonts } from 'expo-font'

export default function NumberContainer({ children }) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent600,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    numberText: {
        color: Colors.accent600,
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'open-sans'
    }
});