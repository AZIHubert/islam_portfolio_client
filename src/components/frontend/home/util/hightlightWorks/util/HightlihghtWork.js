import React from 'react';

import {
    Box
} from '@material-ui/core';

import HomeSubContainer from '../../../../util/HomeSubContainer';
import TypeTitle from '../../../../util/TypeTitle';
import WorkTitle from '../../../../util/WorkTitle';
import HighlightWorkThumbnail from './HightlightWorkThumbnail';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    DUMMY_TYPES
} from '../../../../../../dummy_datas/dummyDatas';

const useStyles = makeStyles(theme => ({
    container: {
        width: '50%',
        borderRight: props => props.borderRight ? `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}` : 0
    },
    typeContainer: {
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            paddingBottom: theme.spacing(1)
        }
    }
}))

export default props => {
    const classes = useStyles(props);
    const {
        work: {
            title,
            type,
            thumbnailURL
        }
    } = props;
    const getType = typeId => {
        return DUMMY_TYPES.find(type => type._id === typeId).title
    };
    return (
        <Box
            className={classes.container}
        >
            <HomeSubContainer
                paddingTop
                paddingBottom
            >
                <Box
                    className={classes.typeContainer}
                >
                    <TypeTitle
                        decoration
                    >
                        {getType(type)}
                    </TypeTitle>
                </Box>
                <HighlightWorkThumbnail
                    thumbnailURL={thumbnailURL}
                />
                <WorkTitle>
                    {title}
                </WorkTitle>
            </HomeSubContainer>
        </Box>
    );
};