import { HStack, Heading, Image, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { ConditionProduct } from './ConditionProduct';
import { UserPhoto } from './UserPhoto';

export const AdCard = () => {
  return (
    <VStack mt={4} w="50%" pb={2}>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://mundialcalcados.vteximg.com.br/arquivos/ids/2415937-1000-1500/98g14769-1.jpg?v=638025815293430000',
          }}
          alt="produto anúncio"
          w={40}
          h={24}
          rounded="xl"
          borderColor="gray.700"
          resizeMode="contain"
        />

        <HStack
          p={2}
          alignItems="center"
          justifyContent="space-between"
          mt={-24}
          mb={12}
          w={40}
        >
          <UserPhoto
            size={8}
            source={{ uri: 'https://github.com/marcelodscosta.png' }}
            borderWidth={1}
            borderColor="gray.700"
          />
          <ConditionProduct used />
        </HStack>

        <Text fontSize="sm">Tênis Branco</Text>
        <HStack alignItems="flex-end">
          <Text fontFamily="heading" fontSize="xs">
            R$
          </Text>
          <Heading fontSize="md">59,90</Heading>
        </HStack>
      </TouchableOpacity>
    </VStack>
  );
};
