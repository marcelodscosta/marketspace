import LogoP from '@assets/logo_p.svg';
import { Heading, Text, VStack } from 'native-base';

export const SignUp = () => {
  return (
    <VStack flex={1} bg="gray.600">
      <VStack alignItems="center" mt={16}>
        <LogoP />
        <Heading fontFamily="heading" fontSize="lg">
          Boas vindas!
        </Heading>
        <Text fontFamily="body" fontSize="sm">
          Crie sua conta e use o espaço para comprar
        </Text>
        <Text>itens variados e vender seus produtos</Text>
      </VStack>
    </VStack>
  );
};
