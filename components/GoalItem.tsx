import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props: GoalProps) => {

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('uguuuul')} onLongPress={() => props.onDeleteGoal(props.item.id)}>
      <View style={styles.listItem}>
        <Text>{props.item.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  }
});

interface GoalProps {
  item: {
    value: string;
    id: string;
  },
  onDeleteGoal: Function;
}

export default GoalItem;
