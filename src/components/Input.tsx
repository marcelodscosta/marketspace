import { IInputProps, Input as InputBase, VStack } from 'native-base';

type Props = IInputProps & {};

export const Input = ({ ...rest }: Props) => {
  return (
    <VStack w="full" bg="gray.700" mt={4}>
      <InputBase {...rest} size="md" px={4} py={3} borderRadius={6} />
    </VStack>
  );
};
