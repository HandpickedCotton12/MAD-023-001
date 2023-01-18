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
import Inputs from './BMI';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TargetWeight({navigation}) {

  const [tWeight,setTWeight] = useState('');

  const clear = () => {
    setTWeight("")
    Keyboard.dismiss();
  }

  const _setUserTargetWeight = async()=>{
    if(tWeight.length===0){
      alert('Please enter your target weight');
    }
    else{
      try{
        await AsyncStorage.setItem('TWeight_key',tWeight);
        alert('Target Weight stored Successfully');
        setTWeight('');

      }catch(err){
        alert(`Error: ${err}`);
      }
    }
  }
  
  
  return (
 
    <View style={styles.containerTargetWeight}>
    
     <Text style={styles.displayTitleTargetWeight}>
        Enter your target weight?</Text>
    <Image
          style={styles.imgSettingTargetWeight}
          source={require('../images/weight-loss.png')}
        />
    <TextInput
        style={styles.textinputTargetWeight}
        placeholder="Target Weight (kg)"
        underlineColorAndroid = "transparent"
        placeholderTextColor={'black'}
        Text={tWeight} onChangeText={setTWeight}
      />
    <Text style={{ margin: 5 }}></Text>

    <TouchableOpacity 
    style={styles.buttonNextTargetWeight} 
    onPress={()=> {
      _setUserTargetWeight();
    navigation.navigate('Home')}}>
    <Text style={styles.buttonNextTextTargetWeight}>Next</Text>
    </TouchableOpacity>

  </View>
     
  );
}


const styles = StyleSheet.create({
  containerTargetWeight: {
    height:"100%",
    justifyContent: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    backgroundColor: 'white',
    overflow:'hidden',
    padding:10
    
  },

   displayTitleTargetWeight: {

    top: 0,
    paddingTop: 0,
    fontSize: 29,
    padding: 20,
    fontfamily: 'M PLUS Rounded 1c',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    
   },

   imgSettingTargetWeight: {
     width: '80%',
     height: '40%',
     left: 35,
     top: 20,

   },

  textinputTargetWeight:{
    height:50,
    padding: 15,
    borderColor: 'black',
    borderRadius: 5,
    borderStyle: 'solid',
    color: 'black',
    margin: 10,
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 2,
    top: 40,
    
  },

  buttonNextTargetWeight: {
     width: "100%",
  height: 50,
  backgroundColor:'brown',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 1,
  top: 20,

    },

    buttonNextTextTargetWeight: {
      color: 'white',
      fontSize: 14,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontfamily: 'helvetica',
      marginBottom: 1
    
        }

  
});
