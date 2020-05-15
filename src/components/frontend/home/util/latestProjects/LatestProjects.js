import React, {
    useState
} from 'react';

import LatestProjectThumb from './util/LatestProjectThumb';

import HomeSubContainer from '../../../util/HomeSubContainer';
import TypeTitle from '../../../util/TypeTitle';
import WorkTitle from '../../../util/WorkTitle';

import {
    Box
} from '@material-ui/core';

import {
    DUMMY_WORKS,
    DUMMY_GENERAL
} from '../../../../../dummy_datas/dummyDatas';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    latestProjectTitleContainer: {
        paddingRight: theme.spacing(4)
    },
    arrow: {
        backgroundColor: theme.palette.primaryColor,
        padding: 0,
        width: 35,
        height: 30,
        border: `1px solid ${theme.palette.secondaryColor}`,
        '&:focus': {
            outline: 0
        }
    },
    previewArrow: {
        marginRight: theme.spacing(2)
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme)
    const {latestProjectsNum} = DUMMY_GENERAL;
    const latestPojects = DUMMY_WORKS.slice(0, latestProjectsNum);
    const [currentInView, setCurrentInView] = useState(0);
    const handleClickNext = () => {
        setCurrentInView(prevState => (prevState + 1)%latestProjectsNum)
    }
    const handleClickPrev = () => {
        setCurrentInView(prevState => (prevState - 1 + latestProjectsNum)%latestProjectsNum)
    }
    
    return (
        <HomeSubContainer
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
            >
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Box
                        className={classes.latestProjectTitleContainer}
                    >
                        <TypeTitle
                            decoration
                        >
                            Latest Project
                        </TypeTitle>
                    </Box>
                    <WorkTitle>
                        {latestPojects[currentInView].title}
                    </WorkTitle>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <button
                        onClick={handleClickPrev}
                        className={`${classes.previewArrow} ${classes.arrow}`}
                    >
                    </button>
                    <button
                        onClick={handleClickNext}
                        className={classes.arrow}
                    >
                    </button>
                </Box>
            </Box>
        </HomeSubContainer>
    );
};