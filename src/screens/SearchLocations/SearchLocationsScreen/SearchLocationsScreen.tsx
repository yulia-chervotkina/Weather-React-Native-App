import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@/assets/colors';

import SearchBar from '../components/SearchBar/SearchBar';
import SuggestedLocationsList from '../components/SuggestedLocationsList/SuggestedLocationsList';
import styles from './styles';

const SearchLocationsScreen = () => {
    return (
        <LinearGradient colors={colors.gradient} style={styles.linearGradient}>
            <View style={styles.container}>
                <SearchBar />
                <SuggestedLocationsList />
            </View>
        </LinearGradient>
    );
};

export default SearchLocationsScreen;
