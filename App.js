import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

const App = () => {
  return (
    <View style={styles.containter}>
      <Home />
      {/* <Quiz/> */}
      {/* <Result/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containter: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
