import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CSSBaselineOverride from './overrides/CSSBaseline';
import LinkOverride from './overrides/Link';
import TypographyOverride from './overrides/Typography';

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
        custom: {
            navbarWidthlg: 250,
            borderSize: '3px',
            aboutAnimationSpeed: 30
        },
    });
}