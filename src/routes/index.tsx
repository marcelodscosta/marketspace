import { Box } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  return (
    <Box flex={1} bg="gray.600">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};
