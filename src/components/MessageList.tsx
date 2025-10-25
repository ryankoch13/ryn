import { FlatList, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import messages from "@/data/messages";
import MessageListItem from "./MessageListItem";

export default function MessageList() {
    const { id } = useLocalSearchParams<{id: string}>();

    const myId='u-1'

    return (
            <FlatList 
            data={messages}
            contentContainerClassName="p-4"
            renderItem={({item}) => 
                <MessageListItem message={item} isOwnMessage={item.user.id === myId} />
            }
            showsVerticalScrollIndicator={false}
            inverted
            />
    )
}