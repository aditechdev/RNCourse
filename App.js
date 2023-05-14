import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enterGoalText, setGoalText] = useState('');
  const [courseGoalsList, SetCourseGoalList] = useState([]);
  function goalInputHandler(enterterdText) {
    // console.log(enterterdText);
    setGoalText(enterterdText);
  }

  function addGoalHandler() {
    // console.log("Here is enterGoalText $enterGoalText");
    // console.log(enterGoalText);
    SetCourseGoalList(currentCourseGoal => [...currentCourseGoal, enterGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Hello Course'
          onChangeText={goalInputHandler}
        />
        <Button title="Tap Me" onPress={
          addGoalHandler
        } />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoalsList.map((goal) => 
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        )}
        {/* <Text >List of Goals</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    paddingBottom: 15,

    borderWidth: 1, color: '#cccccc', width: '70%', marginRight: 8, padding: 8
  },
  dummyText: {
    margin: 16, padding: 16, borderWidth: 2, borderColor: "#00ff00"
  },
  goalsContainer: {
    flex: 6
  },
  goalItem: {
    padding:8,
    margin: 8, borderRadius: 6, backgroundColor: "#5e0acc",
    color:"white"

  },
  goalText: {
    color:"white"

  }

});
