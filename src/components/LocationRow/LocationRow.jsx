import { TouchableOpacity, View } from 'react-native';

import Text from '../Text/PlainText.tsx';
import styles from './styles.js';

const LocationRow = ({ label, onPressLocation, onPressButton, button }) => {
    return (
        <View style={styles.locationRow}>
            <TouchableOpacity onPress={onPressLocation}>
                <Text style={styles.list}>{label}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressButton}>
                {button}
            </TouchableOpacity>
        </View>
    );
};

export default LocationRow;
