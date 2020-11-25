import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState(new Array<{ id: string; value: string; }>());

  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals([
      ...courseGoals, {
        id: `${Math.random().toString()}${Math.random().toString()}${new Date().getTime()}`,
        value: enteredGoal
      }]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        // keyExtractor={({}, index) => `${index}`}
        data={courseGoals}
        renderItem={({ item: { value } }) => {
          return <GoalItem text={value} />
        }

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
