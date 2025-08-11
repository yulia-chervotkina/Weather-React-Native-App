import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const HourlyForecast = () => {
  let temperature = '19';
  let time = '22:00';
  return (
    <View style={styles.currentWeatherData}>
      <View style={styles.currentWeatherDataItem}>
        <Text>{temperature}</Text>
        <Text>IMG</Text>
        <Text>{time}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>{temperature}</Text>
        <Text>IMG</Text>
        <Text>{time}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>{temperature}</Text>
        <Text>IMG</Text>
        <Text>{time}</Text>
      </View>
    </View>
  )
};

export default HourlyForecast;