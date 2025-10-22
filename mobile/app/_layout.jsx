import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider, tokenCache } from '@clerk/clerk-expo';
import { Slot } from "expo-router";
export default function RootLayout() {
  return <SafeScreen>
    <ClerkProvider tokenCache={tokenCache}>
    <Slot screenOptions={{headershown:false}}/>
    </ClerkProvider>
  </SafeScreen>
  ;
} 
