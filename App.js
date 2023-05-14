import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Hello Course' />
        <Button title="Tap Me" />
      </View>
      <View style= { styles.goalsContainer}>
        <Text >List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex:1,
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
    flex:6
  }
});
