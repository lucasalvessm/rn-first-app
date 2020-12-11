import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props: Props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const handleInputTextChanges = (text: string) => {
        setEnteredGoal(text);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View
                style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal" style={styles.input}
                    onChangeText={handleInputTextChanges}
                    value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add'
                            onPress={addGoalHandler}
                        ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            color='red'

                            onPress={() => props.onCancelGoal()}
                        ></Button>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
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

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    button: {
        width: 200,
        marginTop: 10
    }
});

interface Goal {
    id: string;
    value: string;
}

interface Props {
    onAddGoal: Function;
    onCancelGoal: Function;
    visible: boolean;
}

export default GoalInput;