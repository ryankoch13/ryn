import { Channel } from "@/types";
import { Image, Pressable, Text, View } from "react-native";
import {formatDistanceToNow} from 'date-fns';
import { Link } from "expo-router";

type ChannelListItemProps = {
    channel: Channel
}

export default function ChannelListItem({channel}: ChannelListItemProps) {
    return (
        <Link href={`/channel/${channel.id}`} asChild>
        <Pressable className='flex-row gap-3 p-4 border-b border-gray-200' >
            {/* Channel Image */}
            <Image src={channel.avatar} className='w-12 h-12 rounded-full' />
            <View className="flex-1">
            <Text className='font-bold text-lg text-neutral-900' numberOfLines={1}>{channel.name}</Text>
            <Text className="text-sm text-neutral-500" numberOfLines={1}>{channel.lastMessage?.content || "No messages yet"}</Text>
            </View>
            <Text className="text-xs text-neutral-500">{channel.lastMessage && formatDistanceToNow(channel.lastMessage?.createdAt, {addSuffix: true})}</Text>
        </Pressable>
        </Link>
    )
}