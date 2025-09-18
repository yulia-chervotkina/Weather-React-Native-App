import { isIOS } from '../utils/platform';

export const fontFamilies = {
  OVERPASS: {
    normal: isIOS() ? 'Overpass-Regular' : 'OverpassRegular',
  },
};
