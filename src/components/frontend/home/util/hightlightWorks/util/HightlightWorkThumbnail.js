import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    squareBox: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginBottom: theme.spacing(2),
        '&:before': {
            content: '""',
            display: 'block',
            paddingTop: '120%'
        },
    },
    squareContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    thumbnailContainer: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.secondaryColor,
        backgroundImage: props => `url(${props.thumbnailURL})`
    }
}));

export default props => {
    const classes = useStyles(props)
    return (
        <div
            className={classes.squareBox}
        >
            <div
                className={classes.squareContent}
            >
                <div
                    className={classes.thumbnailContainer}
                >
                </div>
            </div>
        </div>
    );
};