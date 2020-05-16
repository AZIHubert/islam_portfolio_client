import React from 'react';

import {
    Button
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles'

import {DUMMY_GENERAL} from '../../../../../../dummy_datas/dummyDatas';

const useStyles = makeStyles(theme => ({
    button: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: theme.palette.tertiaryColor,
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor
        },
        position: 'absolute',
        color: theme.palette.primaryColor,
        top: -10,
        right: 100
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme)
    const {email} = DUMMY_GENERAL;
    return (
        <Button
            href={`mailto:${email}`}
            className={classes.button}
            disableRipple
        >
            get started
        </Button>
    );
}