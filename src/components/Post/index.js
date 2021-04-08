import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://www.thenationalnews.com/image/policy:1.927988:1571917424/bz26-Blueground-Dubai-apartment.jpg?f=16x9&w=1200&$p$f$w=07cb3db'}} 
            style={styles.postImage}/>
            <Text style={styles.info}>1 Bed • 1 Bedroom </Text>
            <Text style={styles.desc} numberOfLines={2}>Entire Flat • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <View style={styles.price}>
                <Text style={[styles.oldP, styles.priceSize]}>$43</Text>
                <Text style={[styles.newP, styles.priceSize]}>  $36</Text>
                <Text style={styles.priceSize}>/ night</Text>
            </View>
            <Text style={styles.total}>$247 total</Text>
        </View>
    )
}

export default Post
