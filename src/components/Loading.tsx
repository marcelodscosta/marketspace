import { Spinner, VStack } from 'native-base';

export const Loading = () => {
  return (
    <VStack flex={1} justifyContent="center" bg="blue.200">
      <Spinner color="white" accessibilityLabel="Loading posts" size="lg" />
    </VStack>
  );
};
