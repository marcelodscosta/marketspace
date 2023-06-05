import { Text, VStack } from 'native-base';

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
  return <VStack><Text>Página Carregada</Text></VStack>

}
