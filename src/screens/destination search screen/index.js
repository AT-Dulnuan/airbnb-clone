import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, StatusBar, Pressable } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'

import SearchResult from '../../components/SearchResult'

import search from '../../../assets/data/search'

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('')
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                placeholderTextColor={'#717171'}
                value={inputText}
                onChangeText={setInputText}
                autoFocus={true}
            />

            <FlatList
                data={search}
                renderItem={({item}) => <Pressable onPress={() => navigation.navigate("Guest Screen")}><SearchResult data={item} /></Pressable>}
            />
        </View>
    )
}

export default DestinationSearchScreen

