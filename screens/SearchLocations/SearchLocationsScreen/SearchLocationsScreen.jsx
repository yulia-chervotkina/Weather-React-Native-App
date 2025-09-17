import React from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';

const SearchLocationsScreen = () => {
  return (
    <LinearGradient
      colors={['#47BFDF', '#4A91FF']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <SearchBar />
      </View>
    </LinearGradient>
  );
};

export default SearchLocationsScreen;
