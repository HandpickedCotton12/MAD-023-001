import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Badge from './Badge';
import About from './About';
import BMI from './BMI';

const Headers = (navigation) => (
  <React.Fragment>
    <View style={styles.icons}>
    </View>
    <View>
      <Text style={styles.headerText}>Build your dream</Text>
      <Text style={styles.headerText}>
        <Text style={styles.pinkText}>HEALTHY</Text> Body
      </Text>
      <View style={styles.badges}>
        <Badge name="Paid Plan" />
        <Badge name="Free Plan" />
      </View>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  icons: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
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
  badges: {
    flexDirection: 'row',
    marginVertical: 20,
    height: 40,
    width: 500,
    paddingHorizontal: 15,

  }
});

export default Headers;