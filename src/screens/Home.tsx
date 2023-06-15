import { useState } from 'react';

import { TouchableOpacity } from 'react-native';

import { ButtonIcon } from '@components/ButtonIcon';
import { UserPhoto } from '@components/UserPhoto';

import {
  Actionsheet,
  Button,
  Center,
  Checkbox,
  Circle,
  FlatList,
  HStack,
  Heading,
  Icon,
  Switch,
  Text,
  VStack,
  useDisclose,
  useTheme,
} from 'native-base';

import { AdCard } from '@components/AdCard';
import { InputSearch } from '@components/InputSearch';

import { Feather } from '@expo/vector-icons';

import ExitSvg from '@assets/x.svg';

import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export const Home = () => {
  const { colors } = useTheme();
  const data = ['1', '2', '3'];

  const { isOpen, onOpen, onClose } = useDisclose();

  const [selectedCondition, setSelectedCondition] = useState('NOVO');

  const navigation = useNavigation<AppNavigatorRoutesProps>();

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
              <Heading fontSize="lg">{data.length}</Heading>
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
        Compre produtos variados
      </Text>

      <InputSearch onOpen={onOpen} />

      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={() => (
          <AdCard used onPress={() => navigation.navigate('adDeails')} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          gap: 4,
        }}
        ListEmptyComponent={() => (
          <Center mt={35}>
            <Text fontSize="md">Não há itens</Text>
          </Center>
        )}
      />

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content alignItems="flex-start">
          <VStack mt={12} px={6} w="full">
            <HStack justifyContent="space-between" alignItems="flex-start">
              <Heading
                fontFamily="heading"
                fontSize="lg"
                color="gray.100"
                pb={6}
              >
                Filtrar anúncios
              </Heading>
              <TouchableOpacity onPress={onClose}>
                <ExitSvg width={32} height={32} />
              </TouchableOpacity>
            </HStack>
            <Text fontFamily="heading" fontSize="sm" color="gray.200">
              Condição
            </Text>
            <HStack>
              <TouchableOpacity
                onPress={() =>
                  selectedCondition === 'NOVO'
                    ? setSelectedCondition('')
                    : setSelectedCondition('NOVO')
                }
              >
                <HStack
                  px={5}
                  py={2}
                  bg={selectedCondition === 'NOVO' ? 'blue.500' : 'gray.500'}
                  rounded={33}
                  mt={4}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    fontFamily="heading"
                    fontSize="sm"
                    color={
                      selectedCondition === 'NOVO' ? 'gray.700' : 'gray.300'
                    }
                  >
                    NOVO
                  </Text>
                  {selectedCondition !== 'NOVO' ? null : (
                    <Circle bg="gray.600" ml={2} p={1}>
                      <ExitSvg width={13} height={13} />
                    </Circle>
                  )}
                </HStack>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  selectedCondition === 'USADO'
                    ? setSelectedCondition('')
                    : setSelectedCondition('USADO')
                }
              >
                <HStack
                  px={5}
                  py={2}
                  bg={selectedCondition === 'USADO' ? 'blue.500' : 'gray.500'}
                  rounded={33}
                  mt={4}
                  ml={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    fontFamily="heading"
                    fontSize="sm"
                    color={
                      selectedCondition === 'USADO' ? 'gray.700' : 'gray.300'
                    }
                  >
                    USADO
                  </Text>
                  {selectedCondition !== 'USADO' ? null : (
                    <Circle bg="gray.600" ml={2} p={1}>
                      <ExitSvg width={13} height={13} />
                    </Circle>
                  )}
                </HStack>
              </TouchableOpacity>
            </HStack>
            <Text fontFamily="heading" fontSize="sm" color="gray.200" mt={6}>
              Aceita Troca?
            </Text>
            <Switch size="lg" alignSelf="flex-start" />
            <Text fontFamily="heading" fontSize="sm" color="gray.200" mt={6}>
              Meios de pagamento aceitos
            </Text>
            <VStack mt={2} mb={8}>
              <Checkbox value="boleto">Boleto</Checkbox>
              <Checkbox value="pix">Pix</Checkbox>
              <Checkbox value="dinheiro">Dinheiro</Checkbox>
              <Checkbox value="cartaocredito">Cartão de Crédito</Checkbox>
              <Checkbox value="deposito">Depósito Bancário</Checkbox>
            </VStack>
            <HStack justifyContent="space-between" mb={2}>
              <Button borderRadius={6} px={9} py={3} bg="gray.500">
                <Text fontFamily="heading" color="gray.200">
                  Resetar Filtros
                </Text>
              </Button>
              <Button borderRadius={6} px={9} py={3} bg="gray.100">
                <Text fontFamily="heading" color="gray.700">
                  Aplicar Filtros
                </Text>
              </Button>
            </HStack>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
};
