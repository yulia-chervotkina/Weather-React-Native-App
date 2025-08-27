import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import useLocationStore from '../../stores/locationStore.js'

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const { result, searchLocation, loading, error } = useLocationStore();

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
      onChangeText={setLocation}
      />
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
    <FlatList 
      data={result || []} 
      renderItem={({item, index}) => {
        return(
        <TouchableOpacity
          key={index.toString()} 
          onPress={console.log("hi")}
        >
          <Text>{item.name},{item.country}</Text>
        </TouchableOpacity>
        )
      }}
      keyExtractor={item=>item.id}
      />
  </View>
  )
};

export default SearchBar;