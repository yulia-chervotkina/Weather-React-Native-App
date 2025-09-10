import React from 'react';
import styles from './styles.js';
import { TouchableOpacity, View, Text, Image, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useLocationStore from '../../../../stores/locationStore.js';
import geopoint from '../../../../assets/icons/GeoPoint.png';
import star from '../../../../assets/icons/Star.png';


const HomeScreenButton = () => {
    const { city } = useLocationStore();
    const navigation = useNavigation();

    return(
        <View style={styles.button}>
            <Image source={geopoint} style={styles.icon}></Image>
            <TouchableOpacity>
                <Text onPress={() => navigation.navigate('Search')} style={styles.text}>{city}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Starred')}>
                <Image source={star} style={styles.icon}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreenButton;