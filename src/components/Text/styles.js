import { StyleSheet } from 'react-native';

import { getFontFamily } from '@utils/fontFamily.js';

const styles = StyleSheet.create({
    plainText: {
        fontSize: 18,
        fontFamily: getFontFamily('normal'),
        color: 'white',
        textShadowColor: '#4A91FF',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
});

export default styles;
