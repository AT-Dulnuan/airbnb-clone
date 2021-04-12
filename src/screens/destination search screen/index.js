import React, {useState} from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import styles from './styles'

import SearchResult from '../../components/SearchResult'

import search from '../../../assets/data/search'

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                placeholderTextColor={'#717171'}
                value={inputText}
                onChangeText={setInputText}
            />

            <FlatList
                data={search}
                renderItem={({item}) => <SearchResult data={item} />}
            />
        </View>
    )
}

export default DestinationSearchScreen

