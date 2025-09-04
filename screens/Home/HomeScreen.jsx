import React, {useState} from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

// import SearchBar from '../SavedLocations/searchBar/SearchBar.jsx';
import CurrentLocation from './components/currentLocation/CurrentLocation';
import CurrentTemperature from './components/currentTemperature/CurrentTemperature';
import CurrentWeatherData from './components/currentWeatherData/CurrentWeatherData';
import HourlyForecast from './components/hourlyForecast/HourlyForecast';
import TenDayForecast from './components/tenDayForecast/TenDayForecast';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    }, 2000)
  }, []);

  const navigation = useNavigation();

  return (
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
      <Button onPress={() => navigation.navigate('Saved')}>PRESS</Button>
      {/* <SearchBar /> */}
      <CurrentLocation />
      <CurrentTemperature />
      <CurrentWeatherData />
      <HourlyForecast />
      <TenDayForecast />
    </ScrollView>
  )
};

export default HomeScreen;
