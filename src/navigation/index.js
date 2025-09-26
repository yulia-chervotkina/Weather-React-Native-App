import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '@assets/colors';

import routes from '../constants/routes.js';

const RootStack = createNativeStackNavigator({
    initialRouteName: routes.initialRouteName,
    screenOptions: {
        headerStyle: {
            backgroundColor: colors.topOfGradient,
        },
        headerTintColor: colors.text,
    },
    screens: {
        Home: routes.home,
        Search: routes.search,
        Starred: routes.starred,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
