import { Heading, Text, VStack } from "native-base";

import Logo from '@assets/logo.svg';

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.600" alignItems="center">
      <VStack mt={24} alignItems="center">
        <Logo />
        <Heading fontFamily="heading">marketspace</Heading>
        <Text fontFamily="body" fontSize="sm">Seu espaço de compra e venda</Text>
      </VStack>

      <Text mt={24} fontSize="sm">Acesse sua conta</Text>
    </VStack>
  );
};