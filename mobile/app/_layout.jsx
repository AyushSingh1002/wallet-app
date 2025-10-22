import ErrorBoundary from "@/components/ErrorBoundary";
import SafeScreen from "@/components/SafeScreen";
import { CLERK_CONFIG } from "@/constants/config";
import { ClerkProvider, tokenCache } from '@clerk/clerk-expo';
import { Slot } from "expo-router";

export default function RootLayout() {
  // Check if Clerk is properly configured
  if (!CLERK_CONFIG.publishableKey || CLERK_CONFIG.publishableKey === 'your_clerk_publishable_key_here') {
    console.warn('Clerk publishable key not configured. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment.');
  }

  return (
    <ErrorBoundary>
      <SafeScreen>
        <ClerkProvider 
          publishableKey={CLERK_CONFIG.publishableKey}
          tokenCache={tokenCache}
        >
          <Slot screenOptions={{headerShown: false}} />
        </ClerkProvider>
      </SafeScreen>
    </ErrorBoundary>
  );
} 
