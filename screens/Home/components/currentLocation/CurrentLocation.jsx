import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import useLocationStore from'../../../../stores/locationStore.js';

const CurrentLocation = () => {
  const { city } = useLocationStore();
  return <Text style={styles.location}>{city}</Text>
};

export default CurrentLocation;