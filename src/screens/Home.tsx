import { ButtonIcon } from '@components/ButtonIcon';
import { UserPhoto } from '@components/UserPhoto';

import { HStack, Heading, Text, VStack, useTheme } from 'native-base';

export const Home = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} bg="gray.600">
      <HStack mt={16} px={6} alignItems="center" justifyContent="space-between">
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
    </VStack>
  );
};
