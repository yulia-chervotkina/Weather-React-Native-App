import React from 'react';
import styles from './styles.js';
import { TouchableOpacity, View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useLocationStore from '../../../../stores/locationStore.js';
import Geopoint from '../../../../assets/icons/location.svg';
import Star from '../../../../assets/icons/star.svg';


const HomeScreenButton = () => {
    const { city } = useLocationStore();
    const navigation = useNavigation();

    return(
        <View style={styles.button}>
            <Geopoint style={styles.icon}/>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}> 
                <Text style={styles.text}>{city}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Starred')}>
                <Star style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreenButton;