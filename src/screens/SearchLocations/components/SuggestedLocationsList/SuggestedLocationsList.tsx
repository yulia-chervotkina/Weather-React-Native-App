import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import Add from '@/assets/icons/add.svg';
import LocationRow from '@/components/LocationRow/LocationRow';
import { ROUTES, RootStackParamList } from '@/navigation/types';
import useAutocompleteStore from '@/stores/autocompleteStore';
import useLocationStore from '@/stores/locationStore';
import useStarredLocationsStore from '@/stores/starredLocationsStore';
import type { Location } from '@/types/types';

import styles from './styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const keyExtractor = (_: unknown, index: number) => index.toString();

const SuggestedLocationsList = () => {
    const { result, setLocationIsSelected } = useAutocompleteStore();
    const { setSearchedLocation } = useLocationStore();
    const navigation = useNavigation<NavigationProp>();
    const { addLocation } = useStarredLocationsStore();

    const handleSelectLocation = useCallback(
        (name: string) => {
            setSearchedLocation({ city: name });
            setLocationIsSelected(true);
            navigation.popTo(ROUTES.HOME);
        },
        [setSearchedLocation, setLocationIsSelected, navigation],
    );

    const renderItem: ListRenderItem<Location> = useCallback(
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
