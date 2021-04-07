import {StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    title: {
        color: "#ffffff",
        fontSize: 100,
        fontWeight: "bold",
        width: "70%",
        padding: 20
    },
    button: {
        backgroundColor: "#ffffff",
        padding: 12,
        width: '45%',
        alignItems: 'center',
        marginLeft: 20,
        borderRadius: 10    
    },
    btnText: {
        fontSize: 16
    },
    searchbar: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        padding: 14,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 30
    },
    searchText: {
        fontSize: 20,
        padding: 6
    },
    searchIcon: {
        padding: 4
    }
})

export default styles;