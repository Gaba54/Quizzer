import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextBox from '../components/textbox';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../components/logo.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomcontainer}>
        <Text style={styles.text}>
          Enter your name to play with quizzes!
        </Text>
      </View>
      <View style={styles.containerfles}>
      <TextBox style={styles.containterTextbox} />
      
        <TouchableOpacity
          onPress={() => navigation.navigate('Categories')}
          style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    marginTop:150,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#ffd6ff',
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#a2d2ff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginTop:40,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4D4D4D',
  },
  text: {
    marginTop:30,
    fontSize: 20,
    fontWeight:400,
    fontFamily: 'Open Sans',
    alignItems: 'center',
    color: '#4D4D4D',
  },
  bottomcontainer: {
    flex: 2,
  },
  containerfles:{
    flex:8,
  },
  containterTextbox:{
    marginBottom:20
  },
});
