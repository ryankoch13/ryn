import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSupabase } from "@/providers/SupabaseProvider";
import { useUser } from "@clerk/clerk-expo";
import { Channel, Message } from "@/types";

export default function MessageInput({ channel }: { channel: Channel }) {
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  const supabase = useSupabase();
  const { user } = useUser();
  const queryCleint = useQueryClient();

  const newMessage = useMutation({
    mutationFn: async () => {
      const { data } = await supabase
        .from("messages")
        .insert({
          content: message,
          user_id: user!.id,
          channel_id: channel.id,
        })
        .select("*")
        .single()
        .throwOnError();
      return data;
    },
    onMutate: async (message, queryCleint) => {
      await queryCleint.client.cancelQueries({ queryKey: ["messages"] });
      const previousMessages = queryCleint.client.getQueryData(["messages"]);
      queryCleint.client.setQueryData(["messages"], (old: Message[]) => [
        ...old,
        message,
      ]);
      return { previousMessages };
    },
    onSuccess() {
      queryCleint.invalidateQueries({ queryKey: ["messages", channel.id] });
      setImage(null);
      setMessage("");
    },
    onError(error) {
      Alert.alert("Failed", error.message);
    },
  });
  const handleSend = () => {
    newMessage.mutate();
    setImage(null);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const isMessageEmpty = !message && !image;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <SafeAreaView
        edges={["bottom"]}
        className="p-3 pb-0 gap-4 bg-white border-t border-gray-200 rounded-t-2xl"
      >
        {image && (
          <View className="w-32 h-32">
            <Image
              source={{ uri: image }}
              className="w-full h-full rounded-md"
            />
            <Pressable
              onPress={() => setImage(null)}
              className="absolute -top-2 -right-2 bg-gray-200 w-6 h-6 items-center justify-center rounded-full opacity-95"
            >
              <Ionicons name="close" size={14} color="gray" />
            </Pressable>
          </View>
        )}
        <View className="flex-row items-center gap-2">
          <Pressable
            className="bg-gray-200 rounded-full p-2 w-10 h-10"
            onPress={pickImage}
          >
            <Ionicons name="image" size={20} color="#6B7280" />
          </Pressable>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type something..."
            multiline
            className="bg-gray-100 flex-1 rounded-3xl px-4 py-3 text-gray-900 text-base max-h-[120px]"
          />
          <Pressable
            className={`rounded-full p-2 w-10 h-10 items-center justify-center ${!isMessageEmpty ? "bg-blue-500" : "bg-gray-200"}`}
            onPress={handleSend}
            disabled={isMessageEmpty}
          >
            <Ionicons
              name="send"
              size={20}
              color={!isMessageEmpty ? "white" : "#6B7280"}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
