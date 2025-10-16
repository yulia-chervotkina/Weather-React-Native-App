import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '@/assets/colors';
import routes from '@/constants/routes.js';
import HomeScreen from '@/screens/Home/HomeScreen/HomeScreen';
import SearchLocationsScreen from '@/screens/SearchLocations/SearchLocationsScreen/SearchLocationsScreen';
import StarredLocationsScreen from '@/screens/StarredLocations/StarredLocationsScreen/StarredLocationsScreen';

const RootStack = createNativeStackNavigator({
    initialRouteName: routes.initialRouteName,
    screenOptions: {
        headerStyle: {
            backgroundColor: colors.topOfGradient,
        },
        headerTintColor: colors.text,
    },
    screens: {
        [`${routes.home}`]: HomeScreen,
        [`${routes.search}`]: SearchLocationsScreen,
        [`${routes.starred}`]: StarredLocationsScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
