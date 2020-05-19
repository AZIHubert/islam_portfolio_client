import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CSSBaselineOverride from './overrides/CSSBaseline';
import LinkOverride from './overrides/Link';
import TypographyOverride from './overrides/Typography';

import customVariables from './custom';

import {
    defaultFontFamily
} from './fonts';

export default () => {
    const defaultTheme = createMuiTheme({
        palette: {
            "primaryColor": "#fff",
            "secondaryColor": "#000",
            "tertiaryColor": "blue"
        },
        spacing: 10,
    });

    const CSSBaseline = CSSBaselineOverride(defaultTheme);
    const Link = LinkOverride(defaultTheme);
    const Typography = TypographyOverride(defaultTheme);
    const custom = customVariables(defaultTheme);

    return createMuiTheme({
        palette: {
            ...defaultTheme.palette
        },
        spacing: defaultTheme.spacing,
        overrides: {
            ...CSSBaseline,
            ...Link,
            ...Typography
        },
        typography: {
            fontFamily: defaultFontFamily
        },
        custom: {
            ...custom
        },
    });
}