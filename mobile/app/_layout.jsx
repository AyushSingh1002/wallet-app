import ErrorBoundary from "@/components/ErrorBoundary";
import SafeScreen from "@/components/SafeScreen";
import { CLERK_CONFIG } from "@/constants/config";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import * as SecureStore from "expo-secure-store";

// ✅ Custom token cache using SecureStore
const tokenCache = {
  async getToken(key) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      console.log("SecureStore get error:", err);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.log("SecureStore save error:", err);
    }
  },
};

export default function RootLayout() {
  if (
    !CLERK_CONFIG.publishableKey ||
    CLERK_CONFIG.publishableKey === "your_clerk_publishable_key_here"
  ) {
    console.warn(
      "⚠️ Clerk publishable key not configured. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment."
    );
  }

  return (
    <ErrorBoundary>
      <SafeScreen>
        <ClerkProvider
          publishableKey={CLERK_CONFIG.publishableKey}
          tokenCache={tokenCache} // 👈 persistent storage
        >
          <Slot screenOptions={{ headerShown: false }} />
        </ClerkProvider>
      </SafeScreen>
    </ErrorBoundary>
  );
}
