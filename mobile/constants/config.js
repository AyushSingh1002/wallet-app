// Configuration file for environment variables
// Replace these with your actual values

export const CLERK_CONFIG = {
  publishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || 'your_clerk_publishable_key_here',
};

export const API_CONFIG = {
  baseUrl: process.env.EXPO_PUBLIC_API_URL || 'https://wallet-app-q1ed.onrender.com/api',
};
