import { StyleSheet } from 'react-native';

import colors from '@assets/colors';
import fontSize from '@assets/fontSize';
import { getFontFamily } from '@utils/fontFamily.js';

const styles = StyleSheet.create({
    plainText: {
        fontSize: fontSize.small,
        fontFamily: getFontFamily('normal'),
        color: colors.text,
        textShadowColor: colors.textShadow,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
});

export default styles;
