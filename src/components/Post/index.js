import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {

    const post = props.post

    return (
        <View style={styles.container}>
            <Image source={{uri: post.image}} 
            style={styles.postImage}/>
            <Text style={styles.info}>{post.bed} Bed • {post.bedroom} Bedroom </Text>
            <Text style={styles.desc} numberOfLines={2}>{post.type} • {post.title}</Text>
            <View style={styles.price}>
                <Text style={[styles.oldP, styles.priceSize]}>${post.oldPrice}</Text>
                <Text style={[styles.newP, styles.priceSize]}>  ${post.newPrice}</Text>
                <Text style={styles.priceSize}>/ night</Text>
            </View>
            <Text style={styles.total}>${post.totalPrice} total</Text>
        </View>
    )
}

export default Post
