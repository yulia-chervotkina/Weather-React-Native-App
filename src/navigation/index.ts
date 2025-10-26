import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '@/assets/colors';
import { ROUTES } from '@/constants/routes';
import HomeScreen from '@/screens/Home/HomeScreen/HomeScreen';
import SearchLocationsScreen from '@/screens/SearchLocations/SearchLocationsScreen/SearchLocationsScreen';
import StarredLocationsScreen from '@/screens/StarredLocations/StarredLocationsScreen/StarredLocationsScreen';

const RootStack = createNativeStackNavigator({
    initialRouteName: ROUTES.HOME,
    screenOptions: {
        headerStyle: {
            backgroundColor: colors.topOfGradient,
        },
        headerTintColor: colors.text,
    },
    screens: {
        [ROUTES.HOME]: HomeScreen,
        [ROUTES.SEARCH]: SearchLocationsScreen,
        [ROUTES.STARRED]: StarredLocationsScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
