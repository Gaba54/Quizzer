import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.containter}>
      <Text>this is quizzer</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containter: {
    paddingTop: 40,
  },
});
