import { User } from "@/types";
import { Image, Pressable, Text, View } from "react-native";

type UserListItemProps = {
  user: User;
  onPress?: (user: User) => void;
};

export default function UserListItem({ user, onPress }: UserListItemProps) {
  return (
    <Pressable
      className="flex-row items-center gap-4 p-4 border-b border-gray-100"
      onPress={() => onPress?.(user)}
    >
      <View className="bg-gray-200 w-12 h-12 rounded-full items-center justify-center">
        {user.avatar_url ? (
          <Image
            source={{ uri: user.avatar_url }}
            className="w-12 h-12 rounded-full"
          />
        ) : (
          <Text>{`${user.first_name?.charAt(0).toUpperCase()}${user.last_name?.charAt(0).toUpperCase()}`}</Text>
        )}
      </View>
      <Text className="text-gray-900 font-medium">
        {user.first_name} {user.last_name}
      </Text>
    </Pressable>
  );
}
