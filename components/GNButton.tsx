import { Button } from 'native-base';
import { StyleSheet } from 'react-native';

interface GNButtonProps {
  text: String;
  onPress: () => void;
}

const GNButton: React.FC<GNButtonProps> = ({ text, onPress }) => {
  return (
    <Button
      color="red.300"
      bg="amber.400"
      variant="unstyled"
      onPress={onPress}
      _pressed={styles.pressed}>
      {text}
    </Button>
  );
};

export default GNButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
