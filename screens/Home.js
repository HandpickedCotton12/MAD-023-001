import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
  Linking,
  Pressable,
} from 'react-native';
import { Banner } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';
import About from './About';
import Inputs from './BMI';
import Dashboard from './Dashboard';
import Feedback from './Feedback';
import LiquidApp from './LiquidApp';
import Breakfast from './Breakfast';
import Todo from './Todo';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DashboardScreen = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown:false }}>
     <Stack.Screen
        name="Dashboard" component={Dashboard}
      /> 
      <Stack.Screen
        name="LiquidApp" component={LiquidApp}
      />
      <Stack.Screen
        name="Breakfast" component={Breakfast}
      />
      
     
    </Stack.Navigator>
  )
};


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={DashboardScreen} independent={true}
        options={{ tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={'brown'} size={size} />), }}/>

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="contact" color={'brown'} size={size} />),
        }}
      />
      
      <Tab.Screen name="About" component={About} 
        options={{ tabBarIcon: ({ color, size }) => (
        <Ionicons name="laptop" color={'brown'} size={size} />),}}
      />
      <Tab.Screen name="BMI" component={Inputs} 
         options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="calculator" color={'brown'} size={size} />),}}
      />
      
      <Tab.Screen name='Todo List' component={Todo}
        options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="list-box" color={'brown'} size={size} /> ),}}
      />
     
      <Tab.Screen name="Feedback" component={Feedback} 
        options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="mail-open" color={'brown'} size={size} /> ),}}
      />

      

      
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
      
    </NavigationContainer>
  );
}


