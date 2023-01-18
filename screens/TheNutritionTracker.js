import React from 'react';
import {useState} from 'react';
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

export default function TheNutritionTracker( {navigation} ) {
  return (
    <View style={styles.container1}>
      <Image style={styles.display1} source={require('../images/diet.png')} />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.displayTitle1}>Welcome to</Text>
        <Text style={styles.displayTitle2}> TheNutritionTracker</Text>
      </View>

      <View style={{ position: 'absolute', top: '78%', left: 20, right: 2 }}>
        <TouchableOpacity
          style={{
            width: "95%",
            height: 40,
            backgroundColor: 'brown',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}
          onPress={() => navigation.navigate('signup')}
          title="I am New"
          accessibilityLabel="Register as a new user">
          <Text style={{
            color: 'white',
            borderRadius: 10,
            fontSize: 15,
            fontfamily: 'M PLUS Rounded 1c',
  
          }}>I'm New</Text>
        </TouchableOpacity>

        <Text style={styles.displayTitle3}>
          Already used TheNutritionTracker?
        </Text>

        <TouchableOpacity
          style={styles.displayButton2}
          onPress={() => navigation.navigate('SignIn')}
          title="Sign In"
          accessibilityLabel="Log In your credentials">
          <Text style={{
            color: 'white',
            fontSize: 15,
            borderRadius: 10,
            fontfamily: 'M PLUS Rounded 1c',
  
          }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height:"100%",
    justifyContent: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    backgroundColor: 'white',
    overflow: 'hidden',
  },

  display1: {
    width: '64%',
    height: '32%',
    top: 20,
    left: 70,
    justifyContent: 'center',
    
  },

  displayTitle1: {
    top: 50,
    fontSize: 20,
    fontWeight: 'bold',
    fontfamily: 'M PLUS Rounded 1c',
    textAlign: 'center',
    color: 'black',
  },

  displayTitle2: {
    top: 70,
    fontSize: 35,
    fontWeight: 'bold',
    fontfamily: 'M PLUS Rounded 1c',
    textAlign: 'center',
    color: 'orange',
  },

  displayTitle3: {
    fontSize: 13,
    textAlign: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    color: 'black',
    padding: 5,
    
  },

  displayButton2: {
    width: "95%",
    height: 40,
    backgroundColor: 'brown',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontfamily: 'Roboto',
    marginBottom: 8,
  },
});
