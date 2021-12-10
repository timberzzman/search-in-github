import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View, StyleSheet, TextInput, Button
} from 'react-native';
import { set } from '../../App/Features/currentUserSlice';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const submitUser = () => {
    dispatch(set(input));
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setInput} />
      <Button style={styles.button} title="Valider" onPress={submitUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  // eslint-disable-next-line react-native/no-color-literals
  input: {
    height: 35,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginRight: 5
  },
  button: {
    height: 35,
    width: '20%'
  }
});
