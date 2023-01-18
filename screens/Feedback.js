import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image,TouchableOpacity, TextInput, Keyboard, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Feedback=({navigation})=> {
    const [text, setText] = React.useState("");
    const [option,setOption]=React.useState("");
    const [defaultRating,setDefaultRating]=React.useState(3);
    const [maxRating, setMaxRating] = React.useState([1,2,3,4,5]);

    const starImgCorner='https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';
    const starImgFilled='https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
    
    const CustomRatingBar=()=>{
      return(
        <View style={styles.customRatingBarStyle}>
          {
            maxRating.map((item,key)=>{
              return(
                <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={()=>{setDefaultRating(item)}}>
                  <Image style={styles.starImgStyle}
                  source={
                    item<=defaultRating
                    ? {uri: starImgFilled}
                    : {uri: starImgCorner}
                  }/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      )
    }
    const submitData=()=>{
      setText("");
      setOption("");
      Keyboard.dismiss();
      alert('Navigate to preferred screen')

       
      navigation.navigate("Dashboard");
    }

    const service=()=>{
      setOption("Overall Service");
    }
    const Intake=()=>{
      setOption("Daily Intake");
    }
    const Improvement=()=>{
      setOption("App Improvement");
    }
    const speed=()=>{
      setOption("Speed and Efficiency");
    }
    const dietPlan=()=>{
      setOption("Improve the diet plan");
    }
    
  return (
    <View style={styles.container} 
    >
        
        <View style={{flexDirection:'column'}}>
    <View style={styles.topContainer}>
        <View style={{flexDirection:'row',marginTop:15}}>
            <TouchableOpacity style={{paddingLeft:10}}

            
            onPress={()=>{navigation.navigate('Dashboard')}}
            >
            <FontAwesome name="arrow-left" size={50} color="white" />
        </TouchableOpacity>
            <Text style={{fontSize:30,marginLeft:30,fontWeight:'bold',
            color:"white",marginTop:10,fontFamily:'serif'}}>FeedBack</Text>
            <Image style={{        
                    height:60,
                    width:60,
                    borderRadius:100,
                    alignSelf:'center',
                    marginTop:5,
                    marginLeft:90
                }} 
                    source={require("../images/Me.png")}></Image>
        </View>
        
    <View style={styles.middleCont}>
        <View style={{alignItems:'center'}}>
            <Text style={styles.heading}>Rate Your Experience</Text>
        </View>
        <Text style={{color:"darkgreen",fontSize:16,
        paddingLeft:26,paddingTop:10,fontWeight:'bold'}}>
          Are you satisfied with us?</Text>
      <CustomRatingBar/>
    </View>

    
    </View>
  
    <View style={styles.bottomContainer}>
        <Text style={{color:'black',fontSize:17,fontWeight:'bold',paddingLeft:15}}>
            Tell us what can be improved?
        </Text>
        <View style={{flexDirection:'row',marginTop:15}}>
            <TouchableOpacity style={{flex:4,marginLeft:10,
                padding:10,
                backgroundColor:"#dcdcdc",
                borderRadius:50,
                fontSize:16,
                fontWeight:'bold',textAlign:'center' }}
                onPress={service}><Text style={{
                  color:"#ed873a",
                  fontSize:16,
                  fontWeight:'bold',textAlign:'center' }}
                  >
                    Overall Service</Text></TouchableOpacity>
            <TouchableOpacity style={{flex:2,marginLeft:10,
                padding:10,
                backgroundColor:"#dcdcdc",
                borderRadius:50,
                fontSize:16,
                fontWeight:'bold',textAlign:'center' }}
                onPress={Intake}><Text style={{
                  color:"#ed873a",
                  fontSize:16,
                  fontWeight:'bold',textAlign:'center' }}
                  >
                    Daily Intake</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
            <TouchableOpacity style={{flex:3,padding:10,
                backgroundColor:"#dcdcdc",
                borderRadius:50,
                color:"#ed873a",marginRight:2,
                fontSize:16,
                fontWeight:'bold',textAlign:'center' }}
                onPress={Improvement}><Text style={{
                  color:"#ed873a",
                  fontSize:16,
                  fontWeight:'bold',textAlign:'center' }}
                  >App Improvement</Text></TouchableOpacity>
            <TouchableOpacity style={{flex:3,padding:10,
                backgroundColor:"#dcdcdc",
                borderRadius:50,marginLeft:2,
                color:"#ed873a",
                fontSize:16,
                fontWeight:'bold',textAlign:'center' }} 
                onPress={speed}><Text style={{
                  color:"#ed873a",
                  fontSize:16,
                  fontWeight:'bold',textAlign:'center' }}
                  >Speed and efficiency</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
            <TouchableOpacity style={styles.option} onPress={dietPlan}><Text style={{
                  color:"#ed873a",
                  fontSize:16,
                  fontWeight:'bold',textAlign:'center' }}
                  >Improve the diet plan</Text></TouchableOpacity>
                 
        </View>
        
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Tell us more we can improve..."
            placeholderTextColor={'grey'}
      />
      

      
      <View style={{alignItems:'center'}}>
    <TouchableOpacity style={styles.button}
          onPress={submitData}
        >
          <Text style={{fontSize:19,color:'white',fontWeight:'bold'}}>Submit</Text>
        </TouchableOpacity>
    </View>

    </View>

    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  topContainer:{
    backgroundColor:'#5f8953',
    width:400,
    height:270,
  },
  middleCont:{
    marginTop:30,
    backgroundColor:'#d2dac3',
    height:200,
    width:400,
    borderRadius:20,
    padding:10
  },
  bottomContainer:{
    backgroundColor:'white',
    height:600,
    width:400,
    padding:15
  },
  option:{
    marginLeft:10,
    padding:10,
    backgroundColor:"#dcdcdc",
    borderRadius:50,
    paddingLeft:30,
    paddingRight:30,
    color:"#ed873a",
    fontSize:16,
    fontWeight:'bold'    
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

  heading:{
    color:'#006400',
    fontWeight:'bold',
    fontSize:30,
    fontFamily:'serif'
  },
    input: {
        height: 120,
        margin: 12,
        borderWidth: 2,
        borderColor:'grey',
        padding: 10,
        marginTop: 30,
        marginRight:10,
        marginLeft:10,
        fontSize:18,
        width:350
      },

    customRatingBarStyle:{
      justifyContent:'center',
      flexDirection:'row',
      marginTop:15
    },
    starImgStyle:{
      width:40,
      height:40,
      resizeMode:'cover'
    }
});

export default Feedback;