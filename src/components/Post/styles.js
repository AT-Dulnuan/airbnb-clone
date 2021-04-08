import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    postImage: {
        width: '100%',
        aspectRatio: 3 / 2,
        borderRadius: 20,
        resizeMode: 'cover',
        marginBottom: 10
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '22%',
    },
    priceSize: {
        fontSize: 18
    },
    oldP: {
        color: '#7A7A7A',
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
    },
    newP: {
        fontWeight: 'bold'
    },
    info: {
        color: '#7A7A7A'
    },
    desc: {
        fontSize: 18,
        color: 'black',
        lineHeight: 26,
        marginVertical: 8
    },
    total: {
        textDecorationLine: 'underline',
        color: '#7A7A7A',
        lineHeight: 26
    }
})

export default styles
