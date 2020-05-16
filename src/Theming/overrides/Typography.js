export default (theme) => ({
    MuiTypography: {
        root: {
            textTransform: 'uppercase'
        },
        colorPrimary: {
            color: theme.palette.secondaryColor,
            '&:hover': {
                color: theme.palette.tertiaryColor
            }
        }
    }
});