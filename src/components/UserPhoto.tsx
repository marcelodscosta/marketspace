import { IImageProps, Image } from 'native-base';

import UserDefault from '@assets/user.png';

type Props = IImageProps & {
  size: number;
};

export const UserPhoto = ({ size, ...rest }: Props) => {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={1}
      borderColor="blue.200"
      alt="Foto Perfil"
      bg="gray.300"
      source={UserDefault}
      {...rest}
    />
  );
};
