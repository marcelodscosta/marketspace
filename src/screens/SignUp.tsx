import { Center, HStack, Heading, Text, VStack } from 'native-base';

import LogoP from '@assets/logo_p.svg';

import Pencil from '@assets/pencil-simple-line.svg';

import { UserPhoto } from '@components/UserPhoto';

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

      <VStack flex={1} alignItems="center" mt={8}>
        <HStack alignItems="flex-end">
          <UserPhoto size={32} />
          <Center bg="blue.200" w={12} h={12} rounded="full" ml={-12}>
            <Pencil />
          </Center>
        </HStack>
      </VStack>
    </VStack>
  );
};
