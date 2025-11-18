import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';

import Remove from '@/assets/icons/remove.svg';
import LocationRow from '@/components/LocationRow/LocationRow';
import Text from '@/components/Text/PlainText';
import { ROUTES, RootStackParamList } from '@/navigation/types';
import useLocationStore from '@/stores/locationStore';
import useStarredLocationsStore from '@/stores/starredLocationsStore';

import styles from './styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ListEmptyComponent = () => (
    <View style={styles.container}>
        <Text>No favorite locations</Text>
    </View>
);

const keyExtractor = (item: string) => item;

const StarredLocations = () => {
    const starredLocations = useStarredLocationsStore();

    const { removeLocation } = useStarredLocationsStore();
    const { setSearchedLocation } = useLocationStore();
    const locationsArray = useMemo(
        () => Array.from(starredLocations.starredLocations),
        [starredLocations],
    );
    const navigation = useNavigation<NavigationProp>();

    const renderItem = useCallback(
        ({ item }: { item: string }) => (
            <LocationRow
                label={item}
                onPressLocation={() => {
                    setSearchedLocation({ city: item });
                    navigation.popTo(ROUTES.HOME);
                }}
                onPressButton={() => removeLocation(item)}
                button={<Remove style={styles.button} />}
            />
        ),
        [navigation, removeLocation, setSearchedLocation],
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Starred locations</Text>
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
