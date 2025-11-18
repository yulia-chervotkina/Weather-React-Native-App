import { Image, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import Humidity from '@/assets/icons/humidity.svg';
import Percip from '@/assets/icons/percip.svg';
import UV from '@/assets/icons/uv.svg';
import Wind from '@/assets/icons/wind.svg';
import DataStatus from '@/components/DataStatus';
import Text from '@/components/Text/PlainText';
import { months } from '@/constants/calendarData';
import useWeatherStore from '@/stores/weatherStore';

import styles from './styles';

const CurrentWeather = () => {
    const { forecast, error, loading } = useWeatherStore();

    const now = new Date();
    const day = now.getDate();
    const month = months[now.getMonth()];

    return (
        <DataStatus loading={loading} error={error} data={forecast}>
            {data => {
                const { condition, temp_c, uv, humidity, precip_mm, wind_kph } =
                    data.current;
                const iconURL = 'https:' + data.current.condition.icon;
                return (
                    <View style={styles.container}>
                        <Text style={styles.day}>
                            Today, {day} {month}
                        </Text>
                        <Image source={{ uri: iconURL }} style={styles.icon} />
                        <Text style={styles.temperature}>
                            {Math.round(temp_c)}°C
                        </Text>
                        <Text style={styles.condition}>{condition.text}</Text>
                        <Grid style={styles.gridContainer}>
                            <Col>
                                <Row>
                                    <UV />
                                    <Text style={styles.text}>
                                        UV | {Math.round(uv)}
                                    </Text>
                                </Row>
                                <Row>
                                    <Humidity />
                                    <Text style={styles.text}>
                                        Hum | {Math.round(humidity)} %
                                    </Text>
                                </Row>
                                <Row>
                                    <Percip />
                                    <Text style={styles.text}>
                                        Percip | {Math.round(precip_mm)} mm
                                    </Text>
                                </Row>
                                <Row>
                                    <Wind />
                                    <Text style={styles.text}>
                                        Wind | {Math.round(wind_kph)} km/h
                                    </Text>
                                </Row>
                            </Col>
                        </Grid>
                    </View>
                );
            }}
        </DataStatus>
    );
};

export default CurrentWeather;
