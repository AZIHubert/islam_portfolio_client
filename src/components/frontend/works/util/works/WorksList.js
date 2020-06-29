import React from 'react';
import SingleWork from './SingleWork';

import { Grid, withWidth } from '@material-ui/core';

import { useTheme, makeStyles } from '@material-ui/core';

import { DUMMY_WORKS } from '../../../../../dummy_datas/dummyDatas';

const useStyles = makeStyles(theme => ({
    container: {
        borderBottom: `1px solid ${theme.palette.secondaryColor}`
    },
    firstGrid: {
        borderRight: `1px solid ${theme.palette.secondaryColor}`
    },
    thirdGrid: {
        borderLeft: `1px solid ${theme.palette.secondaryColor}`
    }
}));

const WorkList = ({width}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    console.log(width)
    const gridItem = width === 'xs' ? (
        <Grid item xs={12}>
            {DUMMY_WORKS.map((work, index) => <SingleWork key={work._id} work={work} borderRight borderTop={index !== 0}/>)}
        </Grid>
    ) : width === 'sm' ? (
        <>
            <Grid item xs={6} className={classes.firstGrid}>
                {DUMMY_WORKS.filter((_, index) => index % 2 === 0).map((work, index) => <SingleWork key={work._id} work={work} borderRight borderTop={index !== 0}/>)}
            </Grid>
            <Grid item xs={6}>
                {DUMMY_WORKS.filter((_, index) => index % 2 !== 0).map((work, index) => <SingleWork key={work._id} work={work} borderRight borderTop={index !== 0}/>)}
            </Grid>
        </>
    ) : (
        <>
            <Grid item xs={4} className={classes.firstGrid}>
                {DUMMY_WORKS.filter((_, index) => index % 3 === 0).map((work, index) => <SingleWork key={work._id} work={work} borderRight borderTop={index !== 0}/>)}
            </Grid>
            <Grid item xs={4}>
                {DUMMY_WORKS.filter((_, index) => index % 3 === 1).map((work, index) => <SingleWork key={work._id} work={work} borderRight borderTop={index !== 0}/>)}
            </Grid>
            <Grid item xs={4} className={classes.thirdGrid}>
                {DUMMY_WORKS.filter((_, index) => index % 3 === 2).map((work, index) => <SingleWork key={work._id} work={work} borderTop={index !== 0}/>)}
            </Grid>
        </>
    );
    return (
        <Grid container spacing={0} className={classes.container}>
            {gridItem}
        </Grid>
    );
};

export default withWidth()(WorkList);