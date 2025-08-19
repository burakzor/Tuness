import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import LogInScreen from "./Screens/LogInScreen/LogInScreen";
import SignUpScreen from "./Screens/SignUpScreen/SignUpScreen";



export default function App() {
  return (
      <SignUpScreen/>
  );
}

