import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Categories = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Categories</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CategoriesDescription')}>
        <Text>Wybierz kategorie</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
