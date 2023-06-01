import { Button } from 'native-base';

interface GNButtonProps {
  text: String;
  onPress: () => void;
}

const GNButton: React.FC<GNButtonProps> = ({ text, onPress }) => {
  return (
    <Button
      bg="amber.400"
      variant="unstyled"
      onPress={onPress}
      _pressed={{ opacity: 0.75 }}
      width={100}>
      {text}
    </Button>
  );
};

export default GNButton;
