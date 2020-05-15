import React from 'react';

import {
    Link,
    NavLink
} from 'react-router-dom';

import {
    Box, Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    DUMMY_GENERAL
} from '../../../dummy_datas/dummyDatas';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: theme.custom.navbarWidthlg,
        boxSizing: 'border-box',
        borderRight: `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}`,
        backgroundColor: theme.palette.primaryColor,
        zIndex: 1000
    },
    wrapper: {
        position: 'relative',
        height: '100%'
    },
    logoContainer: {
        borderBottom: `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}`,
        padding: theme.spacing(1),
    },
    logo: {
        backgroundColor: theme.palette.secondaryColor,
        width: '100%',
        height: 180
    },
    list: {
        textTransform: 'uppercase',
        padding: theme.spacing(1),
    },
    socialNetworkList: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const {
        instagram,
        linkedin,
        pinterest
    } = DUMMY_GENERAL;
    return (
    <nav
        className={classes.rootContainer}
    >
        <div
            className={classes.wrapper}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.logoContainer}
            >
                <Link
                    to="/"
                    className={classes.logo}
                >
                    Logo
                </Link>
            </Box>
            <Box
                component="ul"
                display="flex"
                flexDirection="column"
                alignItems="center"
                className={classes.list}
            >
                <Typography
                    variant="h4"
                    component="li"
                >
                    <NavLink to="/">home</NavLink>
                </Typography>
                <Typography
                    variant="h4"
                    component="li"
                >
                    <NavLink to="/about">about</NavLink>
                </Typography>
                <Typography
                    variant="h4"
                    component="li"
                >
                    <NavLink to="/works">works</NavLink>
                </Typography>
                <Typography
                    variant="h4"
                    component="li"
                >
                    <NavLink to="/blog">blog</NavLink>
                </Typography>
                <Typography
                    variant="h4"
                    component="li"
                >
                    <NavLink to="/contact">contact</NavLink>
                </Typography>
            </Box>
            <Box
                component="ul"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={`${classes.list} ${classes.socialNetworkList}`}
            >
                {linkedin.active && (
                    <li>
                        <a
                            href={linkedin.link}
                            target="_blank"
                        >
                            IN
                        </a>
                    </li>
                )}
                
                <li>
                    {instagram.active && (
                        <a
                            href={instagram.link}
                            target="_blank"
                        >
                            instagram
                        </a>
                    )}
                </li>
                <li>
                    {pinterest.active && (
                        <a
                            href={pinterest.link}
                            target="_blank"
                        >
                            pinterest
                        </a>
                    )}
                </li>
            </Box>
        </div>
    </nav> 
    )
}