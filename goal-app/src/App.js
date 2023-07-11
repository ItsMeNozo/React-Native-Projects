import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true); /*at first, the add goal button set modal is visible */
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }
    ]);

    // every time a goal is added, close the modal
    endAddGoalHandler();
  };

  function deleteGoalHander(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
    console.log('delete goal');
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ marginBottom: 10 }}>
          <Button
            title='Add New Goal'
            color="#9b5de5"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHander}
              />;
              // return (
              //   <View style={styles.goalItem}>
              //     <Text style={styles.goalText}>{itemData.item.text}</Text>
              //   </View>
              // );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, /* makes it takes all available space */
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 5
  },

});