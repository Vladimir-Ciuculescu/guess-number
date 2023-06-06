import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

interface GNDismissKeayboardProps {
  children: ReactNode;
}

const GNDismissKeyboard: React.FC<GNDismissKeayboardProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default GNDismissKeyboard;
