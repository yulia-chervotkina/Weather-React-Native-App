import React from 'react';
import { View }  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';
import SavedLocations from './savedLocations/SavedLocations.jsx';


const StarredLocationsScreen = () => {   
  return (
    <LinearGradient useAngle={true} angle={45} colors={['#4A91FF', '#47BFDF']} style={styles.linearGradient}>
      <View style={styles.container}>
        <SavedLocations />
      </View>
    </LinearGradient>
  );
}

export default StarredLocationsScreen;