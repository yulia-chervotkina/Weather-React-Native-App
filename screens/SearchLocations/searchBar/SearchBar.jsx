import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Text from '../../../components/Text/PlainText.jsx';
import styles from './styles.js';
import useAutocompleteStore from '../../../stores/autocompleteStore.js';
import useLocationStore from '../../../stores/locationStore.js';
import useSavedLocationsStore from '../../../stores/savedLocationsStore.js';
import { useNavigation } from '@react-navigation/native';


const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [locationIsSelected, setLocationIsSelected] = useState(false);
  let { result, searchLocation, loading, error } = useAutocompleteStore();
  const { setCity } = useLocationStore();
  // const { savedLocations, addLocation } = useSavedLocationsStore();
  const savedLocations = useSavedLocationsStore(state => state.savedLocations);
  const addLocation = useSavedLocationsStore(state => state.addLocation);
  console.log(useSavedLocationsStore)
  console.log(savedLocations)
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchLocation(location)
    }, 400);
    return () => clearTimeout(timeout);
  }, [location, searchLocation]);

  const handleSelectLocation = useCallback(name => {
    setCity(name);
    setLocation(name);
    setLocationIsSelected(true);
    navigation.navigate('Home')
  }, [setCity, setLocation, setLocationIsSelected])

  return (
  <View>
    <TextInput 
      style={styles.searchBar} 
      autoFocus
      value={location}
      placeholder="Type here to find a city!"
      placeholderTextColor='white'
      onChangeText={text => {
        setLocation(text);
        setLocationIsSelected(false);
      }}
      />

      {loading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error}</Text> : null}

      {!locationIsSelected ? (
        <FlatList 
          data={result || []} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return(
              <View style={styles.locationRow}>
                <TouchableOpacity
                  style={styles.locationRow}
                  onPress={() => handleSelectLocation(item.name)}
                >
                <Text style={styles.text}>{item.name}, {item.country}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {
                    addLocation(`${item.name}, ${item.country}`);
                    handleSelectLocation(item.name);
                    }
                  }>
                <Text style={styles.button}>+</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        
        />
        ) : null}
  </View>
  )
};

export default SearchBar;