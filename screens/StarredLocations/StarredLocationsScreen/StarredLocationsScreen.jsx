import React from 'react';
import { View }  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';
import StarredLocations from '../StarredLocations/StarredLocations.jsx';


const StarredLocationsScreen = () => {   
  return (
    <LinearGradient useAngle={true} angle={45} colors={['#4A91FF', '#47BFDF']} style={styles.linearGradient}>
      <View style={styles.container}>
        <StarredLocations />
      </View>
    </LinearGradient>
  );
}

export default StarredLocationsScreen;