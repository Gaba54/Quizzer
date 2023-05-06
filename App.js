import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyStack from './navigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containter: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
