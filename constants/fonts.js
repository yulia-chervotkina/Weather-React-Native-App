import { isIOS } from '../utils/platformUtil';

export const fontFamilies = {
  OVERPASS: {
    normal: isIOS() ? 'Overpass-Regular' : 'OverpassRegular',
  },
};
