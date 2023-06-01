import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';

const CategoryDescription = ({navigation, route}) => {
  const {category} = route.params;
  const [checked, setChecked] = React.useState('easy');
  const difficulty = [{value: 'easy'}, {value: 'medium'}, {value: 'hard'}];

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>{category.name}</Text>
      </View>
      <View style={styles.top2}>
        <Text style={styles.difficultyText}>Difficulty level:</Text>
        {difficulty.map(option => (
          <View style={styles.radioButtonContainer} key={option.value}>
            <RadioButton
              value={option.value}
              status={checked === option.value ? 'checked' : 'unchecked'}
              onPress={() => setChecked(option.value)}
              testID={`radioButton-${option.value}`}
            />
            <Text style={styles.radioButtonText}>{option.value}</Text>
          </View>
        ))}
      </View>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', {category, checked})}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.buttonText}>BACK TO LIST</Text>
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
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4D4D4D',
    alignItems: 'center',
  },
  top2: {
    marginVertical: 16,
    width: '100%',
    backgroundColor: '#ffd6ff',
    padding: 20,
    borderRadius: 16,
    marginTop: 40,
  },
  difficultyText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4D4D4D',
    marginBottom: 10,
  },
});
