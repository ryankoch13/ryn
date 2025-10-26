import { Tabs } from "expo-router";
import {
  NativeTabs,
  VectorIcon,
  Label,
  Icon,
} from "expo-router/unstable-native-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  if (Platform.OS === "ios") {
    return (
      <NativeTabs tintColor="purple">
        <NativeTabs.Trigger name="chat">
          <Label>Chat</Label>
          <Icon
            sf="message.fill"
            drawable="custom_android_drawable"
            src={<VectorIcon family={MaterialCommunityIcons} name="home" />}
          />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <Icon
            sf="gear"
            drawable="custom_settings_drawable"
            src={<VectorIcon family={MaterialCommunityIcons} name="cog" />}
          />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="search" role="search">
          <Icon
            src={<VectorIcon family={MaterialCommunityIcons} name="magnify" />}
            sf="magnifyingglass"
            drawable="custom_android_drawable"
          />
          <Label>Search</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  } else
    return (
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    );
}
