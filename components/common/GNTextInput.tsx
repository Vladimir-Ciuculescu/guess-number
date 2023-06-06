import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface GNTextInputProps {
  value: string;
  setValue: (e: string) => void;
}

const GNTextInput: React.FC<GNTextInputProps> = ({ value, setValue }) => {
  return (
    <TextInput
      maxLength={2}
      keyboardType="number-pad"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.numberInput}
      value={value}
      selectionColor="#fbbf24"
      onChangeText={(e) => setValue(e)}
    />
  );
};

export default GNTextInput;

const styles = StyleSheet.create({
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
