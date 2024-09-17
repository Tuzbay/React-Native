import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Repo = ({item}) => {
  return (
    <View>
      <Text style={styles.repoName}>{item.name}</Text>
    </View>
  );
};

export default Repo;

const styles = StyleSheet.create({
  repoName: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
});
