import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';
import { useFonts } from 'expo-font'

export default function NumberContainer({ children }) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

const deviceWidth = Dimensions.get('window').width;
console.log(deviceWidth);

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent600,
        padding: deviceWidth < 380 ? 12 : 15,
        margin: deviceWidth < 380 ? 20 : 24,
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