import { useEffect, useMemo } from 'react';
import { TextInput, View } from 'react-native';

import debounce from 'lodash/debounce.js';

import Text from '@components/Text/PlainText.jsx';
import useAutocompleteStore from '@stores/autocompleteStore.js';

import styles from './styles.js';

const SearchBar = () => {
    const { searchLocation, loading, error, setLocationIsSelected } =
        useAutocompleteStore();

    const onSearch = useMemo(
        () =>
            debounce(location => {
                searchLocation(location);
            }, 500),
        [searchLocation],
    );

    useEffect(() => {
        return () => {
            onSearch.cancel();
            setLocationIsSelected(false);
        };
    }, [onSearch, setLocationIsSelected]);

    const handleChange = text => {
        onSearch(text);
        setLocationIsSelected(false);
    };

    return (
        <View>
            <TextInput
                style={styles.searchBar}
                autoFocus
                placeholder="Type here to find a city!"
                placeholderTextColor="white"
                onChangeText={handleChange}
            />

            {loading ? <Text>Loading...</Text> : null}
            {error ? <Text>{error}</Text> : null}
        </View>
    );
};

export default SearchBar;
