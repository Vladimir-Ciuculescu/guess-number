import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text } from 'native-base';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { SafeAreaView, Platform } from 'react-native';
import GNDismissKeyboard from './components/common/GNDismissKeyboard';
import { Fragment, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Dices from './assets/Dices.avif';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState<string>('');
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    ChrushtyRock: require('./assets/fonts/ChrustyRock.ttf'),
    Freedom: require('./assets/fonts/Freedom.ttf'),
  });

  const confirmUserNumber = (number: string) => {
    setUserNumber(number);
  };

  const setEndGameHandler = () => {
    setGameOver(true);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen onConfirm={confirmUserNumber} />;

  if (userNumber !== '') {
    screen = (
      <GameScreen userNumber={userNumber} setEndGame={setEndGameHandler} />
    );
  }

  if (gameOver) {
    screen = <GameOverScreen />;
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#10b981',
          marginBottom: '-10%',
        }}>
        <Text
          fontSize={20}
          textAlign="center"
          color="white"
          fontFamily="Freedom">
          Guess number
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
                {screen}
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
