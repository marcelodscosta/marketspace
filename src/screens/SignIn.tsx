import { Heading, ScrollView, Text, VStack } from 'native-base';

import Logo from '@assets/logo.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { InputIcon } from '@components/InputIcon';

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700" alignItems="center">
      <ScrollView w="full" showsVerticalScrollIndicator={false}>
        <VStack pt={24} alignItems="center" px={8} bg="gray.600" pb={6}>
          <Logo />
          <Heading fontFamily="heading">marketspace</Heading>
          <Text fontFamily="body" fontSize="sm">
            Seu espaço de compra e venda
          </Text>

          <Text mt={24} fontSize="sm">
            Acesse sua conta
          </Text>

          <Input placeholder="E-mail" keyboardType="email-address" />

          <InputIcon placeholder="Senha" />
          <Button title="Entrar" />
        </VStack>

        <VStack alignItems="center" w="full" px={8} mt={8} pt={4}>
          <Text mt={6}>Ainda não tem acesso?</Text>
          <Button
            _pressed={{ bg: 'gray.400' }}
            title="Criar uma conta"
            variantColorFont
            bg="gray.500"
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
};
