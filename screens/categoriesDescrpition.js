import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CategoriesDescription = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>CategoriesDescription</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text>Wybierz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesDescription;

const styles = StyleSheet.create({});
