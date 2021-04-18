
 import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView, StatusBar, FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/home';
import Post from './src/components/Post';
import DestinationSearchScreen from './src/screens/destination search screen';
import GuestsScreen from './src/screens/Guests'
import Router from './src/navigation/router'
import HomeTabNavigator from './src/navigation/HomeTabNavigator'

import posts from './assets/data/feed';

const App = () => {

  return (
        <Router />
   );
};

export default App;
