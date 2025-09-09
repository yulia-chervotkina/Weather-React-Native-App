import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import useSavedLocationsStore from '../../../stores/savedLocationsStore.js';
import useLocationStore from '../../../stores/locationStore.js';
import styles from './styles.js';

const SavedLocations = () => {
    const { savedLocations } = useSavedLocationsStore();
    const { setCity } = useLocationStore();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Saved locations</Text>
            {!Array.isArray(savedLocations) && <Text>No saved locations</Text>}
            <FlatList 
                data={savedLocations || []}
                keyExtractor={item=>item.id}
                renderItem={({item, index}) => {
                    return(
                        <View>
                            <TouchableOpacity
                            // TODO Fix the key
                                key={index.toString()} 
                                onPress={() => {
                                    setCity(item.name);
                                    // setLocation(item.name);
                                }}
                            >
                            <Text style={styles.list}>{item}</Text>    
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SavedLocations;