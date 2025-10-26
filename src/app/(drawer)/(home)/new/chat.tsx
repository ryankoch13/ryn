import UserList from "@/components/UserList";
import { User } from "@/types";
import { Text, View } from "react-native";

export default function NewChat() {
    const handleUserPress = (user: User) => {
        console.log('user', user.first_name)
    }
    return (
        <View className="bg-white flex-1">
            <UserList onPress={handleUserPress} />
        </View>
    )
}