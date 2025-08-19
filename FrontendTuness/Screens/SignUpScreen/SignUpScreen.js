import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image, TouchableHighlight, TextInput, ScrollView,

} from 'react-native';
import SignUpScreenStyle from "./SignUpScreenStyle";
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import WelcomeScreenStyle from "../WelcomeScreen/WelcomeScreenStyle";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import LogInScreenStyle from "../LogInScreen/LogInScreenStyle";


const SignUpScreen= () =>  {

    return(
        <LinearGradient colors={['#0F083B', '#5416B5']} style={StyleSheet.absoluteFillObject}>
            <SafeAreaView style={LogInScreenStyle.container}>
                <ScrollView>
                    <View style={LogInScreenStyle.logo}>
                        <Image
                            source={ require('../../assets/splash-icon.png') }
                            style={WelcomeScreenStyle.logoImage}
                        />
                        <Text style={WelcomeScreenStyle.logoText}>Tuness</Text>
                    </View>

                    <View style={LogInScreenStyle.textInputArea}>
                        <Text style={LogInScreenStyle.textInputLabel}>Mail</Text>
                        <TextInput style={LogInScreenStyle.textInput}></TextInput>

                        <Text style={LogInScreenStyle.textInputLabel}>Username</Text>
                        <TextInput style={LogInScreenStyle.textInput}></TextInput>

                        <Text style={LogInScreenStyle.textInputLabel}>Password</Text>
                        <TextInput style={LogInScreenStyle.textInput}></TextInput>

                        <Text style={LogInScreenStyle.textInputLabel}>Password Again</Text>
                        <TextInput style={LogInScreenStyle.textInput}></TextInput>
                    </View>

                    <View style={LogInScreenStyle.buttonArea}>

                        <TouchableOpacity style={LogInScreenStyle.button}>
                            <Text style={LogInScreenStyle.buttonText}>Sign Up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={LogInScreenStyle.button}>
                            <Text style={LogInScreenStyle.buttonText}>Continue With Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={LogInScreenStyle.button}>
                            <Text style={LogInScreenStyle.buttonText}>Continue With Apple</Text>
                        </TouchableOpacity>

                        <Text style={{color: 'black', marginTop: 5}}>You already have an account?</Text>

                        <TouchableOpacity>
                            <Text style={LogInScreenStyle.signUpText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
        );
};

export default SignUpScreen;