import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, temp, dateTextWrapper } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)} ${Math.round(max)}°`}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rosybrown',
    backgroundColor: 'moccasin',
    borderRadius: 15,
  },
  temp: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  date: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
});
