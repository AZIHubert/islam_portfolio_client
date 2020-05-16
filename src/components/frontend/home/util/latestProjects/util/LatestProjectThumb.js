import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';

const useStyles = makeStyles(theme => ({
    squareBox: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginBottom: theme.spacing(1),
        '&:before': {
            content: '""',
            display: 'block',
            paddingTop: '60%'
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
        backgroundColor: theme.secondaryColor
    }
}));

export default ({
    thumbnailsURL,
    currentInView,
    theme,
    setCurrentInView
}) => {
    const classes = useStyles(theme);
    return (
        <Carousel
            afterSlide={prevState => setCurrentInView(prevState)}
            slideIndex={currentInView}
            wrapAround
            withoutControls
        >
            {thumbnailsURL.map((thumbnailUrl, i) => (
                <div
                    key={i}
                    className={classes.squareBox}
                >
                    <div
                        className={classes.squareContent}
                    >
                        <div
                            className={classes.thumbnailContainer}
                            style={{
                                backgroundImage: `url(${thumbnailUrl})`
                            }}
                        >
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};