import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { AdDetails } from '@screens/AdDetails';
import { Home } from '@screens/Home';
import { HomeFilter } from '@screens/HomeFilter';
import { MyAds } from '@screens/MyAds';

import HomeSvg from '@assets/house-regular.svg';
import SignOutSvg from '@assets/sign-out-regular.svg';
import TagSvg from '@assets/tag-regular.svg';

import { SignIn } from '@screens/SignIn';
import { useTheme } from 'native-base';

type AppRoutes = {
  home: undefined;
  myAds: undefined;
  homeFilter: undefined;
  adDetails: undefined;
  signIn: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  const { sizes } = useTheme();
  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => <HomeSvg width={iconSize} height={iconSize} />,
        }}
      />

      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: () => <TagSvg width={iconSize} height={iconSize} />,
        }}
      />

      <Screen
        name="signIn"
        component={SignIn}
        options={{
          tabBarIcon: () => (
            <SignOutSvg fill="red" width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="adDeails"
        component={AdDetails}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="homeFilter"
        component={HomeFilter}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
};
