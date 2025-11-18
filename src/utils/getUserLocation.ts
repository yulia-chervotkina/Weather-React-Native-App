import GetLocation from 'react-native-get-location';

const getUserLocation = () =>
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 30000,
    }).then(loc => {
        const { latitude, longitude } = loc;
        return { latitude, longitude };
    });

export default getUserLocation;
