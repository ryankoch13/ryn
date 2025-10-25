import { Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import channels from "@/data/channels";

export default function ChannelScreen() {
    const { id } = useLocalSearchParams<{id: string}>();

    const channel = channels.find(c => c.id === id)

    if (!channel) {
        return (<View>
            <Text>Channel not found</Text>
        </View>)
    }

    return (
        <View className='flex-1 items-center justify-center'>
            <Stack.Screen options={{title: channel.name}} />
            <Text>Channel Screen: {channel.name}</Text>
        </View>
    )
}