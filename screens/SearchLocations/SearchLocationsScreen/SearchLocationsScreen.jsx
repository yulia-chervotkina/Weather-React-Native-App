import React from 'react';
import { View }  from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';

const SearchLocationsScreen = () => {
    
  return (
    <LinearGradient useAngle={true} angle={45} colors={['#4A91FF', '#47BFDF']} style={styles.linearGradient}>
    <View style={styles.container}>
      <SearchBar />
    </View>
    </LinearGradient>
  );
}

export default SearchLocationsScreen;