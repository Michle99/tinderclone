import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { Messages } from '../constants/Messages'
import { Avatar } from 'react-native-paper';


const Item = ({item, onPress, backgroundColor, textColor}) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Avatar.Image
      size={100}
      source={item.pic}
    />
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const MessagesScreen = () => {
  
    const [selectedId, setSelectedId] = useState();
    const renderItem = ({item}) => {
      const backgroundColor = item.title === selectedId ? '#6e3bce' : '#f9c2bc';
      const color = item.title === selectedId ? 'white' : 'black';

      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Messages}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          extraData={selectedId}
              
        />
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#3F3F3F',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 56,
  }
})

export default MessagesScreen
