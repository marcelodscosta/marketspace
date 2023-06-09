import { useState } from 'react';

import { TouchableOpacity } from 'react-native';

import { Center, HStack, Heading, ScrollView, Text, VStack } from 'native-base';

import LogoP from '@assets/logo_p.svg';
import Pencil from '@assets/pencil-simple-line.svg';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { InputIcon } from '@components/InputIcon';
import { UserPhoto } from '@components/UserPhoto';

import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

const userSignUpSchema = yup.object({
  name: yup
    .string()
    .required('Informe o nome')
    .min(4, 'Nome com no mínimo 4 caracters'),
  email: yup
    .string()
    .required('Informe o e-mail')
    .email('Informe um e-mail válido'),
  phone: yup.string().required('Informe o telefone'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha tem de possuir no mínimo 6 carecters'),
  password_confirmation: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'A confirmação da senha não confere'),
});

type DataFormProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
};

export const SignUp = () => {
  const [photo, setPhoto] = useState(
    'https://uc5abeb140794f1a277863175ed5.previews.dropboxusercontent.com/p/thumb/AB5qCgKCM-C9wF8Q1wB1B9FOL4NbpMLT_kVHv_JclhI5VJEn8tBjl2OMFhAfivwfwgYbGOYmfME1_KI2my1e5DyvJh_QXryspAlBgfDdqw29PsGS6MOXziCU7LcMAflaZxbaHTYQcnmYbmkMUM_6dHHIOHff12qRNM7PqBL_Nwl41YWXUzPj1rKSf3hzxPxEX5nlaL7SlewWAnI7_KbbiDad2emzZ23TKA-IArYmVwEp1IsJC0V9atZnpRR8XYvyssTBt0yeUPFZhIllgT0eKhO9jbY-GcMRv_y5OVpdIW_pS6LRLyHNvYnm09X3RaDEF6fXxY7NTPqvk8w9KJbFa0OgJ29vJ_LpU0vhHOw-vt_ig1plru65ovVVrUoVTBQL3oehzdqzkaGo1e177R9eG6mAhyb_f8PM6rKWHNLgJ1TUAA/p.png',
  );

  const handleSelectPicker = async () => {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });

    if (photoSelected.canceled) {
      return;
    }
    setPhoto(photoSelected.assets[0].uri);
  };

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataFormProps>({
    resolver: yupResolver(userSignUpSchema),
  });

  const handleSignUp = (data: DataFormProps) => {
    console.log(data);
    reset();
  };

  const handleBackSignIn = () => {
    navigate('signIn');
  };

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
            <UserPhoto size={32} source={{ uri: photo }} />
            <TouchableOpacity onPress={handleSelectPicker}>
              <Center bg="blue.200" w={12} h={12} rounded="full" ml={-12}>
                <Pencil />
              </Center>
            </TouchableOpacity>
          </HStack>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                marginTop={6}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Telefone"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.phone?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <InputIcon
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirmation"
            render={({ field: { onChange, value } }) => (
              <InputIcon
                placeholder="Confirmar senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirmation?.message}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
              />
            )}
          />

          <Button
            bg="gray.100"
            color="gray.700"
            title="Criar"
            mb={2}
            _pressed={{
              bg: 'gray.200',
            }}
            onPress={handleSubmit(handleSignUp)}
          />

          <Text mt={2}>Já tem uma conta?</Text>
          <Button
            _pressed={{ bg: 'gray.400' }}
            title="Ir para o Login"
            variantColorFont
            bg="gray.500"
            onPress={handleBackSignIn}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
};
