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
import { NavigationContainer } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Breakfast({navigation}) {
  [Name, setName] = useState('');
  [quantity, setQuantity] = useState('');
  
  
  const setData = async()=>{
    if(Name.length===0 || quantity.length===0){
      alert('Please enter required data');
    }
    else{
      try{
        await AsyncStorage.setItem('Name_key',Name);
        await AsyncStorage.setItem('Quantity_key',quantity);
        alert('Data logged Successfully');
        navigation.navigate('Dashboard')
        setName('');
        setQuantity('');
        

      }catch(err){
        alert(`Error: ${err}`);
      }
    }
    
  }

  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../images/diet.png')}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.formControls}>
          <Text style={styles.labelEmail}>Meal Name</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter the name of meal you had"
            placeholderTextColor={'grey'}
            value={Name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.formControls}>
          <Text style={styles.labelEmail}>quantity</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter quantity"
            placeholderTextColor={'grey'}
            value={quantity}
            onChangeText={setQuantity}
          />
        </View>

        

        <View style={styles.formControls}>
          <TouchableOpacity style={styles.loginBtn} onPress={()=>setData()}>
            <Text style={styles.BtnText}>Log Meal</Text>
          </TouchableOpacity>
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