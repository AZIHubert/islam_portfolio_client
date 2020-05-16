import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default () => {
    const defaultTheme = createMuiTheme({
    palette: {
        "primaryColor": "#fff",
        "secondaryColor": "#000",
        "tertiaryColor": "blue"
    },
        spacing: 10,
    });

    return createMuiTheme({
        palette: {
            ...defaultTheme.palette
        },
        spacing: defaultTheme.spacing,
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    body: {
                        backgroundColor: defaultTheme.palette.primaryColor,
                    },
                    ul: {
                        margin: 0,
                        padding: 0,
                        listStyle: 'none'
                    },
                    a: {
                        color: defaultTheme.palette.secondaryColor,
                        textDecoration: 'none'
                    }
                },
            },
        },
        custom: {
            navbarWidthlg: 250,
            borderSize: '3px',
            aboutAnimationSpeed: 30
        },
    });
}