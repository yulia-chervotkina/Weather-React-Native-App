import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@/assets/colors';

import StarredLocations from '../StarredLocations/StarredLocations';
import styles from './styles';

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
