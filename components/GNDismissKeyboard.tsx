import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

interface GNDismissKeayboardProps {
  Component: React.ComponentClass;
}

const GNDismissKeayboard: React.FC<any> = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default GNDismissKeayboard;
