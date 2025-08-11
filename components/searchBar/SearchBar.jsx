import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles'

const SearchBar = () => {
  return (
  <TextInput 
    style={styles.searchBar} 
    placeholder="Type here to find a city!"
    />
  )
};

export default SearchBar