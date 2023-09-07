import { View, Text, StyleSheet } from "react-native";

function MealDesc({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.descriptionContainer, style]}>
      <Text style={[styles.descItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.descItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.descItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDesc;

const styles = StyleSheet.create({
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  descItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
