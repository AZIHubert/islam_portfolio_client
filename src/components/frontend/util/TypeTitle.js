import React from 'react';

import {
    Typography,
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    box: {
        width: 10,
        height: 10,
        marginRight: theme.spacing(0.5),
        backgroundColor: theme.palette.secondaryColor,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut
        }),
    },
    text: {
        textTransform: 'uppercase',
        fontSize: '1.1rem',
        transition: theme.transitions.create('color', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut
        })
    }
}));

export default props => {
    const classes = useStyles(props);
    const {children} = props;
    return (
        <Box
            display="flex"
            alignItems="center"
        >
            <Box
                className={`type-title-box ${classes.box}`}
            >
            </Box>
            <Typography
                variant="h4"
                className={`type-title-title ${classes.text}`}
            >
                {children}
            </Typography>
        </Box>
    );
};