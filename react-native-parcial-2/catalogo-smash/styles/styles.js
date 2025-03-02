import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
        backgroundColor: '#2a2a2a',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    navbar_text: {
        fontSize: 25,
        fontWeight: 900,
        marginTop: '5%',
        color: '#fcfcfc'
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
        height: 90,
    },
    char_icon: {
        width: 60,
        height: 60,
        margin: 5
    },
    char_info: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        borderRadius: 5
    },
    char_name: {
        fontSize: 30,
        fontWeight: 800,
        marginLeft: 10,
        color: '#fff'
    },
    char_series_view: {
        flex: 1,
        paddingRight: 10
    },
    from_text: {
        textAlign: 'right',
        fontSize: 10,
        fontWeight: 300
    },
    char_series_text: {
        textAlign: 'right',
        fontWeight: 600,
        fontSize: 15,
        fontStyle: 'italic'
    }
});

export default styles;