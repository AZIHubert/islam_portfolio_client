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
        width: 130,
        minWidth: 130,
        height: 130,
        marginBottom: -30,
        marginRight: 50,
        boxSizing: 'border-box',
        padding: 8,
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: theme.palette.tertiaryColor,
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor
        },
        color: theme.palette.primaryColor,
        [theme.breakpoints.down('xs')]: {
            marginRight: 0
        }
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