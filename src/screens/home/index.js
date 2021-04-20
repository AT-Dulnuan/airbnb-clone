import React from 'react'
import { View, Text, ImageBackground, Pressable, StatusBar } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = (props) => {

    const navigation = useNavigation()
    return (
        <View>
            <StatusBar barStyle={"light-content"} backgroundColor={"transparent"} translucent={true} />
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')}
            style={styles.image}>
            <Pressable style={styles.searchbar} onPress={() => navigation.navigate("Destintion Search")}>
            <Fontisto name="search" size={20} style={styles.searchIcon} color="#f15454" />
                <Text style={styles.searchText}>Where are you going?</Text>
            </Pressable>
            <Text style={styles.title}>Go Near</Text>
            <Pressable style={styles.button}>
                <Text style={styles.btnText}>Explore Nearby Stays</Text>
            </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen