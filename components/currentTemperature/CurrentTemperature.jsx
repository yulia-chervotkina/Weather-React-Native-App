import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'

const CurrentTemperature = () => {
  return (
    <View style={styles.currentTemperature}>
      <Text>23°</Text>
        (// <Image />)
      <Text>Partially cloudy</Text>
    </View>
  )
};
export default CurrentTemperature;