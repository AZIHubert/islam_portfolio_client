export default (theme) => ({
    MuiCssBaseline: {
        '@global': {
            body: {
                backgroundColor: theme.palette.primaryColor,
            },
            ul: {
                margin: 0,
                padding: 0,
                listStyle: 'none'
            },
            a: {
                color: theme.palette.secondaryColor,
                textDecoration: 'none'
            }
        },
    },
})