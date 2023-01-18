import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableOpacityBase,
} from 'react-native';   

export default function Profile() {

    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [tWeight, setTWeight] = useState('');
    const [Name, setName] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [NameLunch, setNameLunch] = useState('');
    const [quantityLunch, setQuantityLunch] = useState('');

    useEffect(()=> {
        getUsername();
        getEmail();
        getHeight();
        getGender();
        getWeight();
        getTWeight();
        getName();
        getQuantity();
        
    },[]
    )


    const getGender = async () => {
        const gender = await AsyncStorage.getItem('Gender_key');
        setGender(gender);
    }

    const getName = async () => {
        const name = await AsyncStorage.getItem('Name_key');
        setName(name);
    }

    const getQuantity = async () => {
        const quantity = await AsyncStorage.getItem('Quantity_key');
        setQuantity(quantity);
    }
    

    const getUsername = async () => {
        const username = await AsyncStorage.getItem('User_key');
        setUsername(username);
    }

    const getEmail = async () => {
        const email = await AsyncStorage.getItem('Email_key');
        setEmail(email);
    }

    const getHeight=async ()=>{
        const height=await AsyncStorage.getItem('Height_key');
        setHeight(height);
        }

    const getWeight = async () => {
        const weight = await AsyncStorage.getItem('Weight_key');
        setWeight(weight);
    }

    const getTWeight = async () => {
        const tWeight = await AsyncStorage.getItem('TWeight_key');
        setTWeight(tWeight);
    }

    

    
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.userHeadingText}>User Profile</Text>
            </View>

            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>Username: {username}</Text>
                <Text style={styles.userInfoText}>Email:    {email}</Text>
                <Text style={styles.userInfoText}>Height:   {height}</Text>
                <Text style={styles.userInfoText}>Weight:   {weight}</Text>
                <Text style={styles.userInfoText}>Target Weight:    {tWeight}</Text>
                <Text style={styles.userInfoText}>Breakfast:    {Name}  Quantity:   {Quantity}</Text>

            </View>

                
        </View>

            
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        height: '100%'
    },

    headingContainer: {
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    userHeadingText: {
        height: 100,
        width: 150,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,

    },


    userInfoText: {
        color: 'black',
        fontSize: 14,
        alignItems: 'center',
        alignContent: 'center',
    }
   
});
