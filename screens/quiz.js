import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect} from 'react';
import {useState} from 'react';

//adding shuffle (randomize) to set answers in random positions
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const TIME_FOR_QUESTION = 20;

const Quiz = ({navigation, route}) => {
  const {category} = route.params;
  const {checked} = route.params;
  const categoryId = category.id;
  const categoryDifficulty = category.difficulty;
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [timeLeft, setTimeLeft] = useState(TIME_FOR_QUESTION);

  useEffect(() => {
    let interval;
    if (timeLeft !== 0) {
      interval = setInterval(() => {
        setTimeLeft(seconds => seconds - 1);
      }, 1000);
    } else {
      if (ques === 9) {
        handleShowResult();
      } else {
        handleNextPress();
      }
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const getQuiz = async categoryId => {
    setisLoading(true);
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${checked}&type=multiple&encode=url3986`;
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    console.log(data.results[0]);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setisLoading(false);
  };

  useEffect(() => {
    getQuiz(categoryId);
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    handleIncrement();
    setTimeLeft(TIME_FOR_QUESTION);
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    console.log(options, 'before');
    shuffleArray(options);
    // console.log(options, "after")
    return options;
  };

  const handleSelectedOption = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 1);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      handleIncrement();
    }
    if (ques === 9) {
      handleShowResult();
    }
    setTimeLeft(TIME_FOR_QUESTION);
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.buttonText}>LOADING...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.questionCounter}>
              <View style={styles.timer}>
                <Text style={styles.timerText}>{timeLeft} s</Text>
              </View>

              <Text style={styles.question}>Question {count}</Text>
            </View>
            <View style={styles.top}>
              <Text style={styles.question}>
                {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[1])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[2])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[3])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}
              {ques !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}>
                  <Text style={styles.buttonText}> SKIP </Text>
                </TouchableOpacity>
              )}

              {ques == 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleShowResult}>
                  <Text style={styles.buttonText}>SHOW RESULTS</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
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
  bottom: {
    marginBottom: 12,
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#ffd6ff',
    padding: 16,
    paddingHorizontal: 50,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
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
    marginBottom: 30,
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
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  timer: {
    alignSelf: 'flex-end',
  },
  timerText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#4D4D4D',
  },
});
