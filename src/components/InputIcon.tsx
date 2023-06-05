import { useState } from 'react';

import { IInputProps, Icon, Input as InputBase, Pressable } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';

export const InputIcon = ({ ...rest }: IInputProps) => {
  const [show, setShow] = useState(false);
  return (
    <InputBase
      w="full"
      bg="gray.700"
      mt={4}
      size="md"
      px={4}
      py={3}
      borderRadius={6}
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon
            as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
            size={5}
            mr="2"
            color="muted.400"
          />
        </Pressable>
      }
      {...rest}
    />
  );
};
