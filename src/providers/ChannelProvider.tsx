import { createContext, PropsWithChildren, useContext } from "react";
import { useSupabase } from "./SupabaseProvider";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text, View } from "react-native";
import { Channel, ChannelWithUsers } from "@/types";

type ChannelContext = {
  channel: ChannelWithUsers | null;
};
const ChannelContext = createContext({
  channel: null,
});

type ChannelProviderProps = PropsWithChildren<{
  id: string;
}>;

export default function ChannelProvider({
  children,
  id,
}: ChannelProviderProps) {
  const supabase = useSupabase();

  const {
    data: channel,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["channels", id],
    queryFn: async () => {
      const { data } = await supabase
        .from("channels")
        .select("*, users(*)")
        .eq("id", id)
        .throwOnError()
        .single();
      return data;
    },
  });

  if (isLoading) {
    return <ActivityIndicator size={52} />;
  }

  if (error || !channel) {
    return (
      <View>
        <Text>Channel not found</Text>
      </View>
    );
  }
  return (
    <ChannelContext.Provider value={{ channel }}>
      {children}
    </ChannelContext.Provider>
  );
}

export const useChannel = () => useContext(ChannelContext);
