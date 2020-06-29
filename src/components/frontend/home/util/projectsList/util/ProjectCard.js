import React from 'react';

import SubContainer from '../../../../util/SubContainer';
import WorkTitle from '../../../../util/WorkTitle';
import TypeTitle from '../../../../util/TypeTitle';

import { Box } from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        height: 450,
        borderLeft: props => props.first ? '' : `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}`,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut
        }),
        '&:hover': {
            backgroundColor: theme.palette.secondaryColor,
            '& h1, & .type-title-title': {
                color: theme.palette.primaryColor
            },
            '& .type-title-box': {
                backgroundColor: theme.palette.primaryColor
            }
        }
    },
    imageContainer: {
        width: '100%',
        height: 300,
        [theme.breakpoints.down('lg')]: {
            height: 250,
        },
        backgroundImage: props => `url(${props.thumbnailURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        marginBottom: theme.spacing(1)
    },
    titleContainer: {
        transition: theme.transitions.create('color', {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut
        }),
    }
}))

export default props => {
    const classes = useStyles(props);
    const {title, type} = props;
    return (
        <div
            className={classes.container}
        >
            <SubContainer
                paddingTop
                paddingBottom
            >
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                    <Box>
                        <div
                            className={classes.imageContainer}
                        >
                        </div>
                        <div
                            className={classes.titleContainer}
                        >
                            <WorkTitle>
                                {title.length <= 15 ? title : `${title.slice(0, 15)}...`}
                            </WorkTitle>
                        </div>
                    </Box>
                    <TypeTitle>
                        {type}
                    </TypeTitle>
                </Box>
            </SubContainer>
        </div>
    );
};