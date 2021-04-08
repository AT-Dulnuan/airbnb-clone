/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, StatusBar, FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/home';
import Post from './src/components/Post';

import posts from './assets/data/feed';

const App = () => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* <HomeScreen /> */}
      <FlatList
        data={posts} 
        renderItem={({item}) => <Post post={item} />}
      />
    </SafeAreaView>
  );
};

export default App;
