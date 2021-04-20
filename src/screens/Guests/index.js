import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles'

const GuestsScreen = () => {

    const [adultCount, setAdultCount] = useState(0)
    const [childCount, setChildCount] = useState(0)
    const [infantCount, setInfantCount] = useState(0)

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.guest}>
                    <View style={styles.text}>
                        <Text style={styles.title}>Adults</Text>
                        <Text style={styles.subtitle}>Ages 13 or above</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable 
                            onPress={() => setAdultCount(adultCount-1)}
                            style={adultCount == 0 ? [styles.button, styles.disabled] : styles.button}
                            disabled={adultCount > 0 ? false : true}
                        >
                            <AntDesign name="minus" size={18} color="#808080" />
                        </Pressable>
                        <Text style={styles.count}>{adultCount}</Text>
                        <Pressable
                            onPress={() => setAdultCount(adultCount+1)}
                            style={styles.button}
                        >
                            <AntDesign name="plus" size={18} color="#808080" />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.guest}>
                    <View style={styles.text}>
                        <Text style={styles.title}>Children</Text>
                        <Text style={styles.subtitle}>Ages 2-12</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable 
                            onPress={() => setChildCount(childCount-1)}
                            style={childCount == 0 ? [styles.button, styles.disabled] : styles.button}
                            disabled={childCount > 0 ? false : true}
                        >
                            <AntDesign name="minus" size={18} color="#808080" />
                        </Pressable>
                        <Text style={styles.count}>{childCount}</Text>
                        <Pressable
                            onPress={() => setChildCount(childCount+1)}
                            style={styles.button}
                        >
                            <AntDesign name="plus" size={18} color="#808080" />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.guest}>
                    <View style={styles.text}>
                        <Text style={styles.title}>Infants</Text>
                        <Text style={styles.subtitle}>Ages 2 or below</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable 
                            onPress={() => setInfantCount(infantCount-1)}
                            style={infantCount == 0 ? [styles.button, styles.disabled] : styles.button}
                            disabled={infantCount > 0 ? false : true}
                        >
                            <AntDesign name="minus" size={18} color="#808080" />
                        </Pressable>
                        <Text style={styles.count}>{infantCount}</Text>
                        <Pressable
                            onPress={() => setInfantCount(infantCount+1)}
                            style={styles.button}
                        >
                            <AntDesign name="plus" size={18} color="#808080" />
                        </Pressable>
                    </View>
                </View>
            </View>

            <Pressable style={styles.searchBtn}><Text style={styles.searchTxt}>Search</Text></Pressable>
        </View>
    )
}

export default GuestsScreen
