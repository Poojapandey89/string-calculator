/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {add} from './stringCalculator';

function App(): React.JSX.Element {
  const [text, onChangeText] = useState();
  const [result, setResult] = useState();

  const onCalculate = () => {
    let result = add(text);
    setResult(result);
  };
  const onClear = () => {
    onChangeText('');
    setResult('');
  };

  return (

      <View style={styles.container}>
        <Text style={styles.result}>Result : {result} </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          multiline
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={onCalculate}
        >
          <Text style={styles.buttonTitleStyle}>Calculate</Text>
        </TouchableOpacity>
      </View>

  );
}

const styles = StyleSheet.create({
  input: {
    height: 90,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    height: 45,
    margin: 12,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitleStyle: {
    fontSize: 18,
    color: 'white',
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
