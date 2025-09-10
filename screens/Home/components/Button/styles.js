import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 10,
    shadowColor: 'lime',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  icon: {
    width: 35, 
    height: 35,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Overpass',
    color: 'white',
    paddingLeft: 70,
    paddingRight: 70,
  }
});

export default styles;
