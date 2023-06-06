import { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import GNButton from '../components/GNButton';
import { Box, Text, View, VStack } from 'native-base';

interface GameScreenProps {
  userNumber: string;
}

const GameScreen: React.FC<GameScreenProps> = ({ userNumber }) => {
  const [computerChoice, setComputerChoice] = useState<string>('');

  const generateRandomNumber: any = (exclude: number) => {
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    if (randomNumber === exclude) {
      return generateRandomNumber(exclude);
    } else {
      return randomNumber;
    }
  };

  useEffect(() => {
    const randomNumber = generateRandomNumber(userNumber);
    setComputerChoice(randomNumber);
  }, []);

  return (
    <View mt={10}>
      <VStack alignItems="center" space={5}>
        <Text color="amber.400" fontSize={22}>
          Opponent's guess
        </Text>
        <Box
          borderColor="amber.400"
          borderWidth={3}
          borderStyle="solid"
          borderRadius={12}
          justifyContent="center"
          alignItems="center"
          w={20}
          h={20}>
          <Text color="amber.400" fontSize={30}>
            {computerChoice}
          </Text>
        </Box>
      </VStack>
    </View>
  );
};

export default GameScreen;
