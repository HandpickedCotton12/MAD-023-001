import * as React from 'react';
import { Picker } from '@react-native-picker/picker';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


export default function Gender({navigation}) {
  const [gender, setGender] = useState('');

  _storeUserGender = async()=>{
    try{
         let gender1 = await AsyncStorage.getItem('Gender_key');
         console.log(gender1);
         if(gender1 === gender){
          alert('Success');
           setGender('');
         }
         else{
           alert('Failure');
         }
    }catch(err)
    {
         console.log(err);
       }
  }

  return (
    <View style={styles.containerGender}>
      <Text style={styles.displayTitleGenderMain}>What's Your Gender?</Text>
      <Image
        style={styles.imgSettingGender}
        source={require('../images/lavatory.png')}
      />
      <View style={{ padding: 20, fontfamily: 'M PLUS Rounded 1c' }}>
         <Picker
        selectedValue={gender}
        onPress={()=>_storeUserGender()}
        onValueChange={(value, index) => setGender(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Select Gender" value="Unknown" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Not Willing" value="NA" />
      </Picker>
      </View>

      <TouchableOpacity style={styles.displayBtnGender} title="Next" 
      onPress={() =>{ 
        _storeUserGender();
        navigation.navigate('DOB')}}><Text style={{
            color: 'white',
            borderRadius: 10,
            fontSize: 15,
            fontfamily: 'M PLUS Rounded 1c',
  
          }}>Next</Text></TouchableOpacity>

      <Text style={styles.displayTitleGender}>
        By continuing, you agree to TheNutritionTracker Privacy Policy and Term
        of Use
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGender: {
    height:"100%",
    width: '100%',
    justifyContent: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 12,
  },

  displayTitleGenderMain: {
    top: 0,
    fontSize: 26,
    padding: 20,
    fontfamily: 'M PLUS Rounded 1c',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  imgSettingGender: {
    width: '82%',
    height: '38%',
    top: 20,
    left: 30,
    padding: 20,
  },

  displayTitleGender: {
    top: 40,
    fontSize: 15,
    fontfamily: 'M PLUS Rounded 1c',
    textAlign: 'center',
    color: 'black',
    padding: 30,
  },

  displayBtnGender: {
    backgroundColor : 'brown',
    width: "89%",
    height: 50,
    top: 60,
    left: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontfamily: 'helvetica',
    borderRadius: 10,
    margin: 2,

  },

  picker: {
    backgroundColor: 'brown',
    width: "100%",
    left: 0,
    height: 30,
    
    top: 30,
  }
});
