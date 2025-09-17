import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';
import StarredLocations from '../StarredLocations/StarredLocations.jsx';

const StarredLocationsScreen = () => {
  return (
    <LinearGradient
      colors={['#47BFDF', '#4A91FF']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <StarredLocations />
      </View>
    </LinearGradient>
  );
};

export default StarredLocationsScreen;
