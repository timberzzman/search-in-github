import * as React from 'react';
import {
  View, FlatList, Text, StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../App/Features/currentUserSlice';

export default function HistoryList() {
  const searchHistory = useSelector((state) => state.searchHistory.value);
  const dispatch = useDispatch();

  const submitUser = (username) => {
    dispatch(set(username));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text} onPress={() => submitUser(item)}>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={searchHistory}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 20,
  },
  // eslint-disable-next-line react-native/no-color-literals
  textContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  }
});
