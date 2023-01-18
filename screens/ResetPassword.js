import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Keyboard, TouchableHighlight, TouchableHighlightComponent, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ResetPassword=({navigation})=> {
    
    const [password, setPassword]=useState("");
    const [resetPS,setResetPs]=useState("");

    const validations=async()=>{
        Keyboard.dismiss();

     if(password!==resetPS){
        alert("Passwords don't match")
    }
    else{
        alert("Password has been reset")
    }

    submitData()
    }

    const submitData=()=>{
        setResetPs("");
        setPassword("");
        Keyboard.dismiss();
    }
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View style={{flexDirection:'row'}}>

      
            <TouchableOpacity style={{paddingLeft:7, paddingTop:5}}
            onPress={()=>{navigation.navigate('OTP')}}>
                <FontAwesome name="arrow-left" size={50} color="#5f8953" />
            </TouchableOpacity>

         
        <Image style={{height:250, width:350,}}
            source={require("../images/ResetPs.png")}></Image>
        </View>

    <View style={styles.bottomContainer}>

    
    <View style={styles.headingContainer}>
        <Text style={styles.heading}>Reset</Text>
        <Text style={styles.heading}>Password</Text>
    </View>

    
    <View>
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row',marginTop:10,paddingTop:5,paddingLeft:10}}>
             <View style={{paddingTop:8}}><AntDesign name="lock" size={37} color="white"  /></View> 
            <View>
            <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder='New Password'
            placeholderTextColor={'white'}
            maxLength={20}
            secureTextEntry
             />
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,paddingTop:5,paddingLeft:10}}>
            <View style={{paddingTop:8}}><AntDesign name="lock" size={37} color="white" /></View>
            <View>
            <TextInput
            style={styles.input}
            value={resetPS}
            onChangeText={setResetPs}
            placeholder='Confirm Password'
            placeholderTextColor={'white'}
            maxLength={20}
            secureTextEntry
             />
            </View>
        </View>
    </View>

    
    <View style={{alignItems:'center'}}>
    <TouchableOpacity style={styles.button}
         onPress={validations}
         disabled={(resetPS.length<=0)||(password.length<=0)}
        >
          <Text style={{fontSize:19,color:'white',fontWeight:'bold'}}>Reset</Text>
        </TouchableOpacity>
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

  button:{
    alignItems: "center",
    backgroundColor: `#ed873a`,
    padding:13,
    width:340,
    marginTop:50,
    borderRadius:50,
    textShadowColor:'red',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:5,
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

      input: {
        height: 40,
        marginTop: 7,
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

export default ResetPassword;