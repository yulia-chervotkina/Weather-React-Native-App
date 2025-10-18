import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@/assets/colors.js';

import StarredLocations from '../StarredLocations/StarredLocations.jsx';
import styles from './styles.js';

const StarredLocationsScreen = () => {
    return (
        <LinearGradient colors={colors.gradient} style={styles.linearGradient}>
            <View style={styles.container}>
                <StarredLocations />
            </View>
        </LinearGradient>
    );
};

export default StarredLocationsScreen;
