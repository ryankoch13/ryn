import { Stack } from 'expo-router';
import '../../global.css';

export default function RootLayout() {
    const isAuthenticated = true;

    return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Protected guard={!isAuthenticated}>
            <Stack.Screen name='(auth)' />
        </Stack.Protected>
        <Stack.Protected guard={isAuthenticated}>
            <Stack.Screen name='(drawer)' options={{headerShown: false}} />
        </Stack.Protected>
        </Stack>
        );
}