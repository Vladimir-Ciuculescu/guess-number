import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import GameScreen from './screens/GameScreen';
import { NativeBaseProvider, View } from 'native-base';
import StartGameScreen from './screens/StartGameScreen';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 0.05, backgroundColor: '#10b981' }}>
        <Text style={{ textAlign: 'center' }}>Guess the number</Text>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1 }}>
        <StartGameScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
