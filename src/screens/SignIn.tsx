import { Heading, ScrollView, Text, VStack } from 'native-base';

import Logo from '@assets/logo.svg';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { InputIcon } from '@components/InputIcon';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { useNavigation } from '@react-navigation/native';

type DataFormProps = {
  email: string;
  password: string;
};

const userSignInSchema = yup.object({
  email: yup
    .string()
    .required('Informe um e-mail')
    .email('Informe um e-mail válido'),
  password: yup.string().required('Informe uma senha'),
});

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<DataFormProps>({ resolver: yupResolver(userSignInSchema) });

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleSignIn = (data: DataFormProps) => {
    console.log(data);
    reset();
  };

  const createAccount = () => {
    navigate('signUp');
  };

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

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <InputIcon
                placeholder="Senha"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
                onSubmitEditing={handleSubmit(handleSignIn)}
                returnKeyType="send"
              />
            )}
          />

          <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
        </VStack>

        <VStack alignItems="center" w="full" px={8} mt={8} pt={4}>
          <Text mt={6}>Ainda não tem acesso?</Text>
          <Button
            _pressed={{ bg: 'gray.400' }}
            title="Criar uma conta"
            variantColorFont
            bg="gray.500"
            onPress={createAccount}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
};
