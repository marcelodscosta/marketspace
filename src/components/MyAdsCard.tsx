import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Center, HStack, Image, Text, VStack } from 'native-base';

type Props = TouchableOpacityProps & {
  used?: boolean;
  disabled?: boolean;
};

export const MyAdsCard = ({ used = false, disabled = false }: Props) => {
  return (
    <TouchableOpacity disabled={disabled} style={{ width: 154 }}>
      <Image
        source={{
          uri: 'https://mundialcalcados.vteximg.com.br/arquivos/ids/2415937-1000-1500/98g14769-1.jpg?v=638025815293430000',
        }}
        alt="Produto para venda"
        w={40}
        h={32}
        rounded={6}
        resizeMode="contain"
        opacity={disabled ? 0.5 : 1}
      />

      <VStack>
        {disabled && (
          <Center position="absolute" mt={-5} ml={4}>
            <Text fontFamily="heading" fontSize="xs" color="gray.700">
              ANÚNCIO DESATIVADO
            </Text>
          </Center>
        )}
        <Text
          fontFamily="body"
          fontSize="sm"
          color={disabled ? 'gray.400' : 'gray.200'}
        >
          Tênis Vermelho
        </Text>
        <HStack alignItems="flex-end">
          <Text
            fontFamily="heading"
            fontSize="xs"
            color={disabled ? 'gray.400' : 'gray.100'}
            mr={1}
          >
            R$
          </Text>
          <Text
            fontFamily="heading"
            fontSize="md"
            color={disabled ? 'gray.400' : 'gray.100'}
          >
            59,90
          </Text>
        </HStack>

        <Center
          position="absolute"
          mt={-32}
          ml="24"
          bg={used ? 'gray.200' : 'blue.500'}
          rounded={33}
          opacity={disabled ? 0.5 : 1}
        >
          <Text fontFamily="body" fontSize="xs" color="gray.700" px={2} py={1}>
            {used ? 'USADO' : 'NOVO'}
          </Text>
        </Center>
      </VStack>
    </TouchableOpacity>
  );
};
