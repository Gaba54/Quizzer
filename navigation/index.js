import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Categories from '../screens/categories';
import CategoryDescription from '../screens/categoryDescription';
import Quiz from '../screens/quiz';
import Result from '../screens/result';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Categories" component={Categories} options={{headerShown:false}}/>
      <Stack.Screen name="CategoryDescription" component={CategoryDescription} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;