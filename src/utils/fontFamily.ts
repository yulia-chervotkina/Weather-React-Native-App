import { fontFamilies } from '../constants/fonts';

export const getFontFamily = (weight: 'normal') => {
    const selectedFontFamily = fontFamilies.OVERPASS;
    return selectedFontFamily[weight];
};
