import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import useWeatherStore from '../../stores/weatherStore.js';

const CurrentWeatherData = () => {
  const { weather, fetchWeather, error, loading } = useWeatherStore();

  useEffect(() => {
      fetchWeather('London')
    }, [fetchWeather]);

  if (loading) return <Text>Loading ...</Text>
  if (error) return <Text>Error: {error}</Text>;
  if (!weather) return <Text>Couldn't fetch data</Text>;

  const { uv, humidity, precip_mm, wind_kph } = weather.current;

    return (
    <View style={styles.currentWeatherData}>
      <View style={styles.currentWeatherDataItem}>
        <Text>UV Index</Text>
        <Text>{uv}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>Humidity</Text>
        <Text>{humidity}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>Percipitation</Text>
        <Text>{precip_mm}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>Wind</Text>
        <Text>{wind_kph}</Text>
      </View>
    </View>
  )
};

export default CurrentWeatherData;