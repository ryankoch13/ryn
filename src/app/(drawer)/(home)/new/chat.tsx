import UserList from "@/components/UserList";
import { useSupabase } from "@/providers/SupabaseProvider";
import { User } from "@/types";
import { useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export default function NewChat() {
  const supabase = useSupabase();
  const { user } = useUser();

  const createChannel = useMutation({
    mutationFn: async (clickedUser: User) => {
      // Create channel if it doesn't exist
      const {data: channel} = await supabase
        .from("channels")
        .insert({ type: "direct" })
        .throwOnError()
        .select('*')
        .single();

      if (!channel) {
        throw new Error("Channel is null");
      }

      if (!user) {
        throw new Error("User is null");
      }

      // Add user to the channel
      await supabase
        .from("channel_users")
        .insert({ channel_id: channel.id, user_id: clickedUser.id }).
        throwOnError();

    //  Add self to the channel
    await supabase
        .from("channel_users")
        .insert({ channel_id: channel.id, user_id: user.id }).
        throwOnError();

      return channel;
    },
    onSuccess(newChannel) {
        router.back()
        router.push(`/channel/${newChannel.id}`)
    }
  });

  const handleUserPress = (user: User) => {
    console.log("user", user.first_name);
    createChannel.mutate(user);
  };
  return (
    <View className="bg-white flex-1">
      <UserList onPress={handleUserPress} />
    </View>
  );
}
