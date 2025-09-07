import { StyleSheet } from 'react-native';
import {getFontFamily} from '../../../../utils/fontFamily.js'

const styles = StyleSheet.create({
  currentTemperature: {
    fontFamily: getFontFamily('normal'),
    hight: 353,
    width: 353,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // shadowColor: 'green',
    // shadowOffset: {width: 0, height: 100},
    // shadowRadius: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  icon: {
    width: 64, 
    height: 64,
  },
  condition: {
    fontSize: 24,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  day: {
    fontSize: 18,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  temperature: {
    fontSize: 100,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});

export default styles;
