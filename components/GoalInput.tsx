import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props: Props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const handleInputTextChanges = (text: string) => {
        setEnteredGoal(text);
    }

    return (
        <View
            style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal" style={styles.input}
                onChangeText={handleInputTextChanges}
                value={enteredGoal}
            />
            <Button
                title='Add'
                onPress={() => props.onAddGoal(enteredGoal)}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        padding: 5,
        margin: 5
    },
});

interface Goal {
    id: string;
    value: string;
}

interface Props {
    onAddGoal: Function;
}

export default GoalInput;