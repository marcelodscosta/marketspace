import { NativeBaseProvider, Text, VStack } from 'native-base';

import { theme } from './src/Theme';

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
      <VStack>
        <Text>Página Carregada</Text>
      </VStack>
    </NativeBaseProvider>
  );

}
