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

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState(new Array<{
    id: string;
    value: string;
  }>());

  const handleInputTextChanges = (text: string) => {
    setEnteredGoal(text);
  }

  const addGoalHandler = () => {
    setCourseGoals([
      ...courseGoals, {
        id: `${Math.random().toString()}${Math.random().toString()}${new Date().getTime()}`,
        value: enteredGoal
      }]);
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal" style={styles.input}
          onChangeText={handleInputTextChanges}
          value={enteredGoal}
        />
        <StatusBar style="auto" />
        <Button title='Add' onPress={addGoalHandler}></Button>
      </View>
      <FlatList
      // keyExtractor={({}, index) => `${index}`}
        data={courseGoals}
        renderItem={({ item: { value } }) => {
          return <View style={styles.listItem}>
            <Text>{value}</Text>
          </View>
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
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    padding: 5,
    margin: 5
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 5
  }
});
