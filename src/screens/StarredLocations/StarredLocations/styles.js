import { StyleSheet } from 'react-native';

import colors from '@assets/colors';
import fontSize from '@assets/fontSize';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontSize: fontSize.medium,
        margin: 10,
    },
    list: {
        margin: 10,
        paddingTop: 5,
    },
    button: {
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.deleteButton,
        borderRadius: 50,
    },
});

export default styles;
