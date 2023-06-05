import { useState } from 'react';

import {
  FormControl,
  IInputProps,
  Icon,
  Input as InputBase,
  Pressable,
} from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';

type Props = IInputProps & {
  errorMessage?: string;
};

export const InputIcon = ({ errorMessage, isInvalid, ...rest }: Props) => {
  const isInvalidInput = !!errorMessage || isInvalid;

  const [show, setShow] = useState(false);
  return (
    <FormControl>
      <InputBase
        w="full"
        bg="gray.700"
        mt={4}
        size="md"
        px={4}
        py={3}
        isInvalid={isInvalidInput}
        borderRadius={6}
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? 'visibility' : 'visibility-off'} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        {...rest}
      />
      <FormControl.HelperText
        _text={{ color: 'red.500', fontFamily: 'heading' }}
      >
        {errorMessage}
      </FormControl.HelperText>
    </FormControl>
  );
};
