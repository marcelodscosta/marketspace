import { ButtonIcon } from '@components/ButtonIcon';
import { UserPhoto } from '@components/UserPhoto';

import { HStack, Heading, Icon, Text, VStack, useTheme } from 'native-base';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Home = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} bg="gray.600" px={6}>
      <HStack mt={10} alignItems="center" justifyContent="space-between">
        <UserPhoto
          size={20}
          source={{ uri: 'https://www.github.com/marcelodscosta.png' }}
          borderWidth={3}
        />
        <VStack>
          <Text fontSize="md">Boas Vindas,</Text>
          <Heading fontFamily="heading" fontSize="md">
            Marcelo!
          </Heading>
        </VStack>
        <ButtonIcon
          buttonColor={colors.gray[100]}
          fontColor={colors.gray[700]}
          title="Criar anúncio"
          iconName="plus"
          size={4}
        />
      </HStack>

      <VStack mt={6} mb={3}>
        <Text fontFamily="heading" color="gray.300">
          Seus produtos anunciados para venda
        </Text>

        <HStack
          bg="blue.100"
          p={4}
          alignItems="center"
          borderRadius={6}
          mt={4}
          justifyContent="space-between"
        >
          <HStack alignItems="center">
            <Icon
              as={Feather}
              name="tag"
              w={8}
              h={8}
              color="blue.500"
              size={6}
            />
            <VStack ml={2}>
              <Heading fontSize="lg">4</Heading>
              <Text fontSize="xs">anúncios ativos</Text>
            </VStack>
          </HStack>
          <TouchableOpacity>
            <HStack>
              <Heading fontSize="xs" color="blue.500">
                Meus anúncios
              </Heading>
              <Icon
                as={Feather}
                name="arrow-right"
                w={4}
                h={4}
                color="blue.500"
                ml={2}
              />
            </HStack>
          </TouchableOpacity>
        </HStack>
      </VStack>
      <Text fontFamily="heading" color="gray.300" mt={2}>
        Compre Produtos variados
      </Text>
    </VStack>
  );
};
