import { Text, StyleSheet, Platform } from "react-native";
import { Colors } from "../../constants/colors";
import { Window } from "./Window";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}


const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: Window.width < 380 ? 22 : 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 0,
    // borderWidth: Platform.OS === 'ios' ? 0 : 2,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: '80%'
  }
})