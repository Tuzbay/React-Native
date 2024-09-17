import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';

import Home from './screens/Home';
import Details from './screens/Details';

const App = () => {
  const [search, setSearch] = useState('Tuzbay'); // * User name store within this state.
  const [dataUser, setDataUser] = useState(null); // * User's data store within this state.
  const [dataRepos, setDataRepos] = useState(null); // * User's Repository data store within this state.

  useEffect(() => {
    // * Get user's data with below function.
    async function getGithupUsers() {
      let users = `https://api.github.com/users/${search}`;
      const {data} = await axios.get(users);
      setDataUser(data);
    }
    getGithupUsers();
  }, [search]);

  useEffect(() => {
    // * Get user's repository data with below function.
    async function getGithupUsersRepo() {
      let repos = `https://api.github.com/users/${search}/repos`;
      const {data} = await axios.get(repos);
      // * The received data is sorted according to their dates, and the latest 5 repositories are obtained with below function.
      setDataRepos(
        data
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 5),
      );
    }
    getGithupUsersRepo();
  }, [search]);

  return (
    <View style={styles.container}>
      {/* <Home setSearch={setSearch} /> */}
      <Details dataUser={dataUser} dataRepos={dataRepos} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
