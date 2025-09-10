import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen.jsx';
import SearchLocationsScreen from '../screens/SavedLocations/SavedLocationsScreen.jsx';
import StarredLocationsScreen from '../screens/starred/StarredLocationsScreen.jsx';

const RootStack = createNativeStackNavigator({
    screens: {
        Home: HomeScreen,
        Search: SearchLocationsScreen,
        Starred: StarredLocationsScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;