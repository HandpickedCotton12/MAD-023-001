import React from 'react'
import { useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Video,
    TextInput,
    ImageBackground,
    Button,
    TouchableOpacity,
  } from 'react-native';
  
import { NavigationContainer } from '@react-navigation/native';
const SPLASH_SCREEN_DURATION = 25000;
function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TheNutritionTracker');
    }, 2000);

    
  },[]);

  

return (
    <View style={styles.splashContainer}>
      <Image style={styles.displayLogo}
     source={require('../images/RevenousLogo.jpg')} 
      />
      <Text style={styles.splashText}>Revenous will guide you with personalized tips, 
      diet advice and feedback as you go.</Text>
    </View>
  );

}

const styles = StyleSheet.create({
    splashContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    splashText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginHorizontal: 80,
      color: 'brown',
    }
});

export default SplashScreen