import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App'; // For Type Checking

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>; // For Type Checking

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.push('Details', {productId: '86'})}

        // Push koyarsan geri dön butonu yukarıda çıkar. Replace koyarsan çıkmaz.
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000',
  },
});
