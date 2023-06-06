import { Button } from 'native-base';
import { StyleProp } from 'react-native';

interface GNButtonProps {
  text: JSX.Element;
  onPress: () => void;
  style?: any;
}

const GNButton: React.FC<GNButtonProps> = ({ text, onPress, style }) => {
  return (
    <Button
      bg="amber.400"
      variant="unstyled"
      onPress={onPress}
      style={{ ...style }}
      _pressed={{ opacity: 0.75 }}
      width={100}>
      {text}
    </Button>
  );
};

export default GNButton;
