import { View, Text, StyleSheet, Image,
  TextInput, TouchableOpacity, } from 'react-native'
import {component} from 'react'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from 'react';
import TheNutritionTracker from './screens/TheNutritionTracker';
import SignIn from './screens/SignIn';
import Height from './screens/Height';
import Weight from './screens/Weight';
import TargetWeight from './screens/TargetWeight';
import Gender from './screens/Gender';
import DOB from './screens/DOB';
import Dashboard from './screens/Dashboard';
import SplashScreen from './screens/SplashScreen';
import Register from './screens/signup';
import ForgotPassword from './screens/ForgotPassword';
import OTP from './screens/OTP';
import ResetPassword from './screens/ResetPassword';
import LiquidApp from './screens/LiquidApp';
import Feedback from './screens/Feedback';
import Home from './screens/Home';
import Breakfast from './screens/Breakfast';
import About from './screens/About';
// import Todo from './screens/Todo';



const Stack = createNativeStackNavigator();


export default function App() {


  return(
    <NavigationContainer>
    <Stack.Navigator InitialRouteName='SplashScreen'
    screenOptions={{ headerShown: false }}>
    <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'SplashScreen' }}
        />
    <Stack.Screen
          name="TheNutritionTracker"
          component={TheNutritionTracker}
          options={{ title: 'TheNutritionTracker' }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'SignIn' }}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{ title: 'Gender' }}
        />
         <Stack.Screen
          name="DOB"
          component={DOB}
          options={{ title: 'DOB' }}
        />
         <Stack.Screen
          name="Height"
          component={Height}
          options={{ title: 'Height' }}
        />
         <Stack.Screen
          name="Weight"
          component={Weight}
          options={{ title: 'Weight' }}
        />
         <Stack.Screen
          name="TargetWeight"
          component={TargetWeight}
          options={{ title: 'TargetWeight' }}
        />

        <Stack.Screen
          name="signup"
          component={Register}
          options={{ title: 'signup' }}
        />

        
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: 'ForgotPassword' }}
        />

        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ title: 'OTP' }}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ title: 'ResetPassword' }}
        />

      <Stack.Screen
          name="LiquidApp"
          component={LiquidApp}
          options={{ title: 'LiquidApp' }}
        />

        <Stack.Screen
        name="Breakfast"
          component={Breakfast}
          options={{ title: 'Breakfast' }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'About' }}
        />

        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ title: 'Feedback' }}
        /> 
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        {/* <Stack.Screen
          name="Todo"
          component={Todo}
          options={{ title: 'Todo' }}
        /> */}

        
        
       

        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

