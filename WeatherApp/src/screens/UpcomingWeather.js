import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image, header } = styles;

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle="dark-content" backgroundColor="lightslategrey" />
      <ImageBackground
        source={require('../../assets/upcoming.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
