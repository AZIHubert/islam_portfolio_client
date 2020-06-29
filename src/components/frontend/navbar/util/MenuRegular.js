import React from 'react';

import Logo from '../../../../res/images/logo.png';
import Instagram from '../../../../res/images/Instagram.png';
import LinkedIn from '../../../../res/images/Linkedin.png';
import Pinterest from '../../../../res/images/Pinterest.png';

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

const useStyles = makeStyles(theme => ({
    rootContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: theme.custom.navbarWidthMD,
        [theme.breakpoints.up('lg')]: {
            width: theme.custom.navbarWidthLG,
        },
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
        padding: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2, 5),
        }
    },
    logo: {
        width: '100%',
        '& img': {
            width: '100%'
        }
    },
    listLinks: {
        textTransform: 'uppercase',
        padding: theme.spacing(2, 1, 1, 1),
    },
    link: {
        fontFamily: 'AkzidenzGroteskBoldCondensed',
        transition: 'color 250ms ease',
        '&.active, &:hover': {
            color: theme.palette.tertiaryColor
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3.6rem'
        },
    },
    socialNetworkList: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: theme.spacing(2, 4),
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(2, 12),
        }
    },
    socialNetworkLink: {
        '& img': {
            width: 25,
            height: 'auto'
        }
    }
}));

export default ({
    instagram,
    linkedin,
    pinterest,
    theme
}) => {
    const classes = useStyles(theme);
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
                        <img src={Logo} alt="logo" />
                    </Link>
                </Box>
                <Box
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className={classes.listLinks}
                >
                    <Typography
                        variant="h4"
                        component="li"
                    >
                        <NavLink
                            to="/"
                            exact
                            className={classes.link}
                        >
                            home
                        </NavLink>
                    </Typography>
                    <Typography
                        variant="h4"
                        component="li"
                    >
                        <NavLink
                            to="/about"
                            className={classes.link}
                        >
                            about
                        </NavLink>
                    </Typography>
                    <Typography
                        variant="h4"
                        component="li"
                    >
                        <NavLink
                            to="/works"
                            className={classes.link}
                        >
                            works
                        </NavLink>
                    </Typography>
                    <Typography
                        variant="h4"
                        component="li"
                    >
                        <NavLink
                            to="/blog"
                            className={classes.link}
                        >
                            blog
                        </NavLink>
                    </Typography>
                    <Typography
                        variant="h4"
                        component="li"
                    >
                        <NavLink
                            to="/contact"
                            className={classes.link}
                        >
                            contact
                        </NavLink>
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
                                rel="noopener noreferrer"
                                className={classes.socialNetworkLink}
                            >
                                {/* <LinkedInIcon
                                    className={classes.socialNetworkLink}
                                /> */}
                                <img src={LinkedIn} alt="linkedin logo" />
                            </a>
                        </li>
                    )}
                    
                    <li>
                        {instagram.active && (
                            <a
                                href={instagram.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.socialNetworkLink}
                            >
                                {/* <InstagramIcon
                                    className={classes.socialNetworkLink}
                                /> */}
                                <img src={Instagram} alt="instagram logo" />
                            </a>
                        )}
                    </li>
                    <li>
                        {pinterest.active && (
                            <a
                                href={pinterest.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.socialNetworkLink}
                            >
                                {/* <PinterestIcon
                                /> */}
                                <img src={Pinterest} alt="pinterest logo" />
                            </a>
                        )}
                    </li>
                </Box>
            </div>
        </nav> 
    )
}