import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function Card({ children }) {
    return <View style={styles.inputContainer}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 60,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        // android
        elevation: 4,
        //ios: 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 }, //pushed down 2 pixels
        shadowRadius: 6, // controls how much shadow expands
        shadowOpacity: 0.25
    },
}); 