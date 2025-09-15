import React from 'react';
import styles from './styles.js';
import { TouchableOpacity } from 'react-native';
import { Row, Col, Grid } from "react-native-easy-grid";
import Text from '../../../../components/Text/PlainText.jsx'
import {useNavigation} from '@react-navigation/native';
import useLocationStore from '../../../../stores/locationStore.js';
import Geopoint from '../../../../assets/icons/location.svg';
import Star from '../../../../assets/icons/star.svg';


const HomeScreenButton = () => {
    const { city } = useLocationStore();
    const navigation = useNavigation();

    return(
        <Grid>
            <Row style={styles.button}>
                <Col size={10}><Geopoint style={styles.geoIcon}/></Col>
                <Col size={80}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}> 
                        <Text style={styles.text}>{city}</Text>
                    </TouchableOpacity></Col>
                <Col size={10}>
                    <TouchableOpacity onPress={() => navigation.navigate('Starred')}>
                        <Star/>
                    </TouchableOpacity></Col>
            </Row>
        </Grid>
    )
}

export default HomeScreenButton;