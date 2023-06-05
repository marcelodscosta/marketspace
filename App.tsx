import { StatusBar } from 'react-native';

import { NativeBaseProvider, Text } from 'native-base';

import { theme } from './src/Theme';

import { Loading } from '@components/Loading';

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
      {fontsLoaded ? <Text>Carregado</Text> : <Loading />}
    </NativeBaseProvider>
  );
}
