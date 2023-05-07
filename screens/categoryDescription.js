import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CategoryDescription = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>Category description:</Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.question}>Opis kategoriedsfnjsdfbshbhfsdjb</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.buttonText}>BACK TO CATEGORIES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryDescription;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: '100%',
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
  button: {
    backgroundColor: '#a2d2ff',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4D4D4D',
  },
  options: {
    flex: 1,
    marginVertical: 16,
  },
});
