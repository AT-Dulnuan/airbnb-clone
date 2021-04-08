/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/home';
import Post from './src/components/Post';


const App = () => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <StatusBar barStyle="light-content" />
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
};

export default App;
