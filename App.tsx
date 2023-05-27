import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import StartGameScreen from './screens/StartGameScreen';
import { SafeAreaView } from 'react-native';
import GNDismissKeyboard from './components/GNDismissKeyboard';
import { Fragment } from 'react';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#10b981' }}>
        <Text style={styles.title}>Guess the number</Text>
        <GNDismissKeyboard>
          <View style={styles.container}>
            <Fragment>
              <StatusBar style="auto" />
              <StartGameScreen />
            </Fragment>
          </View>
        </GNDismissKeyboard>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
