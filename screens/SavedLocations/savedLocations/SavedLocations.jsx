import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import useSavedLocationsStore from '../../../stores/savedLocationsStore.js';
import useLocationStore from '../../../stores/locationStore.js';


const SavedLocations = () => {
    const { savedLocations } = useSavedLocationsStore();
    const { setCity } = useLocationStore();

    return (
        <View>
            <Text>Saved locations</Text>
            {!Array.isArray(savedLocations) && <Text>No saved locations</Text>}
            <FlatList 
                data={savedLocations || []}
                keyExtractor={item=>item.id}
                renderItem={({item, index}) => {
                    return(
                        <View>
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setCity(item.name);
                                    // setLocation(item.name);
                                }}
                            >
                            <Text>{item}</Text>    
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SavedLocations;