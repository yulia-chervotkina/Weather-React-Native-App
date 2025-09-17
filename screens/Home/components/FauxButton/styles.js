import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    alignContent: 'start',
    padding: 7,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#4a92ff5e',
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
    marginLeft: 7,
  },
  geoIcon: {
    marginLeft: 10,
  },
});

export default styles;
