import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button, 
    TouchableOpacity, TextInput, Keyboard, TouchableHighlight, 
    TouchableHighlightComponent, Alert, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ForgotPassword=({navigation})=> {
    const [email, setEmail]=useState("");
    const submitData=()=>{
        setEmail("");
        Keyboard.dismiss();
        navigation.navigate('OTP');
    }

    const validations=async()=>{
        Keyboard.dismiss();
        if (!email.match(/\S+@\S+\.\S+/)){
        alert('Invalid Email Address!')
        }
        else{
        submitData()
        }
    }

  return (

    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
    <View style={{flexDirection:'row'}}>

  
        <TouchableOpacity style={{paddingLeft:7, paddingTop:5}}
        onPress={()=>{navigation.navigate('SignIn')}}>
        <FontAwesome name="arrow-left" size={50} color="#5f8953" />
        </TouchableOpacity>

  
    <Image style={{        
                    height:250,
                    width:350,
                  }} 
                    source={require("../images/ForgetPs.png")}></Image>

    </View>

    <View style={styles.bottomContainer}>

  
    <View style={styles.headingContainer}>
        <Text style={styles.heading}>Forgot Password?</Text>
    </View>

    <Text style={styles.description}>Dont worry it happens, please enter the address associated to your account</Text>

  
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
            <View style={{paddingTop:5,paddingLeft:10}}>
            <Fontisto name="email" size={37} color="white"/>
            </View>

            <View>
            <TextInput style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder ='Email ID'
            placeholderTextColor={'white'}
            maxLength={50}
             />

            </View>
        </View>



<View style={{alignItems:'center', paddingTop:30}}>

<TouchableOpacity style={styles.button}

    onPress={()=>{navigation.navigate('OTP')}}
    disabled={(email.length<=0)}
    >
    <Text style={{fontSize:19,color:'white',fontWeight:'bold'}}>Submit</Text>
</TouchableOpacity>

</View>


<View style={{alignItems:'center'}}>
<View style={{flexDirection:'row',margin:15}}>

<Text style={{color:'white'}}>New User?</Text>

<TouchableOpacity onPress={()=>{navigation.navigate('signup')}}>
  <Text style={{fontSize:15, fontWeight:'bold', color:'#ed873a'}}> Sign Up </Text>
</TouchableOpacity>

</View> 
</View> 

    </View>
    </View>

    </Pressable>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  bottomContainer:{
    backgroundColor:'#5f8953',
    marginTop:10,
    width:400,
    height:600,
    borderRadius:30
  },

  headingContainer:{
    margin:20,
    marginLeft:30
  },

  heading:{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
    fontFamily:'serif'
  },

  description:{
    color:"white",
    fontSize:20,
    padding:10,
    paddingTop:1,
    paddingBottom: 25,
    alignSelf:'center'
  },

  button:{
    alignItems: "center",
    backgroundColor: `#ed873a`,
    padding:13,
    width:340,
    marginTop:10,
    borderRadius:50,
    textShadowColor:'red',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:5,
      },

   input: {
    height: 40,
    marginTop: 2,
    marginRight:12,
    marginLeft:20,
    borderBottomWidth:1,
    borderBottomColor:'white',
    padding: 2,
    color:'white',
    fontSize:18,
    width:310,
      },

});

export default ForgotPassword;