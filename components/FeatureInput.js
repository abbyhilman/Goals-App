import { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Modal, Image} from 'react-native'

function FeatureInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addFeatureGoal() {
        enteredGoalText != "" && props.onAddFeature(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/target.png')} />
            <TextInput 
            style={styles.TextInput} 
            placeholder='Your Feature Goal!' 
            onChangeText={goalInputHandler}
            value={enteredGoalText} 
            />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
               </View>
               <View style={styles.button}>
                  <Button title='Add Goal' onPress={addFeatureGoal} color="#b180f0"/>
                </View>
            </View>
        </View>
      </Modal>
    )
}

export default FeatureInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 80,
        height: 80,
        margin: 20,
        tintColor: "#ffffff"
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})