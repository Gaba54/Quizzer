import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

const TextBox = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Your name"
      />
      </View>
    </SafeAreaView>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  input: {
    fontSize:18,
    color: '#4D4D4D',
    fontFamily: 'Open Sans',
    alignItems:'flex-start',
    backgroundColor: 'white',
    paddingLeft:10,
    borderRadius: 8,
  },
  container:{
    paddingTop: 4,
    paddingHorizontal: 4,
    paddingBottom: 4,
    backgroundColor: '#a2d2ff',
    borderRadius: 10
  }
});

