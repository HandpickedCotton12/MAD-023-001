import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {
  [email, setEmail] = useState('');
  [username, setUsername] = useState('');
  [password, setPassword] = useState('');
  [confirmPassword, setConfirmPassword] = useState('');
  
  const setData = async()=>{
    if(username.length===0 || email.length===0 || password.length===0||confirmPassword.length===0){
      alert('Please enter required data');
    }
    else if(confirmPassword===password){
      try{
        await AsyncStorage.setItem('User_key',username);
        await AsyncStorage.setItem('Email_key',email);
        await AsyncStorage.setItem('Pass_key',password);
        alert('Registered Account Successfully');
        navigation.navigate('Gender')
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

      }catch(err){
        alert(`Error: ${err}`);
      }
    }
    else{
      alert("Password Doesn't Match");
    }
  }
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../images/RevenousLogo.jpg')}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.formControls}>
          <Text style={styles.labelEmail}>username</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter username"
            placeholderTextColor={'grey'}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.formControls}>
          <Text style={styles.labelEmail}>email</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter Email"
            placeholderTextColor={'grey'}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.formControls}>
          <View style={styles.password}>
            <Text style={styles.label}>password</Text>
          </View>
          <TextInput 
          style={styles.txtInput} 
          placeholder="Enter Password"
          placeholderTextColor={'grey'}
          value={password}
          onChangeText={setPassword} />
        </View>

        <View style={styles.formControls}>
          <View style={styles.password}>
            <Text style={styles.label}>Confirm password</Text>
          </View>
          <TextInput style={styles.txtInput} 
          placeholder="Re-enter Password" 
          placeholderTextColor={'grey'}
          value={confirmPassword}
            onChangeText={setConfirmPassword} />
        </View>

        <View style={styles.formControls}>
          <TouchableOpacity style={styles.loginBtn} onPress={()=>setData()}>
            <Text style={styles.BtnText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formControls}>
          <View style={styles.registerControls}>
            <Text style={styles.register}>Already have an account?</Text>
            <Text style={styles.register1} onPress={()=>navigation.navigate('SignIn')}>Sign in Instead</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'white',
   
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  logo: {
    width: 150,
    height: 200,
    top: 30,
    
  },
  formContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    top: 50,
  },
  formControls: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding:10,
    backgroundColor: 'white',
  },
  label: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 14,
    
  },
  labelEmail: {
    textTransform: 'uppercase',
    color: 'black',
    marginBottom: 5,
    fontSize: 14,
    
  },
  txtInput: {
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 10,
    padding: 10,
    color: 'black',
    fontSize: 14,
    
  },
  password: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    
  },
  loginBtn: {
    backgroundColor: 'brown',
    width: '100%',
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  BtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
  },
  register: {
    color: 'black',
    fontSize: 12,
    marginRight: 5,
  },
  register1: {
    color: '#fca311',
    fontSize: 14,
    fontWeight:'bold'
  },
});