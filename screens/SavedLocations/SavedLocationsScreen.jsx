import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from './searchBar/SearchBar.jsx';
import SavedLocations from './savedLocations/SavedLocations.jsx'
// import useSavedLocationsStore from '../../../stores/savedLocationsStore.js';

// import { useNavigation } from '@react-navigation/native';

const SavedLocationsScreen = () => {
//   const navigation = useNavigation();
    
  return (
    <View>
      <SearchBar />
      <SavedLocations />
    </View>
  );
}

export default SavedLocationsScreen;