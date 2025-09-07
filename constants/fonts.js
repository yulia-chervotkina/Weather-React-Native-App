import {isIOS} from '../utils/platformUtil';

export const fontFamilies = {
  OVERPASS: {
    normal: isIOS() ? 'Overpass-Regular' : 'OverpassRegular',
    // medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
    // bold: isIOS() ? 'Montserrat-Bold' : 'MontserratBold',
  },
};