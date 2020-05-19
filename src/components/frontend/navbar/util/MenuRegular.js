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

import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: theme.custom.navbarWidthMD,
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
    listLinks: {
        textTransform: 'uppercase',
        padding: theme.spacing(2, 1, 1, 1),
    },
    link: {
        fontFamily: 'AkzidenzGroteskBoldCondensed',
        transition: 'color 250ms ease',
        '&.active, &:hover': {
            color: theme.palette.tertiaryColor
        }
    },
    socialNetworkList: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: theme.spacing(2, 4),
    },
    socialNetworkLink: {
        transition: 'color 250ms ease',
        fontSize: '2rem',
        '&:hover': {
            color: theme.palette.tertiaryColor
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
                        Logo
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
                            >
                                <LinkedInIcon
                                    className={classes.socialNetworkLink}
                                />
                            </a>
                        </li>
                    )}
                    
                    <li>
                        {instagram.active && (
                            <a
                                href={instagram.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon
                                    className={classes.socialNetworkLink}
                                />
                            </a>
                        )}
                    </li>
                    <li>
                        {pinterest.active && (
                            <a
                                href={pinterest.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <PinterestIcon
                                    className={classes.socialNetworkLink}
                                />
                            </a>
                        )}
                    </li>
                </Box>
            </div>
        </nav> 
    )
}