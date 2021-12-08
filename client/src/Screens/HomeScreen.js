import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../Components/Home/searchBar';
import apiWorker from '../apiWorker';

export default function HomeScreen() {
  const currentUser = useSelector((state) => state.currentUser.value);
  useEffect(async () => {
    if (currentUser !== '') {
      const result = await apiWorker(`/users/${currentUser}`, { method: 'GET' });
      console.log(result);
    }
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <SearchBar />
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
