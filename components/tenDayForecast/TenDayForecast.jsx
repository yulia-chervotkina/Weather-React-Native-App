import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const TenDayForecast = () => {
  return (
    <View style={styles.tenDayForecast}>
      <View style={styles.tenDayForecastItem}>
        <Text>Day of the Week</Text>
        <Text>IMG</Text>
        <Text>Highest</Text>
        <Text>Lowest</Text>
      </View>
      <View style={styles.tenDayForecastItem}>
        <Text>Day of the Week</Text>
        <Text>IMG</Text>
        <Text>Highest</Text>
        <Text>Lowest</Text>
      </View>
      <View style={styles.tenDayForecastItem}>
        <Text>Day of the Week</Text>
        <Text>IMG</Text>
        <Text>Highest</Text>
        <Text>Lowest</Text>
      </View>
    </View>
  )
};

export default TenDayForecast;