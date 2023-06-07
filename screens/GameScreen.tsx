import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import GNButton from '../components/common/GNButton';
import { Box, HStack, Text, View, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
interface GameScreenProps {
  userNumber: string;
  setEndGame: () => void;
}

enum directions {
  lower = 'lower',
  greater = 'greater',
}

const GameScreen: React.FC<GameScreenProps> = ({ userNumber, setEndGame }) => {
  const [computerChoice, setComputerChoice] = useState<string>('');
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);

  const generateRandomNumber: any = (
    min: number,
    max: number,
    exclude: number,
  ) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
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
        style: 'cancel',
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
      setMax(parseInt(computerChoice) - 1);
    } else if (direction === directions.greater) {
      setMin(parseInt(computerChoice) + 1);
    }
  };

  useEffect(() => {
    const randomNumber = generateRandomNumber(min, max, userNumber);
    setComputerChoice(randomNumber.toString());
  }, [min, max]);

  useEffect(() => {
    if (computerChoice === userNumber) {
      setEndGame();
    }
  }, [computerChoice, userNumber, setEndGame]);

  return (
    <View mt={10}>
      <VStack alignItems="center" space={5}>
        <Text color="amber.400" fontSize={28} fontFamily="ChrushtyRock">
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
          <Text color="amber.400" fontSize={30} fontFamily="ChrushtyRock">
            {computerChoice}
          </Text>
        </Box>
        <Text color="amber.400" fontSize={20} fontFamily="ChrushtyRock">
          Was the number higher or lower ?
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
              text={
                <Text style={{ fontSize: 24 }}>
                  <AntDesign name="minus" color="black" size={18} />
                </Text>
              }
              onPress={() => nextGuessHandler(directions.lower)}
            />
            <GNButton
              style={{ borderRadius: 15 }}
              text={
                <Text style={{ fontSize: 24 }}>
                  <AntDesign name="plus" color="black" size={18} />
                </Text>
              }
              onPress={() => nextGuessHandler(directions.greater)}
            />
          </HStack>
        </Box>
      </VStack>
    </View>
  );
};

export default GameScreen;
