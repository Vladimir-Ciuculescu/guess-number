import { HStack, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { TextInput, StyleSheet, View, Text, Alert } from 'react-native';
import GNButton from '../components/GNButton';

const StartGameScreen = () => {
  const [number, setNumber] = useState<string>('');

  const resetNumber = () => {
    setNumber('');
  };

  const confirmNumber = () => {
    if (number === '0' || number === '') {
      Alert.alert('Invalid number', 'Number must be between 1 and 99', [
        {
          text: 'Retry',
          style: 'destructive',
          onPress: () => resetNumber(),
        },
      ]);
    }
  };

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <View style={styles.container}>
      <VStack style={{ width: '100%' }} space={3}>
        <Text style={styles.title}>Select a number</Text>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.numberInput}
          value={number}
          selectionColor="#fbbf24"
          onChangeText={(e) => setNumber(e)}
        />
        <HStack justifyContent="space-between" width="90%" alignSelf="center">
          <GNButton onPress={resetNumber} text="Reset" />
          <GNButton onPress={confirmNumber} text="Confirm" />
        </HStack>
      </VStack>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: 'black',
    marginTop: '5%',
    marginHorizontal: '7%',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#065f46',
  },
  title: {
    color: '#fbbf24',
    alignSelf: 'center',
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fbbf24',
    borderBottomColor: '#fbbf24',
    borderBottomWidth: 2,
    width: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
