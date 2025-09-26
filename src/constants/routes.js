import HomeScreen from '@screens/Home/HomeScreen/HomeScreen';
import SearchLocationsScreen from '@screens/SearchLocations/SearchLocationsScreen/SearchLocationsScreen';
import StarredLocationsScreen from '@screens/StarredLocations/StarredLocationsScreen/StarredLocationsScreen';

const routes = {
    initialRouteName: 'Home',
    home: HomeScreen,
    search: SearchLocationsScreen,
    starred: StarredLocationsScreen,
};

export default routes;
