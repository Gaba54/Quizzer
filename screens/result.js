import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  console.log(score);

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Your score:</Text>
          </View>
          <View style={styles.top}>
            <Text style={styles.scoreText}>{score}/10</Text>
            {score < 5 && (
              <Image
                source={require('../components/looser.jpg')}
                style={styles.banner}
                resizeMode="contain"
                testID="looser-image"
              />
            )}
            {score >= 5 && (
              <Image
                source={require('../components/winner.jpg')}
                style={styles.banner}
                resizeMode="contain"
                testID="winner-image"
              />
            )}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.buttonText}>PLAY AGAIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>GO TO HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  banner: {
    height: 300,
    width: 300,
  },
  top: {
    marginVertical: 16,
    width: '100%',
    backgroundColor: '#ffd6ff',
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4D4D4D',
  },
  button: {
    backgroundColor: '#a2d2ff',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 25,
    maxWidth: '50%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4D4D4D',
  },
  resultContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4D4D4D',
    alignItems: 'center',
    marginBottom: 14,
  },
});
