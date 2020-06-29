import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(4),
        borderTop: props => props.borderTop ? `1px solid ${theme.palette.secondaryColor}` : '',
        cursor: 'pointer',
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut
        }),
        '&:hover': {
            backgroundColor: theme.palette.secondaryColor,
            '& h1': {
                color: theme.palette.primaryColor
            }
        }
    },
    imageContainer: {
        width: '100%',
        paddingBottom: theme.spacing(2),
        '& img': {
            width: '100%',
            height: 'auto',
            display: 'block'
        }
    },
    title: {
        fontSize: '1.75rem',
        transition: theme.transitions.create('color', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut
        })
    }
}));

export default (props) => {
    const {work} = props;
    const classes = useStyles(props);
    return (
        <Box className={classes.container}>
            <div className={classes.imageContainer}>
                <img src={work.thumbnailURL} alt="thumbnail" />
            </div>
            <div>
                <Typography variant="h1" className={classes.title}>{work.title}</Typography>
            </div>
        </Box>
    );
};