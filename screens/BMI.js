import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight))/((parseFloat(height)*parseFloat(height)));
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Underweight'})
      }
      else if(result>=18.5 && result<25){
         this.setState({BmiResult:'Normal weight'})
      }
      else if(result>=25 && result<30){
         this.setState({BmiResult:'Overweight'})
      }
      else if(result >= 30){
         this.setState({BmiResult:'Obese'})
      }
      else{
         alert('Incorrect Input!');
         this.setState({BmiResult:''})
      }
   }
   render() {
      return (
         <View style = {styles.container}>
         <Text style={styles.title}>BMI Calculator</Text>

          
            <Text  style = {styles.label}>Enter Height</Text>
            <TextInput style = {styles.input}
               placeholder = "Height (m)"
               placeholderTextColor={'black'}
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
            
            <Text  style = {styles.label}>Enter Weight</Text>
            <TextInput style = {styles.input}
               placeholder = "Weight (kg)"
               placeholderTextColor={'black'}
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {() => this.calculate(this.state.height, this.state.weight)}>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>

            <Text style={{ fontStyle:'italic', fontSize: 14, color: 'black', textAlign: 'center' }}>*Key: 1 meter = 3.28 feet</Text>
            

            <Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
         
            
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      
   height:"100%",
    width: '100%',
    justifyContent: 'center',
    fontfamily: 'M PLUS Rounded 1c',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 12,
    
      
   },
   input: {
      margin: 15,
      height: 50,
      width: '90%',
      borderWidth: 1,
      padding: 10,
      color: 'black'
   },
   submitButton: {
      backgroundColor: 'brown',
      padding: 10,
      margin: 15,
      height: 50,
      width: '90%',
      borderRadius: 8,

   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   title:{
   top: 0,
    fontSize: 29,
    padding: 40,
    fontfamily: 'M PLUS Rounded 1c',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
      

   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },

   label:{
      marginLeft: 15,
      color: 'black',
      paddingTop: 5
   },

  
})