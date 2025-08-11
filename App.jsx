import React from 'react';
import { View } from 'react-native';
import styles from './styles/styles'

import SearchBar from './components/searchBar/SearchBar'
import CurrentLocation from './components/currentLocation/CurrentLocation'
import CurrentTemperature from './components/currentTemperature/CurrentTemperature'
import CurrentWeatherData from './components/currentWeatherData/CurrentWeatherData'
import HourlyForecast from './components/hourlyForecast/HourlyForecast'
import TenDayForecast from './components/tenDayForecast/TenDayForecast'



const App = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <CurrentLocation />
      <CurrentTemperature />
      <CurrentWeatherData />
      <HourlyForecast />
      <TenDayForecast />
    </View>
  )
};

export default App;
