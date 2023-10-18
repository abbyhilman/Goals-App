import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import FeatureItem from './components/FeatureItem';
import FeatureInput from './components/FeatureInput';

export default function App() {
  const [modalVisible, setModalIsVisible] = useState(false);
  const [featureGoal, setFeatureGoal] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setFeatureGoal(currentFeatureGoals => [...currentFeatureGoals, {text: enteredGoalText, id: Math.random().toString()}])
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setFeatureGoal(currentFeatureGoals => {
      return currentFeatureGoals.filter((feature) => feature.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      <FeatureInput 
        onAddFeature={addGoalHandler} 
        visible={modalVisible}
        onCancel={endAddGoalHandler} />
      <View style={styles.featureContainer}>
        <FlatList data={featureGoal} renderItem={(itemData) => {
          return <FeatureItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  featureContainer: {
    flex: 5
  },
 
});
