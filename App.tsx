import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Button
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState(new Array<{ id: string; value: string; }>());
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, {
        id: `${Math.random().toString()}${Math.random().toString()}${new Date().getTime()}`,
        value: enteredGoal
      }]);

    setAddMode(false);
  }

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  }

  const cancelGoalAdditionHandler = () => {
    setAddMode(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title={'Add new Goal'} onPress={() => setAddMode(true)} />
      </View>
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancelGoal={cancelGoalAdditionHandler} />
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
  },
  button: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
  }
});
