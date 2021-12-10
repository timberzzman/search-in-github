import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from '../App/Features/userDataSlice';
import { add, init } from '../App/Features/searchHistorySlice';
import SearchBar from '../Components/Home/searchBar';
import apiWorker from '../apiWorker';
import HistoryList from '../Components/Home/historyList';

export default function HomeScreen({ navigation }) {
  const currentUser = useSelector((state) => state.currentUser.value);
  const dispatch = useDispatch();

  useEffect(async () => {
    let data = [];
    try {
      const jsonValue = await AsyncStorage.getItem('@searchHistory');
      // eslint-disable-next-line no-param-reassign
      data = jsonValue != null ? await JSON.parse(jsonValue) : [];
    } catch (e) {
      // eslint-disable-next-line no-param-reassign
    }
    dispatch(init(data));
  }, []);

  useEffect(async () => {
    if (currentUser !== '') {
      const result = await apiWorker(`/users/${currentUser}`);
      if (result && result.data) {
        dispatch(set(result.data));
        dispatch(add(currentUser));
        await navigation.navigate('User');
      }
    }
  }, [currentUser]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar style={styles.searchBar} />
      <HistoryList style={styles.history} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
  },
  searchBar: {
    flex: 1,
  },
  history: {
    flex: 5,
    padding: 10
  }
});
