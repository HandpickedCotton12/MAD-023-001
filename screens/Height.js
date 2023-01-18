import * as React from 'react';
import { Text, View, StyleSheet, Image, Video, TextInput, ImageBackground, Button, TouchableOpacity } from 'react-native';


// You can import from local files
import { FC } from 'react';
import {useState} from 'react';
import {Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Height({navigation}) {

   const [height,setHeight] = useState('');
    const clear = () => {
      setHeight("")
      Keyboard.dismiss();
    }

  const _setUserHeight = async()=>{
    if(height.length===0){
      alert('Please enter your height');
    }
    else{
      try{
        await AsyncStorage.setItem('Height_key',height);
        alert('Height stored Successfully');
        setHeight('');

      }catch(err){
        alert(`Error: ${err}`);
      }
    }
  }
  return (
 
    <View style={styles.containerHeight}>
    <Image
    style={styles.displayHeight}
     source={require('../images/height.png')}
     />
     <View style={{position: 'absolute', top: 0, left: 20, right: 20, 
     bottom: '85%', justifyContent: 'center',}}>
     <Text style={styles.displayTitle1}>
        How tall are you?</Text></View>

     <View style={{position: 'absolute', top: '70%', left: 20, right: 20, 
     bottom: 100, justifyContent: 'center'}}>
     
      <TextInput
        style={styles.textinputHeight}
        underlineColorAndroid = "transparent"
        placeholder="Enter Height (m)"
        placeholderTextColor={'black'}
        value={height} onChangeText={setHeight}
      />

    <TouchableOpacity
    style={styles.buttonNextHeight}
    onPress={() =>{ 
      _setUserHeight();
      navigation.navigate('Weight') }}> 
    <Text style={styles.buttonNextTxtHeight}>Next</Text></TouchableOpacity>
   </View>
</View>

     
  );
}

const styles = StyleSheet.create({
  containerHeight: {
    height:"100%",
    width: '100%',
    justifyContent: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    backgroundColor: 'white',
    overflow:'hidden',
    
    
  },

   displayHeight: {
     width:'80%',
     height:'40%' ,
     justifyContent: 'center',
     left: 40,

   },

textinputHeight:{
    height:50,
    padding: 15,
    borderColor: 'black',
    borderRadius: 5,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    margin: 10,
    top: 40,
    marginLeft: 0,
    marginRight: 0,
    color: 'black',
    borderWidth: 2,
    
  },

  buttonNextHeight: {
    width: "100%",
    top:50,
    height: 50,
    backgroundColor: 'brown',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontfamily: 'helvetica',

    },

    buttonNextTxtHeight: {
      color: 'white',
    },

    displayTitle1: {
      top: 60,
    fontSize: 29,
    fontWeight: 'bold',
    fontfamily: 'M PLUS Rounded 1c',
    textAlign: 'center',
    color: 'black',
    padding: 30,
    }

});
