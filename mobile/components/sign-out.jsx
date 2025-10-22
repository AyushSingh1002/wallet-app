import { useClerk } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/home.style";
import { Ionicons } from "@expo/vector-icons";
import { COLO$ } from "../constants/color";

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you wanna leave?🥹🥺", [
      { text: "No", style: "cancel" },
      { text: "Yes", style: "destructive", onPress: signOut },
    ]);
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLO$.text} />
    </TouchableOpacity>
  );
};