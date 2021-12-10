import * as React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

export default function UserComponent() {
  const userData = useSelector((state) => state.userData.value);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.itemCenter }}>
        <Image style={styles.image} source={{ uri: userData.avatar_url }} />
        <Text style={styles.userName}>{userData.login}</Text>
        <Text style={styles.bio}>{userData.bio}</Text>
      </View>
      <Text style={styles.dataTitle}>Location</Text>
      <Text style={styles.dataValue}>{userData.location}</Text>
      <Text style={styles.dataTitle}>Company</Text>
      <Text style={styles.dataValue}>{userData.company}</Text>
      <Text style={styles.dataTitle}>Followers</Text>
      <View style={styles.clickableData}>
        <Text style={styles.dataValue}>{userData.followers}</Text>
        <Text>Voir</Text>
      </View>
      <Text style={styles.dataTitle}>Following</Text>
      <View style={styles.clickableData}>
        <Text style={styles.dataValue}>{userData.following}</Text>
        <Text>Voir</Text>
      </View>
      <Text style={styles.dataTitle}>Repositories</Text>
      <View style={styles.clickableData}>
        <Text style={styles.dataValue}>{userData.public_repos}</Text>
        <Text>Voir</Text>
      </View>
      <Text style={styles.dataTitle}>Gists</Text>
      <View style={styles.clickableData}>
        <Text style={styles.dataValue}>{userData.public_gists}</Text>
        <Text>Voir</Text>
      </View>
      <Text style={styles.dataTitle}>Crée le</Text>
      <Text style={styles.dataValue}>{userData.created_at}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  // eslint-disable-next-line react-native/no-color-literals
  bio: {
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 10,
  },
  itemCenter: {
    alignItems: 'center',
  },
  dataTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  dataValue: {
    fontSize: 15,
  },
  clickableData: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
