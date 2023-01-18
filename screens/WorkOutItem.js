import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WorkOutItem = props => (
  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{ uri: props.uri }}
      />
    </View>
    <View style={styles.times}>
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        {props.times}
      </Text>
    </View>
    <View style={styles.details}>
     <Text style={styles.title}>{props.title}</Text>
     <Text style={styles.time}>{props.time}</Text>

    </View>

  </View>
);

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    height: 80,
    borderRadius: 15,
    overflow: "hidden",
    
  },

  times: {
    flex: 1,
    margin: 10,
    backgroundColor: "purple"

  },

  details: {
    flex: 5,
    color: 'black'
    
  },
  
  time: {
    color: "red"
  }, 
  
  title: {
    fontWeight: "bold",
    color: 'black'
  },

  
});

export default WorkOutItem;