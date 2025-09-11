import React from 'react';
import { View }  from 'react-native';
import SearchBar from './searchBar/SearchBar.jsx';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';

const SearchLocationsScreen = () => {
    
  return (
    <LinearGradient useAngle={true} angle={45} colors={['#4A91FF', '#47BFDF']} style={styles.linearGradient}>
    {/* TODO Do I need to wrap Searchbar in view? */}
    <View style={styles.container}>
      <SearchBar />
    </View>
    </LinearGradient>
  );
}

export default SearchLocationsScreen;