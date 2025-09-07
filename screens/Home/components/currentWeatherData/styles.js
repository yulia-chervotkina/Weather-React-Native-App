import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  currentWeatherData: {
    flexDirection: 'column',
    alignContent: 'stretch',
    justifyContent: 'space-around',
    padding: 5,
    marginTop: 10,
  },
  currentWeatherDataItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    // fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    padding: 5,

  },
});

export default styles;
