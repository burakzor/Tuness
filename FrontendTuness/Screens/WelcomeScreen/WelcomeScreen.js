import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image, TouchableHighlight,

} from 'react-native';
import WelcomeScreenStyle from "./WelcomeScreenStyle";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';


const WelcomeScreen = () =>  {

    const logoOpacity = useRef(new Animated.Value(0)).current;
    const buttonOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Sequence of animations
        Animated.sequence([
            // 1. Logo emerges (fade)
            Animated.parallel([
                Animated.timing(logoOpacity, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ]),

            Animated.parallel([
                Animated.timing(buttonOpacity, {
                    toValue: 1,
                    duration: 3500,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }, []);

    return(
        <LinearGradient colors={['#0F083B', '#5416B5']} style={StyleSheet.absoluteFillObject}>
            <SafeAreaView style={WelcomeScreenStyle.container}>
                <Animated.View
                    style={[
                        WelcomeScreenStyle.logo,
                        {
                            opacity: logoOpacity,
                        }
                    ]}
                >
                    <Image
                        source={ require('../../assets/splash-icon.png') }
                        style={WelcomeScreenStyle.logoImage}
                    />
                    <Text style={WelcomeScreenStyle.logoText}>Tuness</Text>
                    <Text style={WelcomeScreenStyle.logoBelowText}>Listen, Like, Share!</Text>
                </Animated.View>


                <Animated.View style={[
                    WelcomeScreenStyle.buttonsArea,
                    {
                        opacity: buttonOpacity,
                    }
                ]}>
                    <TouchableOpacity style={WelcomeScreenStyle.button}>
                        <Text style={WelcomeScreenStyle.buttonText}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={WelcomeScreenStyle.button}>
                        <Text style={WelcomeScreenStyle.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>




            </SafeAreaView>
        </LinearGradient>
    );
};

export default WelcomeScreen;