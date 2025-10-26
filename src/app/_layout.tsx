import { Stack } from 'expo-router';
import '../../global.css';
import {ClerkProvider, useAuth} from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ActivityIndicator } from 'react-native';
import SupabaseProvider from '@/providers/SupabaseProvider';

function  RootStack() {
    const {isSignedIn, isLoaded} = useAuth()
    if (!isLoaded) {
        return <ActivityIndicator />
    }
    return (
        <Stack screenOptions={{headerShown: false}}>
        <Stack.Protected guard={!isSignedIn}>
            <Stack.Screen name='(auth)' />
        </Stack.Protected>
        <Stack.Protected guard={!!isSignedIn}>
            <Stack.Screen name='(drawer)' options={{headerShown: false}} />
        </Stack.Protected>
        </Stack>

    )
}

export default function DrawerLayout() {
    return (
        <ClerkProvider tokenCache={tokenCache}>
            <SupabaseProvider>
                <RootStack />
            </SupabaseProvider>
        </ClerkProvider>
        );
}