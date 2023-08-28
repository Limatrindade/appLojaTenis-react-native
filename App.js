import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton';

import Routes from './src/router';

export default function App() {

  const fonts = useFonts({
    Anton_400Regular,
  });

  return (
    <>
      <StatusBar style="auto" />
      <Routes/>
    </>
  );
}

