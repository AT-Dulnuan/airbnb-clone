import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'; 

const SearchResult = (props) => {

    const data = props.data;

    return (
        <View>
            <View style={styles.result}>
                <FontAwesome5 name="map-marker-alt" size={18} style={styles.mapIcon} color="#f15454" />
                <Text style={styles.placeText}>{data.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapIcon: {
        color: '#121212',
        backgroundColor: '#E6E6E6',
        padding: 20,
        borderRadius: 10,
        marginRight: 14
    },
    placeText: {
        fontSize: 18
    },
    result: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1
    }
})

export default SearchResult
