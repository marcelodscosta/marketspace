import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { HStack, Icon, Text } from 'native-base';

import { AntDesign } from '@expo/vector-icons';

type ButtonProps = TouchableOpacityProps & {
  buttonColor: string;
  size: number;
  iconName: string;
  fontColor: string;
  title: string;
};

export const ButtonIcon = ({
  buttonColor,
  iconName,
  fontColor,
  size,
  title,
}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <HStack
        bg={buttonColor}
        p={4}
        borderRadius={6}
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={AntDesign} size={size} name={iconName} color="gray.700" />
        <Text color={fontColor} fontFamily="heading" ml={2}>
          {title}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};
