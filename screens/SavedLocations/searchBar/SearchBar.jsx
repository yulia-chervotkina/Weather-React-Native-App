import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles.js';
import useAutocompleteStore from '../../../stores/autocompleteStore.js';
import useLocationStore from '../../../stores/locationStore.js';
import useSavedLocationsStore from '../../../stores/savedLocationsStore.js';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [locationIsSelected, setLocationIsSelected] = useState(false);
  let { result, searchLocation, loading, error } = useAutocompleteStore();
  const { setCity } = useLocationStore();
  const { setSavedLocations } = useSavedLocationsStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchLocation(location)
    }, 400);
    return () => clearTimeout(timeout);
  }, [location, searchLocation]);

  const storeData = async (location) => {
    try {
      await AsyncStorage.setItem('location', location);
    } catch (e) {
      return <Text>Error</Text>
    }
  }
  return (
  <View>
    <TextInput 
      style={styles.searchBar} 
      value={location}
      placeholder="Type here to find a city!"
      onChangeText={text => {
        setLocation(text);
        setLocationIsSelected(false);
      }}
      />
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {!locationIsSelected && (
        <FlatList 
      data={result || []} 
      renderItem={({item, index}) => {
        return(
          <View>
            <TouchableOpacity
              key={index.toString()} 
              onPress={()=>{
                setCity(item.name);
                setLocation(item.name);
                setLocationIsSelected(true);
              }
            }
            >
              <Text>{item.name},{item.country}</Text>
            </TouchableOpacity>
            <Button
              title='+'
              onPress={() => setSavedLocations(item.name)}
            />
        </View>
        )
      }}
      keyExtractor={item=>item.id}
    />)}  
  </View>
  )
};

export default SearchBar;