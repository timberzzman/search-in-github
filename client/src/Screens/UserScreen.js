import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text>User screen</Text>
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
