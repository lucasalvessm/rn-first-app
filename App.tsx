import React, { useState } from 'react';
import {
  FlatList, StyleSheet,

  View
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState(new Array<{ id: string; value: string; }>());

  const addGoalHandler = (enteredGoal: string) =>
    setCourseGoals(currentGoals => [
      ...currentGoals, {
        id: `${Math.random().toString()}${Math.random().toString()}${new Date().getTime()}`,
        value: enteredGoal
      }]);

  const removeGoalHandler = (goalId: string) =>
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        // keyExtractor={({}, index) => `${index}`}
        data={courseGoals}
        renderItem={({ item }) => <GoalItem item={item} onDeleteGoal={removeGoalHandler} />

        }>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 50
  }
});
