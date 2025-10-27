import { Message } from "@/types";
import { Image, Text, View } from "react-native";
import SupaImage from "./SupaImage";

type MessageListItemProps = {
    message: Message
    isOwnMessage?: boolean

}

export default function MessageListItem({ message, isOwnMessage }: MessageListItemProps) {
    return (
        <View className={`flex-row mb-2 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
            <View className={`max-w-[75%] gap-2 ${isOwnMessage ? 'items-end' : 'items-start'}`}>
                {message.image && <SupaImage path={message.image} className="w-48 h-48 rounded" />}
                {message.content &&
                    <View className={`px-4 py-2 rounded-2xl ${isOwnMessage ? 'bg-blue-500 rounded-br-sm' : 'bg-gray-200 rounded-tl-sm'}`}>
                        <Text className={`text-xl ${!isOwnMessage ? 'color-slate-800' : 'color-slate-50'}`}>{message.content}</Text>
                    </View>
                }
            </View>
        </View>
    )
}