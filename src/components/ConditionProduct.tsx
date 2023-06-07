import { Center, Text } from 'native-base';

type Props = {
  used?: boolean;
};

export const ConditionProduct = ({ used = false }: Props) => {
  return (
    <Center px={3} py={1} bg={used ? 'gray.200' : 'blue.500'} borderRadius={33}>
      <Text color="gray.700" fontFamily="heading">
        {used ? 'Usado' : 'Novo'}
      </Text>
    </Center>
  );
};
