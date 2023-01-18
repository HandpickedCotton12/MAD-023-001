import { Text, 
    View, 
    StyleSheet, 
    Image,
    gif,
    TextInput, 
    ImageBackground, 
    Button, 
    Dropdown,
    TouchableOpacity,
    Platform, 
    Linking } from 'react-native';
import { FC } from 'react';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import {Icon } from 'react-native-elements';


export default function DateOfBirth({navigation}) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const _getUserDOB = async()=>{
    try{
         let date1 = await AsyncStorage.getItem('Date_key');
         console.log(date1);
         if(date1 === date){
           alert('Success');
           navigation.navigate('Dashboard');
           setDate('');
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

<View style={styles.containerDOB}>

<Text style={styles.displayTitleDOB}>
  When were you born?</Text>
<Image
    style={styles.imgSettingDOB}
    source={require('../images/birthday.png')}
  />

<TouchableOpacity style={styles.btnOpen} 
title="Open" onPress={() => setOpen(true)}>
<Text style={{color: 'white', fontSize: 15}}>Select your Date of Birth</Text>
</TouchableOpacity>

<DatePicker
        modal
        selectedValue={Date}
        onValueChange={(value, index) => setDate(value)}
        onPress={()=>_getUserDOB()}
        open={open}
        date={date}
        mode="date"
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> 

<TouchableOpacity 
style={styles.buttonNextDOB}
title="Next" 
onPress={() => {
        _getUserDOB();
        navigation.navigate('Height')}}>
<Text style={{color: 'white', fontSize: 15}}>Next</Text></TouchableOpacity>

</View>

);
}


const styles = StyleSheet.create({
containerDOB: {
height:"100%",
width: '100%',
justifyContent: 'center',
fontfamily: 'M PLUS Rounded 1c',
backgroundColor: 'white',
overflow:'hidden',
padding: 20,
},

displayTitleDOB: {

fontSize: 29,
fontfamily: 'M PLUS Rounded 1c',
fontWeight: 'bold',
textAlign: 'center',
color: 'black',

},

imgSettingDOB: {
width: '64%',
height: '30%',
left: 60,
top: 30,

},

buttonNextDOB: {
width: "99%",
height: 50,
backgroundColor: 'brown',
borderRadius: 10,
top: 70,
justifyContent: 'center',
alignItems: 'center',
fontWeight: 'bold',
fontfamily: 'helvetica',

},

btnOpen: {
width: "99%",
height: 50,
top: 60,
backgroundColor: 'brown',
borderRadius: 10,
justifyContent: 'center',
alignItems: 'center',
}





});