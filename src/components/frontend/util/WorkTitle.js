import React from 'react';

import {
    Typography
} from '@material-ui/core';

import {
    makeStyles, useTheme
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    big: {
        fontSize: '3.2rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '2rem'
        },
        fontFamily: 'AkzidenzGroteskBoldCondensed'
    },
    small: {
        fontSize: '1.1rem'
    },
    text: {
        textTransform: 'uppercase'
    }
}));

export default ({variant, children}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const titleVariant = (() => {
        switch(variant){
            case 'big':
                return 'big';
            case 'small':
                return 'small';
            default:
                return 'big'
        }
    })();
    return (
        <Typography
            variant='h1'
            className={`${classes[titleVariant]} ${classes.text}`}
        >
            {children}
        </Typography>
    );
};