import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@assets/colors.js';

import SearchBar from '../components/SearchBar/SearchBar.jsx';
import styles from './styles.js';

const SearchLocationsScreen = () => {
    return (
        <LinearGradient colors={colors.gradient} style={styles.linearGradient}>
            <View style={styles.container}>
                <SearchBar />
            </View>
        </LinearGradient>
    );
};

export default SearchLocationsScreen;
