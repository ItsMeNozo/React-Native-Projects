import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function IconButton({ icon, onPress }) {
  return (
    <Pressable onPress={onPress} style={(pressed) => pressed && styles.pressed}>
      <AntDesign name={icon} size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
