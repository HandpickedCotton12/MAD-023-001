import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignIn({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _getUserCredentials = async()=>{
      try{
           let email1 = await AsyncStorage.getItem('Email_key');
           console.log(email1);
           let pass = await AsyncStorage.getItem('Pass_key');
           console.log(pass);
           if(email1 === email && pass===password){
             alert('Success');
             navigation.navigate('Home');
             setEmail('');
           setPassword('');
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
    <View style={styles.container2}>
      <Text style={styles.displayTitle1SI}>Sign In</Text>
      <Text style={styles.displayTitleTxtSI}>If you have previously created account, 
      you can sign in to this account
       using the same sign in method.</Text>

      <Image
        style={styles.imgSettingSI}
        source={require('../images/key.png')}
      />

  
      <TextInput style={styles.TxtInSI1}
      placeholder="Email or Account Name"
      placeholderTextColor={'black'}
      value={email}
      onChangeText={setEmail}/>
 

      
      <TextInput style={styles.TxtInSI2}
      placeholder="Password"
      placeholderTextColor={'black'}
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}/>

      
      <TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}><Text style={styles.forgotBtnSI}>Forgot Password?</Text></TouchableOpacity>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.signInBtnSI} onPress={()=>_getUserCredentials()}>
        <Text style={styles.loginTextSI}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    height:"100%",
    justifyContent: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 12,
    
  },

  displayTitle1SI: {
    top: 10,
    paddingTop: 0,
    fontSize: 40,
    padding: 20,
    fontfamily: 'M PLUS Rounded 1c',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  displayTitleTxtSI: {
    paddingTop: 0,
    fontSize: 15,
    fontfamily: 'M PLUS Rounded 1c',
    textAlign: 'center',
    color: 'black',
    padding: 30,
  },

  imgSettingSI: {
    width: '72%',
    height: '34%',
    alignContent: 'center',
    left: 55,

  },

 forgotBtnSI: {
    height: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
 
  signInBtnSI: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'brown',
    left: 20,
  },

  loginTextSI: {
    color: 'white',
    fontSize: 16,
    
  },

  TxtInSI1: {
    
    borderColor: 'brown',
    borderWidth: 3,
    color: 'black',
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 20,
    padding: 10,
    
  },

  TxtInSI2: {
    
    borderColor: 'brown',
    color: 'black',
    borderWidth: 3,
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 10,
    padding: 10,
    
  },
  
});
