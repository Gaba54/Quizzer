import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text  style={styles.question} >Categories available:</Text>
      </View>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('CategoryDescription')}>
        <Text style={styles.option}>Niebieski</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('CategoryDescription')}>
        <Text style={styles.option}>Zielony</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('CategoryDescription')}>
        <Text style={styles.option}>Czerwony</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  optionButton: {
    width: '100%',
    backgroundColor: '#a2d2ff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginTop:40,
  },
  question: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4D4D4D',
    alignItems: 'center',
  },
  top: {
    marginVertical: 16,
    width: '100%',
    backgroundColor: '#ffd6ff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 40,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4D4D4D',
  },
});
