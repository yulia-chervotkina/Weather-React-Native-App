import { StyleSheet } from 'react-native';

import colors from '@/assets/colors';
import fontSize from '@/assets/fontSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        shadowColor: colors.containerShadow,
        shadowOffset: { width: -3, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.7,
        elevation: 24,
        borderRadius: 20,
        backgroundColor: colors.containerBackground,
    },
    gridContainer: {
        flexDirection: 'column',
        padding: 5,
        marginTop: 10,
    },
    text: {
        height: 40,
        paddingTop: 2,
        paddingBottom: 20,
        paddingLeft: 10,
    },
    icon: {
        width: 64,
        height: 64,
    },
    condition: {
        fontSize: fontSize.medium,
    },
    day: {
        padding: 10,
    },
    temperature: {
        fontSize: fontSize.large,
    },
});

export default styles;
