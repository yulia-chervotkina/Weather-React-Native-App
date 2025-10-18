import GetLocation from 'react-native-get-location';

const getUserLocation = () => {
    return GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 30000,
    });
};
export default getUserLocation;
