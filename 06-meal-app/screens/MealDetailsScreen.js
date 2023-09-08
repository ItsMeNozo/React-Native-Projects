import {
  Text,
  Image,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { MEALS } from "../data/dummy-data";
import MealDesc from "../components/MealDesc";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const [iconName, setIconName] = useState("staro");
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => mealId === meal.id);

  function headerButtonPressHandler() {
    setIconName(iconName === "star" ? "staro" : "star");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={headerButtonPressHandler} icon={iconName} />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDesc
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.descText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          <List data={selectedMeal.ingredients} />

          <Text style={styles.subTitle}>Steps</Text>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: height < 540 ? 150 : 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  descText: {
    color: "white",
  },
  subTitle: {
    color: "#e7a385",
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    // to center the list
    alignItems: "center",
  },
});
