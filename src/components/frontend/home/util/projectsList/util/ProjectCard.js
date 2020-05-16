import React from 'react';

import HomeSubContainer from '../../../../util/HomeSubContainer';
import WorkTitle from '../../../../util/WorkTitle';
import TypeTitle from '../../../../util/TypeTitle';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        borderLeft: props => props.first ? '' : `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}`
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundImage: props => `url(${props.thumbnailURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    },
    titleContainer: {
        height: 100
    }
}))

export default props => {
    const classes = useStyles(props);
    const {title, type} = props;
    return (
        <div
            className={classes.container}
        >
            <HomeSubContainer
                paddingTop
                paddingBottom
            >
                <div
                    className={classes.imageContainer}
                >
                </div>
                <div
                    className={classes.titleContainer}
                >
                    <WorkTitle>
                        {title}
                    </WorkTitle>
                </div>
                <TypeTitle>
                    {type}
                </TypeTitle>
            </HomeSubContainer>
        </div>
    );
};