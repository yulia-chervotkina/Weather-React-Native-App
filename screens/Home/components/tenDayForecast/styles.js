import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tenDayForecastItemText: {
    fontSize: 18,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    height: 35,
    paddingTop: 9,
    paddingBottom: 9,
  },
  image: {
    width: 32,
    height: 32,
  },
});

export default styles;
