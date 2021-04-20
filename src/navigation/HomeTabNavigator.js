import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/home'

const tab = createBottomTabNavigator()
const HomeTabNavigator = () => {
    return (
        <tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {

                switch (route.name) {
                    case "Home":
                        return <Text><Fontisto name={"search"} size={24} color={color} /></Text>
                        break;
                    case "Saved":
                        return <Text><Entypo name={"heart-outlined"} size={30} color={color} /></Text>
                        break;
                    case "Trips":
                        return <Text><FontAwesome5 name={"airbnb"} size={24} color={color} /></Text>
                        break;
                    case "Inbox":
                        return <Text><Ionicons name={"chatbox-outline"} size={24} color={color} /></Text>
                        break;
                    case "Profile":
                        return <Text><EvilIcons name={"user"} size={24} color={color} /></Text>
                        break;
                    default:
                        break;
                }

            },
            tabBarActiveTintColor: '#ff5a5f',
            tabBarInactiveTintColor: '#808080',
            tabBarItemStyle: {
                paddingVertical: 5,
            },
            tabBarStyle: {
                height: 60
            },
            headerShown: false
        })}
        >
            <tab.Screen name="Home" component={HomeScreen} />
            <tab.Screen name="Saved" component={HomeScreen} />
            <tab.Screen name="Trips" component={HomeScreen} />
            <tab.Screen name="Inbox" component={HomeScreen} />
            <tab.Screen name="Profile" component={HomeScreen} />
        </tab.Navigator>
    )
}

export default HomeTabNavigator
