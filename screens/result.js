import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const Result = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>ResultTest</Text>
      </View>
      <View>
        <Text>Result</Text>
      </View>
      <TouchableOpacity>
        <Text>Zagraj ponownie</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Text>Wróć do menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#ffd6ff',
    height: '100%',
  },
  banner: {
    height:300,
    width:300,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
});
