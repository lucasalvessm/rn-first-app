import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props: GoalProps) => {

  return (
    <View style={styles.listItem}>
      <Text>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 5
  }
});

interface GoalProps {
  text: string;
}

export default GoalItem;
