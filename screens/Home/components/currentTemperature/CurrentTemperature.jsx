import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import useWeatherStore from '../../../../stores/weatherStore.js';
import useLocationStore from'../../../../stores/locationStore.js';
import CurrentWeatherData from '../currentWeatherData/CurrentWeatherData';

const CurrentTemperature = () => {
  const {weather, fetchWeather, error, loading} = useWeatherStore();
  const { city } = useLocationStore();

  const now = new Date();
  const day = now.getDate();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[now.getMonth()];

  useEffect(() => {
    fetchWeather(city)
  }, [city, fetchWeather]);

  if (loading) return <Text>Loading ...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  if (!weather) return <Text>Couldn't fetch data</Text>;

  const iconURL = 'https:' + weather.current.condition.icon;
  const {condition, temp_c} = weather.current;

  return (
    <View style={styles.currentTemperature}>
      <Text style={styles.day}>Today, {day} {month}</Text>
      <Image 
        source={{uri: iconURL}} 
        style={styles.icon}/>
      <Text style={styles.temperature}>{Math.round(temp_c)}°C</Text>
      <Text style={styles.condition}>{condition.text}</Text>
      <CurrentWeatherData />
    </View>
  )
};
export default CurrentTemperature;