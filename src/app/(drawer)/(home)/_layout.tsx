import {Stack, Tabs} from 'expo-router';

export default function HomeLayout() {
    return <Stack>
        <Stack.Screen 
            name='(tabs)' options={{headerShown: false}} 
            options={{headerShown: false, title: 'Home'}}
            />
            <Stack.Screen name='channel/[id]' 
            options={{
                headerBackButtonDisplayMode: 'minimal',
                headerLargeTitle: true, 
                title: 'Channel',
            }}
            />
    </Stack>;
}