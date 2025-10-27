import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

import SupabaseProvider from "@/providers/SupabaseProvider";
import "../../global.css";

const queryClient = new QueryClient();

function RootStack() {
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={!!isSignedIn}>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function DrawerLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider tokenCache={tokenCache}>
        <SupabaseProvider>
          <RootStack />
        </SupabaseProvider>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
