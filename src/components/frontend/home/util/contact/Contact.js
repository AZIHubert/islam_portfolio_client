import React from 'react';

import Button from './util/Button';

import HomeSubContainer from '../../../util/HomeSubContainer';

import {
    Typography,
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textContainer: {
        paddingRight: theme.spacing(1)
    },
    text: {
        fontFamily: 'AkzidenzGroteskBold',
        fontSize: '1.4rem',
        [theme.breakpoints.up('lg')]: {
            fontSize: '2rem'
        },
        lineHeight: '1.3'
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    return (
        <HomeSubContainer
            paddingTop
            paddingBottom
            borderBottom
        >
            <Box
                display="flex"
                height={75}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    className={classes.textContainer}
                >
                    <Typography
                        variant='h6'
                        className={classes.text}
                    >
                        Say hi or salut, I speak a few languages
                    </Typography>
                </Box>
                <Button/>
            </Box>
        </HomeSubContainer>
    );
};