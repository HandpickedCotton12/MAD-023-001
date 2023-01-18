import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Keyboard, TouchableHighlight, TouchableHighlightComponent, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignIn from './SignIn';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const CELL_COUNT = 4;

const OTP = ({ navigation }) => {

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const submit = () => {
    if (value.length == 4) {
      navigation.navigate("ResetPassword")
    }

    else {
      alert("Incomplete OTP code!")
    }
  }
  return (

    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={{ flexDirection: 'row' }}>


        <TouchableOpacity style={{ paddingLeft: 7, paddingTop: 5 }}
          onPress={() => { navigation.navigate('ForgotPassword') }}>
          <FontAwesome name="arrow-left" size={50} color="#5f8953" />
        </TouchableOpacity>

        <View style={styles.headingContainer}>

          <Text style={styles.heading}>Enter OTP</Text>

        </View>

        <Text style={styles.description}>A four digit OTP has been sent to your email address</Text>


        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 300 }}>
            <CodeField
              ref={ref}
              {...props}

              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
        </View>



        <View style={{ alignItems: 'center', paddingTop: 10 }}>

          <TouchableOpacity style={styles.button}
            onPress={submit}>
            <Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold' }}>Submit</Text>
          </TouchableOpacity>

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

  bottomContainer: {
    backgroundColor: '#5f8953',
    marginTop: 10,
    width: 400,
    height: 600,
    borderRadius: 30
  },

  headingContainer: {
    margin: 20,
    marginLeft: 30
  },

  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'serif'
  },

  description: {
    color: "white",
    fontSize: 20,
    padding: 10,
    paddingTop: 1,
    paddingBottom: 25,
    alignSelf: 'center'
  },

  codeFieldRoot: { marginTop: 20 },

  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    margin: 1,
    fontSize: 24,
    borderColor: 'lightgrey',
    borderWidth: 2,
    backgroundColor: 'white',
    textAlign: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 50,
      height: 50,
    }, shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 20,
  },
  focusCell: {
    borderColor: 'lightgrey',
  },

  button: {
    alignItems: "center",
    backgroundColor: `#ed873a`,
    padding: 13,
    width: 340,
    marginTop: 10,
    borderRadius: 50,
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

});

export default OTP;