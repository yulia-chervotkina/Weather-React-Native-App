import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';

import Remove from '@/assets/icons/remove.svg';
import LocationRow from '@/components/LocationRow/LocationRow.jsx';
import Text from '@/components/Text/PlainText.jsx';
import useLocationStore from '@/stores/locationStore.js';
import useStarredLocationsStore from '@/stores/starredLocationsStore.js';

import styles from './styles.js';

const ListEmptyComponent = () => (
    <View style={styles.container}>
        <Text>No favorite locations</Text>
    </View>
);

const keyExtractor = item => item.date;

const StarredLocations = () => {
    const starredLocations = useStarredLocationsStore(
        state => state.starredLocations,
    );

    const { removeLocation } = useStarredLocationsStore();
    const { setSearchedCity } = useLocationStore();
    const locationsArray = useMemo(
        () => Array.from(starredLocations),
        [starredLocations],
    );
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

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Favorite locations</Text>
            <FlatList
                data={locationsArray}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>
    );
};

export default StarredLocations;
