import { Alert, FlatList } from "react-native";
import UserListItem from "./UserListItem";
import { User } from "@/types";
import { useSupabase } from "@/providers/SupabaseProvider";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { Tables } from "@/types/database.types";

type UserListProps = {
  onPress?: (user: User) => void;
};

type User = Tables<'users'>

export default function UserList({ onPress }: UserListProps) {
  const supabase = useSupabase();

  const { user } = useUser();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .neq("id", user?.id || '');
      if (error) {
        Alert.alert("Error", error.message);
      } else {
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} onPress={onPress} />}
    />
  );
}
