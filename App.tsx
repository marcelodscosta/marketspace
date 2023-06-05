import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Karla_400Regular, Karla_700Bold, useFonts } from '@expo-google-fonts/karla';

export default function App() {

  let [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
