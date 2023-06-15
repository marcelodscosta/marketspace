import ArrowLeftSvg from '@assets/arrow-left.svg';
import { Box, Image, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

export const AdDetails = () => {
  return (
    <VStack>
      <Box mt={6} w={6} h={6} px={6}>
        <TouchableOpacity>
          <ArrowLeftSvg width={24} height={24} />
        </TouchableOpacity>
      </Box>
      <Image />
    </VStack>
  );
};
