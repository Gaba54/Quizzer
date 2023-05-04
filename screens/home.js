import React from 'react';
import {
    Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../components/title';

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
      <Image source={require('../components/logo.png')} 
      style= {styles.banner}
      resizeMode='contain'/>
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    banner:{  
    height: 107,
    width: 381,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
});
