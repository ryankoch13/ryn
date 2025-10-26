import { useAuth } from "@clerk/clerk-expo";
import { View, Text, Button } from "react-native";
import { useSupabase } from "@/providers/SupabaseProvider";

export default function SettingsScreen() {
  const { signOut } = useAuth();

  const supabase = useSupabase()

  const testInsert = async () => {
    const { data, error } = await supabase
      .from("test")
      .insert({ test: "testing insert3", id: 4 });
    console.log(error);
  };

  const testFetch = async () => {
    const {data, error} = await supabase.from('test').select('*')

    console.log(JSON.stringify(data, null, 1))
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl">Settings</Text>
      <Button title="Sign out" onPress={() => signOut()} />
      <Button title="testinsert" onPress={testInsert} />
      <Button title="testfetch" onPress={testFetch} />
    </View>
  );
}
