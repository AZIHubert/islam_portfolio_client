import AkzidenzGroteskBoldTTF from '../../res/fonts/akzidenzGrotesk/bold/AkzidenzGroteskBQ-Bold.ttf';
import AkzidenzGroteskBoldWoff from '../../res/fonts/akzidenzGrotesk/bold/AkzidenzGroteskBQ-Bold.woff';
import AkzidenzGroteskBoldWoff2 from '../../res/fonts/akzidenzGrotesk/bold/AkzidenzGroteskBQ-Bold.woff2';
import AkzidenzGroteskBoldSVG from '../../res/fonts/akzidenzGrotesk/bold/AkzidenzGroteskBQ-Bold.svg';

import AkzidenzGroteskBoldCondensedTTF from '../../res/fonts/akzidenzGrotesk/boldCondensed/AkzidenzGroteskBQ-BdCnd.ttf';
import AkzidenzGroteskBoldCondensedWoff from '../../res/fonts/akzidenzGrotesk/boldCondensed/AkzidenzGroteskBQ-BdCnd.woff';
import AkzidenzGroteskBoldCondensedWoff2 from '../../res/fonts/akzidenzGrotesk/boldCondensed/AkzidenzGroteskBQ-BdCnd.woff2';
import AkzidenzGroteskBoldCondensedSVG from '../../res/fonts/akzidenzGrotesk/boldCondensed/AkzidenzGroteskBQ-BdCnd.svg';

import AkzidenzGroteskMediumCondensedTTF from '../../res/fonts/akzidenzGrotesk/mediumCondensed/AkzidenzGroteskBQ-MdCnd.ttf';
import AkzidenzGroteskMediumCondensedWoff from '../../res/fonts/akzidenzGrotesk/mediumCondensed/AkzidenzGroteskBQ-MdCnd.woff';
import AkzidenzGroteskMediumCondensedWoff2 from '../../res/fonts/akzidenzGrotesk/mediumCondensed/AkzidenzGroteskBQ-MdCnd.woff2';
import AkzidenzGroteskMediumCondensedSVG from '../../res/fonts/akzidenzGrotesk/mediumCondensed/AkzidenzGroteskBQ-MdCnd.svg';

import AkzidenzGroteskRegularTTF from '../../res/fonts/akzidenzGrotesk/regular/AkzidenzGroteskBQ-Reg.ttf';
import AkzidenzGroteskRegularWoff from '../../res/fonts/akzidenzGrotesk/regular/AkzidenzGroteskBQ-Reg.woff';
import AkzidenzGroteskRegularWoff2 from '../../res/fonts/akzidenzGrotesk/regular/AkzidenzGroteskBQ-Reg.woff2';
import AkzidenzGroteskRegularSVG from '../../res/fonts/akzidenzGrotesk/regular/AkzidenzGroteskBQ-Reg.svg';


const AkzidenzGroteskBold = {
    fontFamily: 'AkzidenzGroteskBold',
    fontDisplay: 'swap',
    src: `
        local('AkzidenzGrotestBQ-Bold'),
        url(${AkzidenzGroteskBoldWoff2}) format('woff2'),
        url(${AkzidenzGroteskBoldWoff}) format('woff'),
        url(${AkzidenzGroteskBoldTTF}) format('ttf'),
        url(${AkzidenzGroteskBoldSVG}) format('svg')
     `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const AkzidenzGroteskBoldCondensed = {
    fontFamily: 'AkzidenzGroteskBoldCondensed',
    fontDisplay: 'swap',
    src: `
        local('AkzidenzGrotestBQ-BdCnd'),
        url(${AkzidenzGroteskBoldCondensedWoff2}) format('woff2'),
        url(${AkzidenzGroteskBoldCondensedWoff}) format('woff'),
        url(${AkzidenzGroteskBoldCondensedTTF}) format('ttf'),
        url(${AkzidenzGroteskBoldCondensedSVG}) format('svg')
     `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const AkzidenzGroteskMediumCondensed = {
    fontFamily: 'AkzidenzGroteskMediumCondensed',
    fontDisplay: 'swap',
    src: `
        local('AkzidenzGrotestBQ-MdCnd'),
        url(${AkzidenzGroteskMediumCondensedWoff2}) format('woff2'),
        url(${AkzidenzGroteskMediumCondensedWoff}) format('woff'),
        url(${AkzidenzGroteskMediumCondensedTTF}) format('ttf'),
        url(${AkzidenzGroteskMediumCondensedSVG}) format('svg')
     `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const AkzidenzGroteskRegular = {
    fontFamily: 'AkzidenzGroteskRegular',
    fontDisplay: 'swap',
    src: `local('AkzidenzGrotestBQ-Reg'),
        local('AkzidenzGrotestBQ-Reg'),
        url(${AkzidenzGroteskRegularWoff2}) format('woff2'),
        url(${AkzidenzGroteskRegularWoff}) format('woff'),
        url(${AkzidenzGroteskRegularTTF}) format('ttf'),
        url(${AkzidenzGroteskRegularSVG}) format('svg')
     `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

export default [
    AkzidenzGroteskBold,
    AkzidenzGroteskBoldCondensed,
    AkzidenzGroteskMediumCondensed,
    AkzidenzGroteskRegular
];

export const fontFamily = 'AkzidenzGroteskRegular, sans-serif';