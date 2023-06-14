import { CheckIcon, HStack, Heading, Select, Text, VStack } from 'native-base';

import PlusSvg from '@assets/plus-regular.svg';
import { MyAdsCard } from '@components/MyAdsCard';

export const MyAds = () => {
  return (
    <VStack>
      <HStack mt={8} px={6} alignItems="center" justifyContent="flex-end">
        <Heading mr={16}>Meus anúncios</Heading>
        <PlusSvg width={24} height={24} />
      </HStack>

      <HStack px={6} mt={6} justifyContent="space-between" alignItems="center">
        <Text>9 anúncios</Text>
        <Select
          minWidth="111"
          accessibilityLabel="Todos"
          placeholder="Todos"
          placeholderTextColor="gray.100"
          _selectedItem={{
            bg: 'gray.100',
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="Todos" value="" />
        </Select>
      </HStack>

      <VStack mt={2} px={6}>
        <MyAdsCard />
      </VStack>
    </VStack>
  );
};
