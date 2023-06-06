import { Box } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export const Routes = () => {
  return (
    <Box flex={1} bg="gray.600">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
};
