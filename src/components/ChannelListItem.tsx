import { Channel, ChannelWithUsers } from "@/types";
import { Image, Pressable, Text, View } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { Link } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

type ChannelListItemProps = {
  channel: ChannelWithUsers;
};

export default function ChannelListItem({ channel }: ChannelListItemProps) {
    const { user } = useUser();

    const otherUser = channel.users.find((u) => u.id !== user!.id);

    let channelName = channel.name;
    if (channel.type === 'direct') {
        channelName = otherUser?.full_name || 'Unknown';
    }

  return (
    <Link href={`/channel/${channel.id}`} asChild>
      <Pressable className="flex-row gap-3 p-4 border-b border-gray-200">
        {/* Channel Image */}
        {otherUser?.avatar_url ? (<Image
          source={{ uri: otherUser?.avatar_url }}
          className="w-12 h-12 rounded-full"
        />) : (
            <View className="w-12 h-12 rounded-full bg-neutral-200 items-center justify-center">
                <Text className='text-neutral-600 font-bold'>{otherUser?.first_name?.charAt(0)?.toUpperCase() || '?'}</Text>
            </View>
        )
        }
        <View className="flex-1">
          <Text
            className="font-bold text-lg text-neutral-900"
            numberOfLines={1}
          >
            {otherUser?.full_name || 'Unknown'}
          </Text>
          <Text className="text-sm text-neutral-500" numberOfLines={1}>
            {channel.lastMessage?.content || "No messages yet"}
          </Text>
        </View>
        <Text className="text-xs text-neutral-500">
          {channel.lastMessage &&
            formatDistanceToNow(channel.lastMessage?.createdAt, {
              addSuffix: true,
            })}
        </Text>
      </Pressable>
    </Link>
  );
}
