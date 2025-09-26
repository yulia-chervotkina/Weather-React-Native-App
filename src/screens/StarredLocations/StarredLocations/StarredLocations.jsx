import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import Remove from '@assets/icons/remove.svg';
import LocationRow from '@components/LocationRow/LocationRow.jsx';
import Text from '@components/Text/PlainText.jsx';
import { useNavigation } from '@react-navigation/native';
import useLocationStore from '@stores/locationStore.js';
import useStarredLocationsStore from '@stores/starredLocationsStore.js';

import styles from './styles.js';

const StarredLocations = () => {
    const starredLocations = useStarredLocationsStore(
        state => state.starredLocations,
    );

    const { removeLocation } = useStarredLocationsStore();
    const { setSearchedCity } = useLocationStore();
    const locationsArray = Array.from(starredLocations);
    const navigation = useNavigation();

    const renderItem = useCallback(
        ({ item }) => (
            <LocationRow
                label={item}
                onPressLocation={() => {
                    setSearchedCity(item);
                    navigation.popTo('Home');
                }}
                onPressButton={() => removeLocation(item)}
                button={<Remove style={styles.button} />}
            />
        ),
        [navigation, removeLocation, setSearchedCity],
    );

    const listEmptyComponent = useCallback(
        () => (
            <View style={styles.container}>
                <Text>No favorite locations</Text>
            </View>
        ),
        [],
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Favorite locations</Text>
            <FlatList
                data={locationsArray}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListEmptyComponent={listEmptyComponent}
            />
        </View>
    );
};

export default StarredLocations;
