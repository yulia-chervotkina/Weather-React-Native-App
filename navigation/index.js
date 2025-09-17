import { createStaticNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen/HomeScreen.jsx';
import SearchLocationsScreen from '../screens/SearchLocations/SearchLocationsScreen/SearchLocationsScreen.jsx';
import StarredLocationsScreen from '../screens/StarredLocations/StarredLocationsScreen/StarredLocationsScreen.jsx';

const RootStack = createStackNavigator({
  detachInactiveScreens: true,
  screenOptions: {
    headerStyle: {
      backgroundColor: '#47BFDF',
    },
    headerTintColor: '#fff',
  },
  screens: {
    Home: HomeScreen,
    Search: SearchLocationsScreen,
    Starred: StarredLocationsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
