import { Button, Text, View } from 'native-base';

interface GNButtonProps {
  text: String;
}

const GNButton: React.FC<GNButtonProps> = ({ text }) => {
  return <Button variant="unstyled">{text}</Button>;
};

export default GNButton;
