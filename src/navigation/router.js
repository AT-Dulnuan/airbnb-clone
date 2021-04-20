import React from 'react'
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '../screens/home'
import DestinationSearchScreen from '../screens/destination search screen'
import GuestsScreen from '../screens/Guests'
import HomeTabNavigator from '../navigation/HomeTabNavigator'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home Tab"} component={HomeTabNavigator} options={{
                    headerShown: false
                }} />
                <Stack.Screen name={"Destintion Search"} component={DestinationSearchScreen} options={{
                    title: "Search Your Destination"
                }} />
                <Stack.Screen name={"Guest Screen"} component={GuestsScreen} options={{
                    title: "How many people?"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
