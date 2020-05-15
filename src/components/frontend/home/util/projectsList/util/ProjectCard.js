import React from 'react';

import WorkTitle from '../../../../util/WorkTitle';
import TypeTitle from '../../../../util/TypeTitle';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        float: 'right'
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundImage: props => `url(${props.thumbnailURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    }
}))

export default props => {
    const classes = useStyles(props);
    const {title, type} = props;
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.imageContainer}
            ></div>
            <WorkTitle>
                {title}
            </WorkTitle>
            <TypeTitle>
                {type}
            </TypeTitle>
        </div>
    );
};