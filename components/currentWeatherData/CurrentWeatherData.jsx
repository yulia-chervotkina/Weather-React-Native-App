import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const CurrentWeatherData = () => {
  let UV = '7';
  let humidity = '61%';
  let percipitation = '4mm';
  let wind = '5';

  return (
    <View style={styles.currentWeatherData}>
      <View style={styles.currentWeatherDataItem}>
        <Text>UV Index</Text>
        <Text>{UV}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>Humidity</Text>
        <Text>{humidity}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>Percipitation</Text>
        <Text>{percipitation}</Text>
      </View>
      <View style={styles.currentWeatherDataItem}>
        <Text>Wind</Text>
        <Text>{wind}</Text>
      </View>
    </View>
  )
};

export default CurrentWeatherData;