import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    navbar_view: {
        width: '100%',
        height: '10%',
        maxHeight: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    navbar_text: {
        fontSize: 25,
        fontWeight: 900,
        marginTop: '5%'
    },
    flatlist: {
        marginTop: 15,
        paddingBottom: 100
    },
    data_view:{
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
    },
    char_icon: {
        width: 50,
        height: 50
    },
    char_info: {
        width: '86%'
    }
});

export default styles;