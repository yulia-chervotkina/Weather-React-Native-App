import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';

import Add from '../../../../assets/icons/add.svg';
import LocationRow from '../../../../components/LocationRow/LocationRow.jsx';
import Text from '../../../../components/Text/PlainText.jsx';
import useAutocompleteStore from '../../../../stores/autocompleteStore.js';
import useLocationStore from '../../../../stores/locationStore.js';
import useStarredLocationsStore from '../../../../stores/starredLocationsStore.js';
import styles from './styles.js';

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [locationIsSelected, setLocationIsSelected] = useState(false);
    let { result, searchLocation, loading, error } = useAutocompleteStore();
    const { setSearchedCity } = useLocationStore();
    const { addLocation } = useStarredLocationsStore();
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            searchLocation(location);
        }, 400);
        return () => clearTimeout(timeout);
    }, [location, searchLocation]);

    const handleSelectLocation = useCallback(
        name => {
            setSearchedCity(name);
            setLocation(name);
            setLocationIsSelected(true);
            navigation.popTo('Home');
        },
        [setSearchedCity, setLocation, setLocationIsSelected, navigation],
    );

    return (
        <View>
            <TextInput
                style={styles.searchBar}
                autoFocus
                // value={location}
                placeholder="Type here to find a city!"
                placeholderTextColor="white"
                onChangeText={text => {
                    setLocation(text);
                    setLocationIsSelected(false);
                }}
            />

            {loading ? <Text>Loading...</Text> : null}
            {error ? <Text>{error}</Text> : null}

            {!locationIsSelected ? ( // тут перевернуть
                <FlatList
                    data={result || []}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <LocationRow
                                label={`${item.name}, ${item.country}`}
                                onPressLocation={() =>
                                    handleSelectLocation(item.name)
                                }
                                onPressButton={() => {
                                    addLocation(
                                        `${item.name}, ${item.country}`,
                                    );
                                    handleSelectLocation(item.name);
                                }}
                                button={<Add style={styles.button} />}
                            />
                        );
                    }}
                />
            ) : null}
        </View>
    );
};

export default SearchBar;
