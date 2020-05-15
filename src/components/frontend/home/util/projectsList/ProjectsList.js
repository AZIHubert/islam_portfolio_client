import React, {
    useState
} from 'react';

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
        overflowX: 'hidden'
    },
    cardContainer: {
        width: '100%'
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const displayedWorks = DUMMY_WORKS
        .filter(work => work.highlight.active)
        .sort((a, b) => a.highlight.index - b.highlight.index);
    const [currentInView, setCurrentInView] = useState(Math.floor(displayedWorks.length));
    const getType = typeId => {
        return DUMMY_TYPES.find(type => type._id === typeId).title
    };
    return (
        <div
            className={classes.container}
        >
            <Box
                display='flex'
                className={classes.cardContainer}
            >
                {displayedWorks.map(work => 
                    <ProjectCard
                        key={work._id}
                        title={work.title}
                        type={getType(work.type)}
                        thumbnailURL={work.thumbnailURL}
                    />
                )}
            </Box>
            <div>
                <span>Preview</span>
            </div>
            <div>
                <span>Next</span>
            </div>
        </div>
    );
};