import React, {useState} from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import useLocationStore from '../../stores/locationStore.js';

// import SearchBar from '../SavedLocations/searchBar/SearchBar.jsx';
import CurrentLocation from './components/currentLocation/CurrentLocation';
import CurrentTemperature from './components/currentTemperature/CurrentTemperature';
// import CurrentWeatherData from './components/currentWeatherData/CurrentWeatherData';
import HourlyForecast from './components/hourlyForecast/HourlyForecast';
// import TenDayForecast from './components/tenDayForecast/TenDayForecast';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { city } = useLocationStore();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    }, 2000)
  }, []);

  const navigation = useNavigation();

  return (
    <LinearGradient useAngle={true} angle={45} colors={['#47BFDF', '#4A91FF']} style={styles.linearGradient}>
    <ScrollView 
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl 
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={['grey']}
        tintColor='black'
        bounces={!refreshing}
        />
      }
      >
      <Button onPress={() => navigation.navigate('Saved')}>{city}</Button>
      {/* <SearchBar /> */}
      <CurrentLocation />
      <CurrentTemperature />
      {/* <CurrentWeatherData /> */}
      <HourlyForecast />
      {/* <TenDayForecast /> */}
    </ScrollView>
    </LinearGradient>
  )
};

export default HomeScreen;
