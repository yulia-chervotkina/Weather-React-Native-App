import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StarredLocations from '../StarredLocations/StarredLocations.jsx';
import styles from './styles.js';

const StarredLocationsScreen = () => {
    return (
        <LinearGradient
            colors={['#47BFDF', '#4A91FF']}
            style={styles.linearGradient}
        >
            <View style={styles.container}>
                <StarredLocations />
            </View>
        </LinearGradient>
    );
};

export default StarredLocationsScreen;
