import debounce from 'lodash/debounce.js';
import { useEffect, useMemo } from 'react';
import { TextInput, View } from 'react-native';

import colors from '@/assets/colors';
import Text from '@/components/Text/PlainText.tsx';
import useAutocompleteStore from '@/stores/autocompleteStore';

import styles from './styles';

const SearchBar = () => {
    const { searchLocation, loading, error, setLocationIsSelected } =
        useAutocompleteStore();

    const onSearch = useMemo(
        () => debounce(searchLocation, 500),
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
                placeholderTextColor={colors.text}
                onChangeText={handleChange}
            />

            {loading ? <Text>Loading...</Text> : null}
            {error ? <Text>{error}</Text> : null}
        </View>
    );
};

export default SearchBar;
