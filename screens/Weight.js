
import * as React from 'react';
import { Text, 
          View, 
          StyleSheet, 
          Image,
          TextInput, 
          ImageBackground, 
          Button, 
          Dropdown,
          TouchableOpacity, 
          Linking } from 'react-native';
import { FC } from 'react';
import {useState} from 'react';
import {Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';





import { Card } from 'react-native-paper';



export default function Weight({navigation}) {

  const [weight,setWeight] = useState('');

  const clear = () => {
    setWeight("")
    Keyboard.dismiss();
  }

  const _setUserWeight = async()=>{
    if(weight.length===0){
      alert('Please enter your weight');
    }
    else{
      try{
        await AsyncStorage.setItem('Weight_key',weight);
        alert('Weight stored Successfully');
        setWeight('');

      }catch(err){
        alert(`Error: ${err}`);
      }
    }
  }
  
  return (
 
    <View style={styles.containerWeight}>
    
     <Text style={styles.displayTitleWeight}>
        What's your weight?</Text>
    <Image
          style={styles.imgSettingWeight}
          source={require('../images/weight.png')}
        />
    <TextInput
        style={styles.textinputWeight}
        placeholder="Enter Weight (kg)"
        underlineColorAndroid = "transparent"
        placeholderTextColor={'black'}
        Text={weight} onChangeText={setWeight}
      />

    <TouchableOpacity 
    style={styles.buttonNextWeight} 
    onPress={() =>{
      _setUserWeight();
       navigation.navigate('TargetWeight')}}>
    <Text style={styles.buttonNextText}>Next</Text>
    </TouchableOpacity>
    

  </View>
     
  );
}


const styles = StyleSheet.create({
  containerWeight: {
    
    height:"100%",
    justifyContent: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    backgroundColor: 'white',
    overflow:'hidden',
    padding:10
    
  },

   displayTitleWeight: {

    top: 0,
    paddingTop: 0,
    fontSize: 29,
    padding: 20,
    fontfamily: 'M PLUS Rounded 1c',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    
   },

   imgSettingWeight: {
     width: '80%',
     height: '40%',
     left: 35,
     top: 20,

   },

  textinputWeight:{
    height:50,
    padding: 15,
    borderColor: 'black',
    borderRadius: 5,
    borderStyle: 'solid',
    backgroundColor: 'white',
    margin: 10,
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    color: 'black',
    borderWidth: 2,
    top: 40,
    
  },

  buttonNextWeight: {
  width: "100%",
  height: 50,
  backgroundColor:'brown',
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  fontfamily: 'helvetica',
  marginBottom: 1,
  top: 50,

    },

 buttonNextText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Helvetica',
 }

  
});
