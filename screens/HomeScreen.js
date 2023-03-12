import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { HomeScreenPics} from '../constants/Pics';
import Card from '../components/Card';


const HomeScreen = () => {
  console.log("Card: ", Card); // got undefined error w/0 put the {card}
  return (
    <View style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          infinite
          backgroundColor='red'
          cardHorizontalMargin={0}
          stackSize={2}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    Color: 'yellow',
  },
})

export default HomeScreen