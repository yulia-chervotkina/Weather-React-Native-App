import React from 'react';
import styles from './styles.js';
import { TouchableOpacity } from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';
import Text from '../../../../components/Text/PlainText.jsx';
import { useNavigation } from '@react-navigation/native';
import useLocationStore from '../../../../stores/locationStore.js';
import Geopoint from '../../../../assets/icons/location.svg';
import Star from '../../../../assets/icons/star.svg';

const HomeScreenButton = () => {
  const { currentCity, searchedCity } = useLocationStore();
  const navigation = useNavigation();
  const activeCity = searchedCity || currentCity;
  console.log(activeCity);
  return (
    <Grid>
      <Row style={styles.button}>
        <Col size={10}>
          <Geopoint style={styles.geoIcon} />
        </Col>
        <Col size={80}>
          <TouchableOpacity onPress={() => navigation.popTo('Search')}>
            <Text style={styles.text}>{activeCity}</Text>
          </TouchableOpacity>
        </Col>
        <Col size={10}>
          <TouchableOpacity onPress={() => navigation.popTo('Starred')}>
            <Star />
          </TouchableOpacity>
        </Col>
      </Row>
    </Grid>
  );
};

export default HomeScreenButton;
