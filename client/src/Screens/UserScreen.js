import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import UserComponent from '../Components/User/UserComponent';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <UserComponent />
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
