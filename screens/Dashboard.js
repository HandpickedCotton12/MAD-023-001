import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import LiquidApp from './LiquidApp';
import Breakfast from './Breakfast';



export default function Dashboard({ navigation }) {
  return (

  <ScrollView style={styles.containerDashboard}>
    <View style={styles.header}>
      <View>
      <Text style={styles.headerText}>Build your dream</Text>
      <Text style={styles.headerText}>
      <Text style={styles.pinkText}>HEALTHY</Text> Body</Text>
      </View>
        
    </View>

      <ScrollView horizontal={true} style={styles.categoryContainer}>
        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../images/christmas-dinner.png')}
          />
          <Text style={styles.categoryText}>Health</Text>
        </View>
        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../images/diet.png')}
          />
          <Text style={styles.categoryText}>Nutrition</Text>
        </View>
        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../images/lunch-time.png')}
          />
          <Text style={styles.categoryText}>Diet Plans</Text>
        </View>

        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../images/english-breakfast.png')}
          />
          <Text style={styles.categoryText}>BMI </Text>
        </View>
        <View style={styles.category}>
          <Image
            style={styles.categoryIcon}
            source={require('../images/balanced-diet.png')}
          />
          <Text style={styles.categoryText}>Fitness</Text>
        </View>
      </ScrollView>

      <View>
      <Text style={styles.headingText}>Tap to Add Calories</Text>
      <View style={styles.sectionContainer}>
      <ScrollView horizontal={true} style={styles.jobContainer}>
        <View style={styles.jobCard}>
        <Text style={styles.jobText}>Breakfast</Text>
          <View style={styles.jobIconContainer}>
          <Image
            style={styles.jobIcon}
            source={require('../images/english-breakfast.png')}
          />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}
                 style={styles.jobApplyButton}>
                  <Text style={styles.jobApplytext}>Add</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.jobCard}>
        <Text style={styles.jobText}>Lunch</Text>
          <View style={styles.jobIconContainer}>
          <Image
            style={styles.jobIcon}
            source={require('../images/lunch-time.png')}
          />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}
                 style={styles.jobApplyButton}>
                  <Text style={styles.jobApplytext}>Add</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.jobCard}>
        <Text style={styles.jobText}>Dinner</Text>
          <View style={styles.jobIconContainer}>
          <Image
            style={styles.jobIcon}
            source={require('../images/christmas-dinner.png')}
          />
         </View>
          <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}
                 style={styles.jobApplyButton}>
                  <Text style={styles.jobApplytext}>Add</Text>
         </TouchableOpacity>
        </View>

        
        <View style={styles.jobCard}>
        <Text style={styles.jobText}>Snacks</Text>
          <View style={styles.jobIconContainer}>
          <Image
            style={styles.jobIcon}
            source={require('../images/nachos.png')}
          />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}
                 style={styles.jobApplyButton}>
                  <Text style={styles.jobApplytext}>Add</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.jobCard}>
        <Text style={styles.jobText}>Water</Text>
          <View style={styles.jobIconContainer}>
          <Image
            style={styles.jobIcon}
            source={require('../images/water-bottle.png')}
          />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('LiquidApp')}
                 style={styles.jobApplyButton}>
                  <Text style={styles.jobApplytext}>Add</Text>
         </TouchableOpacity>
        </View>

      </ScrollView>
      </View>
      </View>

      <View style={styles.bottomView}>
      <Text style={styles.headingText}>Premium Diets</Text>

      <ScrollView style={styles.bottomScrollView}>

        <View style={styles.dietView}>
      <Image style={styles.imgView} source={require('../images/best2.jpg')} />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.displayTxt}>Low Carb Diet</Text>

        <Text style={{ color: 'brown', fontSize: 14, top: 120 }}>
          Pump up protein and put brakes on carbs to get faster results</Text>
      </View>
      </View>

      </ScrollView>

        <Pressable>
      <ScrollView style={styles.bottomScrollView}>

        <View style={styles.dietView}>
      <Image style={styles.imgView} source={require('../images/only3.jpg')} />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.displayTxt}>High-Protein Diet</Text>
            <Text style={{ color: 'brown', fontSize: 14 , top: 120}}>
          Pump up protein and put brakes on carbs to get faster results</Text>
      </View>
      </View>

      </ScrollView>
      </Pressable>

      <ScrollView style={styles.bottomScrollView}>

        <View style={styles.dietView}>
      <Image style={styles.imgView} source={require('../images/keto.jpg')} />
      <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.displayTxt}>KETO Diet</Text>
            <Text style={{ color: 'white', fontSize: 14, top: 120 }}>
          Pump up protein and put brakes on carbs to get faster results</Text>
      </View>
      </View>

      </ScrollView>
        
      </View>
     

      <View style={styles.bottom}>
        <Text style={styles.copyright}>©2022 Revenous</Text>
        <View style={styles.linkBox}>
          <Text style={styles.linkItem}>Privacy Centre</Text>
          <Text style={styles.linkItem}>Cookies</Text>
          <Text style={styles.linkItem}>Privacy</Text>
          <Text style={styles.linkItem}>Terms</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },

  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'black'
  },
  pinkText: {
    color: "#EB455F",
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'black'
  },

  display: {
    width: 42,
    height: 42,
    borderRadius: 50,
    marginLeft: 15,
    borderColor: '#fca311',
    borderWidth: 2,
  },
  displayName: {
    fontFamily: 'verdana',
    fontWeight: 'medium',
    marginLeft: 8,
    fontSize: 16,
    color: '#14213d',
  },
 
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 5,
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 35,
    backgroundColor: 'orange',
    borderRadius: 8,
    marginLeft: 10,
    
    
  },
  categoryIcon: {
    width: 18,
    height: 15,
  },
  categoryText: {
    marginLeft: 3,
    fontFamily: 'helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.7,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: 'helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#515151',
    marginLeft: 10,
  },
  sectionButton: {
    fontFamily: 'helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 2,
    marginRight: 10,
  },
  jobContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  jobCard: {
    backgroundColor: 'orange',
    width: 180,
    height: 220,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 15,
    marginTop:10,
  },

  jobIconContainer: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 5,
    
  },

  jobIcon: {
    width: 100,
    height: 100,
    left: 35,
    top: 30,
  },

  jobHeading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },
  jobText: {
    top: 10,
    left: 50,
    fontFamily: 'helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.7,
  },

  
  jobApplyButton: {
    width: 50,
    height: 30,
    backgroundColor: 'orange',
    marginRight: 10,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    left: 60,
  },
  jobApplytext: {
    color: 'white',
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    fontSize: 16,
  },
  companyCard: {
    borderWidth: 3,
    borderColor: '#fca311',
    borderRadius: 15,
    marginLeft: 10,
    marginBottom: 15,
    padding: 10,
    backgroundColor:'white',
    width: 140,
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  companyText: {
    color: '#14213d',
    fontWeight: 'bold',
    fontSize:16
  },
  companyImg: {
    width: 140,
    height: 140,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: 1000,
    marginTop: 10,
  },
  footerItem: {
    borderEndWidth: 1,
    borderStartColor: 'C',
    borderEndColor: '#fca311',
  },
  footerText: {
    color: '#515151',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#fca311',
    fontWeight: 'bold',
    opacity: 0.7
  },
  bottom: {
    marginTop: 15,
    // borderTopWidth: 1,
    // borderColor: '#d6d6d6',
  },
  copyright: {
    color: '#14213d',
    marginLeft: 30,
    marginTop: 5,
  },
  linkBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 5,
  },
  linkItem: {
    color: '#14213d',
  },


  premiumDietsHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'black'
  },
  premiumDietsCard: {
    
    width: 365,
    height: 200,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 15,
    backgroundColor: 'pink'

  },

  premiumDietsIcon: {
    width: 100,
    height: 100,
    left: 40,
    top: 40,
  },

  premiumDietsContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  
  dietsIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  
  premiumDietsHeading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },

  premiumDietsText: {
    left: 50,
    top: 60,
    fontFamily: 'helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.7,
  },

  displayImg: {
    width: 90,
    height: 50,
    
  },

  dietView: {
    
    width: 365,
    height: 250,
    borderRadius: 10,
    marginLeft: 5,
    marginBottom: 10,
    marginTop:10,
    
  },

  imgView: {
    width: 365,
    height: 250,
    borderRadius: 10,
    marginLeft: 5,
    marginBottom: 10,
    marginTop:10,
    opacity: 0.7
  },

  displayTxt: {
    top: 80,
    fontFamily: 'helvetica',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    
  }
  
 
});