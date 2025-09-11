import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Text from '../../../components/Text/PlainText.jsx';
import useSavedLocationsStore from '../../../stores/savedLocationsStore.js';
import useLocationStore from '../../../stores/locationStore.js';
import styles from './styles.js';

const SavedLocations = () => {
    const { savedLocations, removeLocation } = useSavedLocationsStore();
    const { setCity } = useLocationStore();

    const renderItem = ({ item }) => (
    <View style={styles.locationRow}>
      <TouchableOpacity onPress={() => setCity(item)}>
        <Text style={styles.list}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeLocation(item)}>
        <Text style={styles.button}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved locations</Text>
      {(!savedLocations || savedLocations.length === 0) && (<Text>No saved locations</Text>)}
      <FlatList
        data={savedLocations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

export default SavedLocations;