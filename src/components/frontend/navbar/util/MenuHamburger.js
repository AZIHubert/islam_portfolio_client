import React from 'react';

import {
    Link
} from 'react-router-dom';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: theme.custom.navbarHeight,
        width: '100%',
        boxSizing: 'border-box',
        borderBottom: `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}`,
        backgroundColor: theme.palette.primaryColor,
        zIndex: 1000
    },
    wrapper: {
        position: 'relative',
        height: '100%',
        padding: theme.spacing(1, 3)
    },
    logo: {
        backgroundColor: theme.palette.secondaryColor,
        width: theme.custom.navbarHeight - 30,
        height: theme.custom.navbarHeight - 30
    },
}));

export default ({theme}) => {
    const classes= useStyles(theme);
    return (
        <Box
            component="nav"
            className={classes.rootContainer}
        >
            <Box
                className={classes.wrapper}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Link
                    to="/"
                    className={classes.logo}
                >
                    Logo
                </Link>
                <Link
                    to="/"
                    className={classes.logo}
                >
                    Logo
                </Link>
            </Box>
        </Box>
    )
}