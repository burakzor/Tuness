import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '%3',
        opacity: 0
    },

    logoImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },

    logoText: {
        fontSize: 36,
        fontWeight: "bold",
        color: 'white',
    },

    logoBelowText: {
        fontSize: 12,
        fontWeight: "bold",
        color: 'white',
    },

    buttonsArea: {
        opacity: 0,
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#0F083B',
        borderRadius: 15,
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24,
    },

    buttonText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    }

});

export default styles;