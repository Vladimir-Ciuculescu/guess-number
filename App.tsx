import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text } from 'native-base';
import StartGameScreen from './screens/StartGameScreen';
import { SafeAreaView, Platform } from 'react-native';
import GNDismissKeyboard from './components/GNDismissKeyboard';
import { Fragment } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Dices from './assets/Dices.avif';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#10b981',
          marginBottom: '-10%',
        }}>
        <Text fontSize={20} textAlign="center" color="white">
          Guess the number
        </Text>
        <GNDismissKeyboard>
          <LinearGradient
            colors={['#10b981', '#065f46']}
            style={styles.container}>
            <ImageBackground
              source={Dices}
              resizeMode="cover"
              style={{ flex: 1 }}
              imageStyle={styles.backgroundImage}>
              <Fragment>
                <StatusBar style="auto" />
                <StartGameScreen />
              </Fragment>
            </ImageBackground>
          </LinearGradient>
        </GNDismissKeyboard>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10b981',
    marginTop: 20,
  },

  backgroundImage: {
    opacity: 0.75,
  },
});
