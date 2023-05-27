import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import GNButton from '../components/GNButton';
import { TextField } from 'native-base';

const GameScreen = () => {
  const [number, setNumber] = useState('');

  return (
    <View>
      <TextField
        onChangeText={(text) => setNumber(text)}
        value={number}
        style={{ backgroundColor: 'red' }}
      />
      <GNButton text="Cancel" />
      <GNButton text="Confirm" />
    </View>
  );
};

export default GameScreen;
