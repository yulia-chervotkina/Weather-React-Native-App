import { FlatList, View } from 'react-native';

import Remove from '@assets/icons/remove.svg';
import LocationRow from '@components/LocationRow/LocationRow.jsx';
import Text from '@components/Text/PlainText.jsx';
import { useNavigation } from '@react-navigation/native';
import useLocationStore from '@stores/locationStore.js';
import useStarredLocationsStore from '@stores/starredLocationsStore.js';

import styles from './styles.js';

const StarredLocations = () => {
    const { starredLocations, removeLocation } = useStarredLocationsStore();
    const { setSearchedCity } = useLocationStore();
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <LocationRow
            label={item}
            onPressLocation={() => {
                setSearchedCity(item);
                navigation.popTo('Home');
            }}
            onPressButton={() => removeLocation(item)}
            button={<Remove style={styles.button} />}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Favorite locations</Text>
            {(!starredLocations || starredLocations.length === 0) && (
                <Text style={styles.list}>No favorite locations</Text>
            )}
            <FlatList
                data={starredLocations}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default StarredLocations;
