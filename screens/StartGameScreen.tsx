import { HStack, VStack, Text } from 'native-base';
import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import GNButton from '../components/common/GNButton';
import GNTextInput from '../components/common/GNTextInput';

interface StartGameScreenProps {
  onConfirm: (e: string) => void;
}

const StartGameScreen: React.FC<StartGameScreenProps> = ({ onConfirm }) => {
  const [number, setNumber] = useState<string>('');

  const resetNumber = () => {
    setNumber('');
  };

  const confirmNumber = () => {
    if (number === '0' || number === '') {
      Alert.alert('Invalid value !', 'Number must be between 1 and 99 !', [
        {
          text: 'Retry',
          style: 'destructive',
          onPress: () => resetNumber(),
        },
      ]);
    } else {
      onConfirm(number);
    }
  };

  return (
    <View style={styles.container}>
      <VStack style={{ width: '100%' }} space={3}>
        <Text fontSize={24} textAlign="center" color="amber.400">
          Select a number
        </Text>
        <GNTextInput value={number} setValue={setNumber} />
        <HStack justifyContent="space-between" width="90%" alignSelf="center">
          <GNButton onPress={resetNumber} text={<Text>Reset</Text>} />
          <GNButton onPress={confirmNumber} text={<Text>Confirm</Text>} />
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
});
