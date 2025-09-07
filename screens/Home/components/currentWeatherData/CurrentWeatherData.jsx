import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import useWeatherStore from '../../../../stores/weatherStore.js';
import useLocationStore from'../../../../stores/locationStore.js';

const CurrentWeatherData = () => {
  const { weather, fetchWeather, error, loading } = useWeatherStore();
  const { city } = useLocationStore();

  // useEffect(() => {
  //     fetchWeather(city)
  //   }, [city, fetchWeather]);

  if (loading) return <Text>Loading ...</Text>
  if (error) return <Text>Error: {error}</Text>;
  if (!weather) return <Text>Couldn't fetch data</Text>;

  const { uv, humidity, precip_mm, wind_kph } = weather.current;

    return (
    <View style={styles.currentWeatherData}>
        <Text style={styles.currentWeatherDataItem}>UV Index | {Math.round(uv)}</Text>
        <Text style={styles.currentWeatherDataItem}>Humidity | {Math.round(humidity)} %</Text>
        <Text style={styles.currentWeatherDataItem}>Percipitation | {Math.round(precip_mm)} mm</Text>
        <Text style={styles.currentWeatherDataItem}>Wind | {Math.round(wind_kph)} km/h</Text>
    </View>
  )
};

export default CurrentWeatherData;