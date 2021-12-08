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
      <TextInput onChangeText={setInput} />
      <Button title="Valider" onPress={submitUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
