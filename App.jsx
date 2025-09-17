import React from 'react';
import Navigation from './navigation/index.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return <SafeAreaProvider>{<Navigation />}</SafeAreaProvider>;
}
