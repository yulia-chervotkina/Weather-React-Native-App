import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen.jsx';
import SavedLocationsScreen from '../screens/SavedLocations/SavedLocationsScreen.jsx';

const RootStack = createNativeStackNavigator({
    screens: {
        Home: HomeScreen,
        Saved: SavedLocationsScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;