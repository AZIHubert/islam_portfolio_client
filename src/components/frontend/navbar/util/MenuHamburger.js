import React from 'react';

import { Link } from 'react-router-dom';

import { Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Logo from '../../../../res/images/logo.png';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: theme.custom.navbarHeight,
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: theme.palette.primaryColor,
        zIndex: 1000
    },
    wrapper: {
        position: 'relative',
        height: '100%',
        padding: theme.spacing(1.5, 2)
    },
    logo: {
        height: '100%',
        '& img': {
            height: '100%'
        }
    },
    hamburger: {
        width: 35,
        height: 25,
        padding: 0
    },
    bar: {
        width: '100%',
        height: 4,
        backgroundColor: theme.palette.secondaryColor
    }
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
                    <img src={Logo} alt="logo" />
                </Link>
                <Box className={classes.hamburger} display="flex" flexDirection="column" justifyContent="space-between">
                    <div className={classes.bar}></div>
                    <div className={classes.bar}></div>
                    <div className={classes.bar}></div>
                </Box>
            </Box>
        </Box>
    )
}