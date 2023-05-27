import { Fragment, useState } from 'react';
import {
  TextInput,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import GNButton from '../components/GNButton';
import { KeyboardAvoidingView, TextField, VStack, View } from 'native-base';
import GNDismissKeayboard from '../components/GNDismissKeyboard';

const StartGameScreen = () => {
  const [number, setNumber] = useState('awd');

  return (
    <View
      mt={10}
      mx={5}
      background="emerald.800"
      borderRadius={10}
      style={styles.container}>
      <GNDismissKeayboard>
        <TextInput
          keyboardType="numeric"
          maxLength={2}
          value={number}
          onChangeText={setNumber}
          style={styles.numberInput}
        />
      </GNDismissKeayboard>

      <GNButton text="Cancel" />
      <GNButton text="Confirm" />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'brown',
    borderBottomColor: 'brown',
    borderBottomWidth: 2,
    width: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
