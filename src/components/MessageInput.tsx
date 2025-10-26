import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MessageInput() {
  const [message, setMessage] = useState<string>("");

  const handleSend = () => {
    setMessage("");
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={80}>
    <SafeAreaView
      edges={["bottom"]}
      className="p-3 pb-0 flex-row gap-4 bg-white items-center border-t border-gray-200"
    >
      <Pressable className="bg-gray-200 rounded-full p-2 w-10 h-10">
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
        className={`rounded-full p-2 w-10 h-10 items-center justify-center ${message ? "bg-blue-500" : "bg-gray-200"}`}
        onPress={handleSend}
        disabled={!message}
      >
        <Ionicons
          name="send"
          size={20}
          color={message.length > 0 ? "white" : "#6B7280"}
        />
      </Pressable>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
