import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: 'black'
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '%3',
        marginTop: 20,
        opacity: 1
    },

    textInputArea: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputLabel: {
        color: 'white',
        width: 280,
        marginBottom: 5,
        textAlign: 'left'
    },

    textInput: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 10
    },

    buttonArea: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#0F083B', //#352980
        borderRadius: 15,
        height: 50,
        width: 275,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    signUpText: {
        color: 'white',
        marginTop: 5,
        fontWeight: 'bold'
    },


});

export default styles;