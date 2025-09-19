import { StyleSheet } from 'react-native';

import colors from '@assets/colors';
import fontSize from '@assets/fontSize';
import { getFontFamily } from '@utils/fontFamily.js';

const styles = StyleSheet.create({
    searchBar: {
        borderStyle: 'solid',
        borderColor: colors.border,
        borderWidth: 1.5,
        borderRadius: 20,
        padding: 5,
        marginBottom: 20,
        color: colors.text,
        fontFamily: getFontFamily('normal'),
        fontSize: fontSize.small,
        textShadowColor: colors.textShadow,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    button: {
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.addButton,
        borderRadius: 40,
    },
});

export default styles;
