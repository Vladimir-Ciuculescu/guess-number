import { Text, View, Image, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
import BackgroundImage from '../assets/Game_over_background_AI.jpg';

const GameOverScreen = () => {
  return (
    <View mt={10}>
      <VStack space={5} alignItems="center">
        <Text color="amber.400" fontSize={36} fontFamily="ChrushtyRock">
          Game over
        </Text>
        <View style={styles.imageContainer}>
          <Image
            alt="Game over image"
            style={styles.image}
            source={BackgroundImage}
          />
        </View>
      </VStack>
      <Text
        color="amber.400"
        textAlign="center"
        fontSize={22}
        mt={5}
        fontFamily="ChrushtyRock">
        Your phone needed{'  '}
        <Text fontSize={20} fontFamily="ChrushtyRock" color="info.600">
          13
        </Text>
        {'  '}
        rounds to guess the number{'  '}
        <Text fontSize={20} fontFamily="ChrushtyRock" color="info.600">
          25
        </Text>
        {'  '}
      </Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbbf24',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
