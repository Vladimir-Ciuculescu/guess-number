import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import GNButton from '../components/common/GNButton';
import { Box, HStack, Text, View, VStack } from 'native-base';

interface GameScreenProps {
  userNumber: string;
}

enum directions {
  lower = 'lower',
  greater = 'greater',
}

const GameScreen: React.FC<GameScreenProps> = ({ userNumber }) => {
  const [computerChoice, setComputerChoice] = useState<string>('');
  let minValue = 1;
  let maxValue = 99;

  const generateRandomNumber: any = (
    min: number,
    max: number,
    exclude: number,
  ) => {
    console.log(max);
    const randomNumber = Math.floor(Math.random() * max - min) + min;
    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  };

  const displayLieMessage = () => {
    Alert.alert(`Don't lie`, 'You lied to the computer !', [
      {
        text: 'Retry',
        style: 'destructive',
      },
    ]);
  };

  const nextGuessHandler = (direction: directions) => {
    if (
      (direction === directions.lower && computerChoice < userNumber) ||
      (direction === directions.greater && computerChoice > userNumber)
    ) {
      displayLieMessage();
      return;
    }
    if (direction === directions.lower) {
      maxValue = parseInt(computerChoice);
    } else if (direction === directions.greater) {
      minValue = parseInt(computerChoice);
    }
    const newGuess = generateRandomNumber(minValue, maxValue, computerChoice);
    setComputerChoice(newGuess);
  };

  useEffect(() => {
    const randomNumber = generateRandomNumber(minValue, maxValue, userNumber);
    setComputerChoice(randomNumber);
  }, []);

  return (
    <View mt={10}>
      <VStack alignItems="center" space={5}>
        <Text color="amber.400" fontSize={28}>
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
        <Text color="amber.400" fontSize={20}>
          Was the number higher or lower ?{' '}
        </Text>
        <Box
          w="80%"
          borderRadius={10}
          h={20}
          bg="#10b981"
          justifyContent="center">
          <HStack justifyContent="space-evenly">
            <GNButton
              style={{ borderRadius: 15 }}
              text={<Text style={{ fontSize: 24 }}>-</Text>}
              onPress={() => nextGuessHandler(directions.lower)}
            />
            <GNButton
              style={{ borderRadius: 15 }}
              text={<Text style={{ fontSize: 24 }}>+</Text>}
              onPress={() => nextGuessHandler(directions.greater)}
            />
          </HStack>
        </Box>
      </VStack>
    </View>
  );
};

export default GameScreen;
