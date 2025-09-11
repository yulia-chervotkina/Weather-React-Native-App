import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    //TODO fix this padding for SVG
    paddingRight: 50,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#4A91FF',
    borderWidth: 1.5,
    borderRadius: 30,
    shadowColor: '#4A91FF',
    shadowOffset: {
      width: -1,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 15,
  },
  text: {
    fontSize: 25,
    paddingTop: 5,
    fontFamily: 'Overpass',
    color: 'white',
    paddingLeft: 15,
    paddingRight: 10,
  }
});

export default styles;
