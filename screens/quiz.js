import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect} from 'react';
import {useState} from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.questionCounter}>
            <Text style={styles.question}>Pytanie X</Text>
          </View>
          <View style={styles.top}>
            <Text style={styles.question}>
              Jakiego koloru jest czerwony maluch?
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Niebieski</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Zielony</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Czerwony</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Result')}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: '100%',
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
  options: {
    marginVertical: 16,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ffd6ff',
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
  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Open Sans',
    alignItems: 'center',
    color: '#4D4D4D',
  },
  question: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4D4D4D',
    alignItems: 'center',
  },
  questionCounter: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#4D4D4D',
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4D4D4D',
  },
  options: {
    flex: 1,
    marginVertical: 16,
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#a2d2ff',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
