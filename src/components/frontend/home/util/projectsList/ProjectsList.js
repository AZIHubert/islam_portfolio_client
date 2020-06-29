import React, {
    useState,
    useEffect
} from 'react';

import Arrow from '../../../../../res/images/Arrow.png';

import Carousel from 'nuka-carousel';

import ProjectCard from './util/ProjectCard';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import withWidth, {
    isWidthDown
} from '@material-ui/core/withWidth'

import {
    DUMMY_WORKS,
    DUMMY_TYPES
} from '../../../../../dummy_datas/dummyDatas';

const useStyles = makeStyles(theme => ({
    container: {
        overflowX: 'hidden',
        borderBottom: `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}`
    },
    cardContainer: {
        width: '100%'
    },
    navContainer: {
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        top: 0,
        left: 0
    },
    nav: {
        pointerEvents: 'auto',
        cursor: 'pointer',
        width: 100,
        [theme.breakpoints.down('lg')]: {
            width: 75
        },
        opacity: 0.4,
        backgroundColor: theme.palette.primaryColor,
        padding: theme.spacing(1),
        '& img': {
            width: '100%',
            height: 'auto'
        }
    },
    prevArrow: {
        transformOrigin: 'center',
        transform: 'rotate(180deg)'
    }
}));

export default withWidth()(props => {
    const [numToDisplay, setNumToDisplay] = useState(isWidthDown('xs', props.width) ? 1.2 : isWidthDown('sm', props.width) ? 2.2 : 3.2);
    const classes = useStyles(props.theme);
    const displayedWorks = DUMMY_WORKS
        .filter(work => work.highlight.active)
        .sort((a, b) => a.highlight.index - b.highlight.index);
    const [currentInView, setCurrentInView] = useState(0);
    useEffect(() => {
        setNumToDisplay(isWidthDown('xs', props.width) ? 1.2 : isWidthDown('sm', props.width) ? 2.2 : 3.2);
        setCurrentInView(0);
    }, [props.width]);
    const getType = typeId => {
        return DUMMY_TYPES.find(type => type._id === typeId).title
    };
    const nextSlide = () => {
        setCurrentInView(prevState => {
            let currents = numToDisplay + prevState;
            if(prevState === displayedWorks.length - numToDisplay)
                return 0;
            if(currents + 1 > displayedWorks.length){
                return displayedWorks.length - numToDisplay;
            } else {
                return prevState += 1;
            }
        });
    }
    const prevSlide = () => {
        setCurrentInView(prevState => {
            if(!prevState){
                return displayedWorks.length - numToDisplay;
            }
            if(prevState - 1 < 0){
                return 0;
            } else {
                return prevState -= 1;
            }
        });
    }
    return (
        <Box
            className={classes.container}
            position='relative'
        >
            <Carousel
                slidesToShow={numToDisplay}
                withoutControls
                slideIndex={currentInView}
                disableEdgeSwiping
            >
                {displayedWorks.map((work, i) => 
                    <ProjectCard
                        key={work._id}
                        title={work.title}
                        type={getType(work.type)}
                        thumbnailURL={work.thumbnailURL}
                        first={!i}
                    />
                )}
            </Carousel>
            <Box
                position='absolute'
                className={classes.navContainer}
                display="flex"
                justifyContent={"space-between"}
            >
                <Box
                    onClick={prevSlide}
                    className={classes.nav}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <img src={Arrow} alt="arrow" className={classes.prevArrow} />
                </Box>
                <Box
                    onClick={nextSlide}
                    className={classes.nav}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <img src={Arrow} alt="arrow" />
                </Box>
            </Box>
        </Box>
    );
});