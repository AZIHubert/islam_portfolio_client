import React, {
    useState
} from 'react';

import Arrow from '../../../../../res/images/Arrow.png';

import LatestProjectThumb from './util/LatestProjectThumb';

import SubContainer from '../../../util/SubContainer';
import TypeTitle from '../../../util/TypeTitle';
import WorkTitle from '../../../util/WorkTitle';

import {
    Box
} from '@material-ui/core';

import withWidth, {
    isWidthDown
} from '@material-ui/core/withWidth';

import {
    DUMMY_WORKS,
    DUMMY_GENERAL
} from '../../../../../dummy_datas/dummyDatas';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textContainer: {
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(1)
    },
    latestProjectTitleContainer: {
        paddingRight: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0
        }
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        padding: 0,
        width: 70,
        cursor: 'pointer',
        [theme.breakpoints.down('lg')]: {
            width: 50,
        },
        '& img': {
            width: '100%',
            height: 'auto'
        },
        '&:focus': {
            outline: 'none '
        }
    },
    previewArrowContainer: {
        marginRight: theme.spacing(2),
    },
    previewArrow: {
        transform: 'rotate(180deg)',
        msTransformOrigin: 'center'
    }
}));

export default withWidth()(props => {
    const classes = useStyles(props.theme)
    const {latestProjectsNum} = DUMMY_GENERAL;
    const latestPojects = DUMMY_WORKS.slice(0, latestProjectsNum);
    const latestPojectsLength = latestPojects.length;
    const [currentInView, setCurrentInView] = useState(0);
    const handleClickNext = () => {
        if(currentInView < latestPojectsLength - 1)
            setCurrentInView(prevState => (prevState + 1)%latestProjectsNum);
        else setCurrentInView(0);
    }
    const handleClickPrev = () => {
        if(currentInView > 0)
            setCurrentInView(prevState => (prevState - 1 + latestProjectsNum)%latestProjectsNum);
        else setCurrentInView(latestPojectsLength - 1);
    }
    
    return (
        <SubContainer
            paddingTop
            paddingBottom
            borderBottom
        >
            <LatestProjectThumb
                thumbnailsURL={latestPojects.map(project => project.thumbnailURL)}
                currentInView={currentInView}
                setCurrentInView={setCurrentInView}
            />
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems="center"
                flexDirection={isWidthDown('sm', props.width) ? 'column' : 'row' }
                className={classes.textContainer}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isWidthDown('sm', props.width) ? 'space-between' : 'flex-start' }
                    width="75%"
                >
                    <Box
                        className={classes.latestProjectTitleContainer}
                    >
                        <TypeTitle>
                            Latest Project
                        </TypeTitle>
                    </Box>
                    <Box width="45%">
                        <WorkTitle>
                            {latestPojects[currentInView].title.length <= 15 ? latestPojects[currentInView].title : `${latestPojects[currentInView].title.slice(0, 15)}...`}
                        </WorkTitle>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        minWidth={75}
                    >
                        <button
                            onClick={handleClickPrev}
                            className={`${classes.arrow} ${classes.previewArrowContainer}`}
                        >
                            <img src={Arrow} alt="arrow" className={classes.previewArrow} />
                        </button>
                        <button
                            onClick={handleClickNext}
                            className={classes.arrow}
                        >
                            <img src={Arrow} alt="arrow" />
                        </button>
                    </Box>
                </Box>
            </Box>
        </SubContainer>
    );
});