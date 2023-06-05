import { Button as ButtonBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variantColorFont?: boolean;
};

export const Button = ({ title, variantColorFont = false, ...rest }: Props) => {
  return (
    <ButtonBase {...rest} w="full" p={3} mt={6} fontSize="sm">
      <Text
        fontFamily="heading"
        color={!variantColorFont ? 'gray.700' : 'gray.200'}
      >
        {title}
      </Text>
    </ButtonBase>
  );
};
