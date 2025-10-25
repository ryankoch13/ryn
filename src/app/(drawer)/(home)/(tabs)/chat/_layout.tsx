import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function ChatLayout() {
    return <Stack>
        <Stack.Screen
            name="index"
            options={({navigation}) => ({
                title: 'Chat',
                headerLargeTitle: true,
                headerTransparent: true,
                headerLeft: () => (
                    <Ionicons
                        name='menu-outline'
                        size={28}
                        className='px-1' 
                        color='gray' 
                        onPress={() => { navigation.openDrawer()}} 
                        />
                ),
                headerRight: () => (
                    <Ionicons name="add" size={28} className="px-1" color="gray" />
                )
            }
        )}
        />
    </Stack>
}