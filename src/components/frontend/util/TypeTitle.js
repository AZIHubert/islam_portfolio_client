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
        backgroundColor: props => props.decoration ? theme.palette.secondaryColor : ''
    },
    text: {
        textTransform: 'uppercase',
        fontSize: '1.1rem'
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
                className={classes.box}
            >
            </Box>
            <Typography
                variant="h4"
                className={classes.text}
            >
                {children}
            </Typography>
        </Box>
    );
};