import React from 'react';
import { View }  from 'react-native';
import SearchBar from './searchBar/SearchBar.jsx';
import SavedLocations from './savedLocations/SavedLocations.jsx';
// import useSavedLocationsStore from '../../../stores/savedLocationsStore.js';
// import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';

const SearchLocationsScreen = () => {
//   const navigation = useNavigation();
    
  return (
    <LinearGradient useAngle={true} angle={45} colors={['#4A91FF', '#47BFDF']} style={styles.linearGradient}>
    <View style={styles.container}>
      <SearchBar />
      <SavedLocations />
    </View>
    </LinearGradient>
  );
}

export default SearchLocationsScreen;