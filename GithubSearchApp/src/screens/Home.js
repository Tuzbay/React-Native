import {StyleSheet, TextInput, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';

const Search = ({setSearch}) => {
  const [user, onChangeUser] = useState('');

  const handleSubmit = () => {
    setSearch(user);
    onChangeUser('');
  };

  const {
    search__container,
    search__inputArea,
    search__icon,
    search__top,
    search__bottom,
  } = styles;

  return (
    <View style={search__container}>
      <View style={search__top}>
        <AntDesign name="github" size={100} color="white" />
      </View>
      <View style={search__bottom}>
        <AntDesign
          style={search__icon}
          name="search1"
          size={24}
          color="white"
        />

        <TextInput
          style={search__inputArea}
          placeholder="Enter the Github User"
          value={user}
          onChangeText={onChangeUser}
          onSubmitEditing={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search__container: {
    flex: 1,
    alignItems: 'center',
  },
  search__inputArea: {
    borderWidth: 1,
    borderColor: 'white',
    position: 'relative',
    paddingLeft: 51,
    paddingRight: 10,
    fontSize: 20,
    borderRadius: 8,
    paddingVertical: 20,
    width: 260,
  },
  search__icon: {
    position: 'absolute',
    left: 14,
    top: 23,
  },
  search__top: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  search__bottom: {
    flex: 2,
  },
});
