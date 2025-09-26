import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Add from '@assets/icons/add.svg';
import LocationRow from '@components/LocationRow/LocationRow.jsx';
import useAutocompleteStore from '@stores/autocompleteStore.js';
import useLocationStore from '@stores/locationStore.js';
import useStarredLocationsStore from '@stores/starredLocationsStore';

import styles from './styles.js';

const SuggestedLocationsList = () => {
    const { result, setLocationIsSelected } = useAutocompleteStore();
    const { setSearchedCity } = useLocationStore();
    const navigation = useNavigation();
    const { addLocation } = useStarredLocationsStore();

    const handleSelectLocation = useCallback(
        name => {
            setSearchedCity(name);
            setLocationIsSelected(true);
            navigation.popTo('Home');
        },
        [setSearchedCity, setLocationIsSelected, navigation],
    );
    const renderItem = useCallback(
        ({ item }) => {
            return (
                <LocationRow
                    label={`${item.name}, ${item.country}`}
                    onPressLocation={() => handleSelectLocation(item.name)}
                    onPressButton={() => {
                        addLocation(`${item.name}, ${item.country}`);
                        handleSelectLocation(item.name);
                    }}
                    button={<Add style={styles.button} />}
                />
            );
        },
        [addLocation, handleSelectLocation],
    );

    const listEmptyComponent = useCallback(() => <View />, []);

    return (
        <FlatList
            data={result || []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={listEmptyComponent}
        />
    );
};

export default SuggestedLocationsList;
