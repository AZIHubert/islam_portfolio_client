import React from 'react';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import HightlightWork from './util/HightlihghtWork';

const useStyles = makeStyles(theme => ({
    container: {
        borderBottom: `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}`
    }
}))

export default ({works, theme}) => {
    const classes = useStyles(theme);
    return (
            <Box
                display="flex"
                className={classes.container}
            >
                {works.map((work, i) => (
                    <HightlightWork
                        key={work._id}
                        borderRight={!i}
                        work={work}
                    />
                ))}
            </Box>
    );
};