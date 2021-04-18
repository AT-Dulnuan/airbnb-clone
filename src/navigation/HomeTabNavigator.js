import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import HomeScreen from '../screens/home'

const tab = createBottomTabNavigator()
const HomeTabNavigator = () => {
    return (
        <tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let icon;

                if (route.name === "Home") {
                    icon = "search"
                }

                return <Fontisto name={icon} size={18} color={color} />
            },
            tabBarActiveTintColor: '#ff5a5f',
            tabBarInactiveTintColor: '#808080',
            tabBarLabelStyle: {
                paddingBottom: 10,
            },
            tabBarStyle: {
                height: '7%'
            }
        })}
        >
            <tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false
            }} />
        </tab.Navigator>
    )
}

export default HomeTabNavigator
