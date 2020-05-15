import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        borderTop: props => props.borderTop ? `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}` :  '',
        borderBottom: props => props.borderBottom ? `${theme.custom.borderSize} solid ${theme.palette.secondaryColor}` : '',
        padding: props => theme.spacing(props.paddingTop ? 2 : 0, 2, props.paddingBottom ? 2 : 0, 2)
    }
}));

export default props => {
    const classes = useStyles(props);
    const {
        children
    } = props;
    return (
        <div
            className={classes.container}
        >
            {children}
        </div>
    )
}