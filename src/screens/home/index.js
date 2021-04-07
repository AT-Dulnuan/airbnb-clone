import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = (props) => {
    return (
        <View>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')}
            style={styles.image}>
            <Pressable style={styles.searchbar}>
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