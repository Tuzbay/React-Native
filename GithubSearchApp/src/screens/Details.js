import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import Repo from '../components/Repo';

const Details = ({dataUser, dataRepos}) => {
  return (
    <View style={styles.details__container}>
      <Image
        style={styles.details__image}
        source={{uri: dataUser?.avatar_url}}
      />
      <View style={styles.upperSide}>
        <Text style={styles.name}>{dataUser?.name}</Text>
        <Text style={styles.loc}>{dataUser?.location}</Text>
        <Text style={styles.date}>
          {dataUser?.updated_at.slice(0, 10).split('-').reverse().join('.')}
        </Text>
        <Text style={styles.bio}>{dataUser?.bio}</Text>
        <View style={styles.infos}>
          <Text style={styles.infosText}>Followers: {dataUser?.followers}</Text>
          <Text style={styles.infosText}>Following: {dataUser?.following}</Text>
          <Text style={styles.infosText}>Repos: {dataUser?.public_repos}</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={dataRepos}
          renderItem={({item}) => <Repo item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  details__container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  details__image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  infos: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 20,
  },
  infosText: {
    fontSize: 16,
  },
  bio: {
    textAlign: 'center',
    fontSize: 16,
    width: 300,
    marginVertical: 12,
  },
  loc: {
    textAlign: 'center',
    fontSize: 16,
  },
  date: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 6,
  },
});
