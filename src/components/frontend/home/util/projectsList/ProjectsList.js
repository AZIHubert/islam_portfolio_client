import React, {
    useState
} from 'react';

import Carousel from 'nuka-carousel';

import ProjectCard from './util/ProjectCard';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

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
        width: 60,
        opacity: 0.2,
        backgroundColor: theme.palette.primaryColor
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const displayedWorks = DUMMY_WORKS
        .filter(work => work.highlight.active)
        .sort((a, b) => a.highlight.index - b.highlight.index);
    const [currentInView, setCurrentInView] = useState(0);
    const [isFirst, setIsFirst] = useState(true);
    const getType = typeId => {
        return DUMMY_TYPES.find(type => type._id === typeId).title
    };
    const nextSlide = () => {
        setCurrentInView(prevState => {
            let currents = 3.2 + prevState;
            if(currents + 1 > displayedWorks.length){
                return displayedWorks.length - currents;
            } else {
                return prevState += 1;
            }
        });
    }
    const prevSlide = () => {
        setCurrentInView(prevState => {
            if(!prevState){
                return displayedWorks.length - 3.2;
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
                slidesToShow={3.2}
                withoutControls
                slideIndex={currentInView}
                afterSlide={prevState => console.log(prevState)}
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
                    <span>Preview</span>
                </Box>
                <Box
                    onClick={nextSlide}
                    className={classes.nav}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <span>Next</span>
                </Box>
            </Box>
        </Box>
    );
};