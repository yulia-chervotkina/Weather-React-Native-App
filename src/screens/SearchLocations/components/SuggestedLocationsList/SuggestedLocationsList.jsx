import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList } from 'react-native';

import Add from '@/assets/icons/add.svg';
import LocationRow from '@/components/LocationRow/LocationRow';
import { ROUTES } from '@/constants/routes';
import useAutocompleteStore from '@/stores/autocompleteStore';
import useLocationStore from '@/stores/locationStore';
import useStarredLocationsStore from '@/stores/starredLocationsStore';

import styles from './styles';

const keyExtractor = (_, index) => index.toString();

const SuggestedLocationsList = () => {
    const { result, setLocationIsSelected } = useAutocompleteStore();
    const { setSearchedLocation } = useLocationStore();
    const navigation = useNavigation();
    const { addLocation } = useStarredLocationsStore();

    const handleSelectLocation = useCallback(
        name => {
            setSearchedLocation({ city: name });
            setLocationIsSelected(true);
            navigation.popTo(ROUTES.HOME);
        },
        [setSearchedLocation, setLocationIsSelected, navigation],
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

    return (
        <FlatList
            data={result}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    );
};

export default SuggestedLocationsList;
