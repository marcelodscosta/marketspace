import { HStack, Input, Text } from 'native-base';

import SearchSvg from '@assets/magnifying-glass.svg';
import FilterSvg from '@assets/sliders.svg';
import { TouchableOpacity } from 'react-native';

type Props = {
  onOpen?: () => void;
};

export const InputSearch = ({ onOpen }: Props) => {
  return (
    <HStack w="full" bg="gray.700" borderRadius={6} mt={2} py={2} px={3}>
      <Input
        placeholder="Buscar anúncio"
        fontSize="md"
        h="full"
        flex={1}
        borderColor="gray.700"
        _focus={{ borderColor: 'gray.700', bg: 'gray.700' }}
      />
      <HStack justifyContent="center" alignItems="center">
        <TouchableOpacity>
          <SearchSvg />
        </TouchableOpacity>
        <Text fontSize={32} color="gray.500" mx={1}>
          |
        </Text>
        <TouchableOpacity onPress={onOpen}>
          <FilterSvg />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
};
