import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    guest: {
        paddingVertical: 30,
        borderColor: '#E6E6E6',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        flexDirection: 'column'
    },
    title: {
        fontSize: 18
    },
    subtitle: {
        color: '#808080',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    count: {
        marginHorizontal: 20,
        fontSize: 18
    },
    button: {
        borderColor: '#808080',
        borderRadius: 100,
        borderWidth: 2,
        padding: 6
    },
    disabled: {
        opacity: 0.3
    }
})

export default styles