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
} from 'react-native';

export default function About({navigation}) {
    return (
      <View style={styles.aboutContainer}>
        <Image style={styles.displayLogo}
     source={require('../images/RevenousLogo.jpg')} 
      />
        <Text style={[styles.aboutText]}>
        Revenous helps people become more healthy, more active and lose weight. 
        Downloaded by {'\n'}over 10 million people around the world, 
        Revenous is the most comprehensive, accurate, and user-friendly diet app in App Store and 
        {'\n'}Google Play. 
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    aboutContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    displayLogo: {
      height: 120,
      width: 100,
      bottom: 30,
    },

    aboutText: {
      fontSize: 16,
      fontFamily: 'Helvetica',
      fontStyle: 'italic',
        color: 'black',
        alignText: 'center',
        left: 10,
        right: 10,
        lineHeight: 30,
    }
});