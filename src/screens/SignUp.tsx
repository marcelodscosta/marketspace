import { Center, HStack, Heading, ScrollView, Text, VStack } from 'native-base';

import LogoP from '@assets/logo_p.svg';

import Pencil from '@assets/pencil-simple-line.svg';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { InputIcon } from '@components/InputIcon';
import { UserPhoto } from '@components/UserPhoto';

export const SignUp = () => {
  return (
    <VStack flex={1} bg="gray.600" mb={1} pb={2}>
      <ScrollView showsVerticalScrollIndicator={false} pb={20}>
        <VStack alignItems="center" mt={10}>
          <LogoP />
          <Heading fontFamily="heading" fontSize="lg">
            Boas vindas!
          </Heading>
          <Text fontFamily="body" fontSize="sm">
            Crie sua conta e use o espaço para comprar
          </Text>
          <Text>itens variados e vender seus produtos</Text>
        </VStack>

        <VStack alignItems="center" mt={4} px={8}>
          <HStack alignItems="flex-end">
            <UserPhoto size={24} />
            <Center bg="blue.200" w={12} h={12} rounded="full" ml={-12}>
              <Pencil />
            </Center>
          </HStack>
          <Input placeholder="Nome" marginTop={6} />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <InputIcon placeholder="Senha" />
          <InputIcon placeholder="Confirmar senha" />

          <Button
            bg="gray.100"
            color="gray.700"
            title="Criar"
            mb={2}
            _pressed={{
              bg: 'gray.200',
            }}
          />

          <Text mt={2}>Já tem uma conta?</Text>
          <Button
            _pressed={{ bg: 'gray.400' }}
            title="Ir para o Login"
            variantColorFont
            bg="gray.500"
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
};
