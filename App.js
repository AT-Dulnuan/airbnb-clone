/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/home';

const App: () => Node = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
