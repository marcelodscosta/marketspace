import { FormControl, IInputProps, Input as InputBase } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string;
};

export const Input = ({ errorMessage, isInvalid, ...rest }: Props) => {
  const isInvalidInput = !!errorMessage || isInvalid;

  return (
    <FormControl>
      <InputBase
        size="md"
        px={4}
        py={3}
        borderRadius={6}
        w="full"
        bg="gray.700"
        mt={4}
        isInvalid={isInvalidInput}
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
