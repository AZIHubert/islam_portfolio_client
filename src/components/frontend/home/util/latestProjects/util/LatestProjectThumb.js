import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Carousel
} from 'react-responsive-carousel';

const getConfigurableProps = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: false,
    swipeable: true,
    dynamicHeight: false
});

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
    const updateCurrentSlide = (index) => {
        setCurrentInView(index);
    };
    return (
        <Carousel
            selectedItem={currentInView}
            {...getConfigurableProps()}
            onChange={updateCurrentSlide}
        >
            {thumbnailsURL.map(thumbnailUrl => (
                <div
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