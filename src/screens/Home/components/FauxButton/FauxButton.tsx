import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import Geopoint from '@/assets/icons/location.svg';
import Star from '@/assets/icons/star.svg';
import Text from '@/components/Text/PlainText';
import { ROUTES, RootStackParamList } from '@/navigation/types';

import styles from './styles';

type FauxButton = {
    label: string;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const FauxButton = ({ label }: FauxButton) => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <Grid>
            <Row style={styles.button}>
                <Col size={10}>
                    <Geopoint style={styles.geoIcon} />
                </Col>
                <Col size={80}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.SEARCH)}
                    >
                        <Text style={styles.text}>{label}</Text>
                    </TouchableOpacity>
                </Col>
                <Col size={10}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.STARRED)}
                    >
                        <Star />
                    </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
    );
};

export default FauxButton;
