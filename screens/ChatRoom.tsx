import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';

import ChatRooms from '../data/ChatRooms';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chatRoom={ChatRooms[0]} /> */}
      <FlatList style={{ width: '100%' }}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
