import { StatusBar } from 'react-native';

import { NativeBaseProvider } from 'native-base';

import { theme } from './src/Theme';

import { Loading } from '@components/Loading';

import { Routes } from '@routes/index';

import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from '@expo-google-fonts/karla';

export default function App() {
  let [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="default" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
