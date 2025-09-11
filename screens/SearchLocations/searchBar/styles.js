import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    borderStyle: 'solid',
    borderColor: '#4A91FF',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 5,
    marginBottom: 20,
    color: 'white',
    fontFamily: 'Overpass',
    fontSize: 18,
  },
  text: {
    paddingTop: 12,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    margin: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 3,
    borderStyle: 'solid',
    borderColor: '#4A91FF',
    backgroundColor: '#4A91FF',
    borderWidth: 1.5,
    borderRadius: 50,
  },
});

export default styles;
