import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import WorkOutItem from './WorkOutItem';

const data = [
  {
    id: 1,
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrWjvaDICfttvpBxF96QXVcsf6GgRrciB7Q&usqp=CAU',
    title: 'Chicken Salad',
    time: '30 min',
    times: 'Meal',
  },
  {
    id: 2,
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUuPl-bRBBHAczyMykSpSGREyPQfRnzHgZw&usqp=CAU',
    title: 'Chicken Biryani',
    time: '2:00',
    times: 'Meal',
  },
  {
    id: 9,
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2XMbrUJquoehQL9BOfbcsLIN_rNkK5FOeA&usqp=CAU',
    title: 'Smoothie',
    time: '10 min',
    times: 'Drink',
  },
];

const Workouts = () => {
  return (
    <View style={styles.workouts}>
      <View style={styles.workoutHeader}>
        <Text style={styles.recentWorkout}>Recent Recipes</Text>
        <View style={styles.workoutsRight}>
          <Text style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 15,
            marginRight: 10,
          }}>
            See all
          </Text>
        </View>
      </View>
      <React.Fragment>
        <FlatList 
          data={data}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={itemData => {
            return (
              <WorkOutItem
                title={itemData.item.title}
                time={itemData.item.time}
                times={itemData.item.times}
                uri={itemData.item.url}
              />
            )
          }}
        />
      </React.Fragment>

    </View>
  );
};

const styles = StyleSheet.create({
  workouts: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black'
   
  },
  recentWorkout: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'black'
  },
  workoutsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black'
  },
  
});

export default Workouts;