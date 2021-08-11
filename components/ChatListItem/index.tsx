import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props

    console.log("chatRoom")
    console.log(chatRoom)
    const user = chatRoom.users[1]
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>Yesterday</Text>
            {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
        </View>
    )

}

export default ChatListItem;