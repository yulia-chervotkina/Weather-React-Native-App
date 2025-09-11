import { StyleSheet } from 'react-native';
import {getFontFamily} from '../../../../utils/fontFamily.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: getFontFamily('normal'),
    hight: 353,
    width: 353,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
    shadowColor: '#176ff5ff',
    shadowOffset: {width: -3, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.7,
    elevation: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)'
  },
  icon: {
    width: 64, 
    height: 64,
  },
  condition: {
    fontSize: 24,
    fontWeight: '00',
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: '#4A91FF',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  },
  day: {
    padding: 10
  },
  temperature: {
    fontSize: 100,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: '#4A91FF',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  }
});

export default styles;
