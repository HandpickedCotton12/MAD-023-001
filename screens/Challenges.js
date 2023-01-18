import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const Challenges = ({ data }) => (
  <View>
    <Text style={styles.listTitle}>Add Calories Intake</Text>
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={itemData => {
        console.log(itemData.item)
        return (
          <ListItem
            name={itemData.item.name}
      
            uri={itemData.item.url}
          />
        )
      }}

    />
  </View>
);

const styles = StyleSheet.create({
  listTitle: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
    color: 'black',
  }
});

export default Challenges;