import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import useWeatherStore from '../../stores/weatherStore.js';

const CurrentTemperature = () => {
  const {weather, fetchWeather, error, loading} = useWeatherStore();
  
  useEffect(() => {
    fetchWeather('Cracow')
  }, [fetchWeather]);

  if (loading) return <Text>Loading ...</Text>
  if (error) return <Text>Error: {error}</Text>;
  if (!weather) return <Text>Couldn't fetch data</Text>

  const iconURL = 'https:' + weather.current.condition.icon;
  const {condition, temp_c} = weather.current;

  return (
    <View style={styles.currentTemperature}>
      <Text>{condition.text}</Text>
      <Image 
        source={{uri: iconURL}} 
        style={{ width: 64, height: 64 }}/>
      <Text>{temp_c}</Text>
    </View>
  )
};
export default CurrentTemperature;