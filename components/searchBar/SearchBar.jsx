import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import useAutocompleteStore from '../../stores/autocompleteStore.js';
import useLocationStore from'../../stores/locationStore.js';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [locationIsSelected, setLocationIsSelected] = useState(false);
  let { result, searchLocation, loading, error } = useAutocompleteStore();
  const { setCity } = useLocationStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchLocation(location)
    }, 400);
    return () => clearTimeout(timeout);
  }, [location, searchLocation]);

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
        )
      }}
      keyExtractor={item=>item.id}
    />)}  
  </View>
  )
};

export default SearchBar;