import React from 'react';

import {
    Box,
    Typography,
    Link,
    Grid
} from '@material-ui/core';

import HomeSubContainer from '../../../util/HomeSubContainer';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    DUMMY_GENERAL
} from '../../../../../dummy_datas/dummyDatas';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        paddingBottom: theme.spacing(5)
    },
    titleContainer: {
        paddingBottom: theme.spacing(1)
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme)
    const {
        phone,
        email,
        instagram,
        linkedin,
        pinterest
    } = DUMMY_GENERAL
    return (
        <HomeSubContainer
            paddingTop
        >
            <Grid
                container
                spacing={1}
                className={classes.gridContainer}
            >
                <Grid
                    item
                    xs={6}
                >
                    <Box
                        className={classes.titleContainer}
                    >
                        <Typography
                            variant="h6"
                        >
                            contact us
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                    >
                        <Link
                            href={`mailto:${email}`}
                        >
                            {email}
                        </Link>
                    </Typography>
                    <Typography>
                        {phone}
                    </Typography>
                </Grid>
                {(linkedin.active || instagram.active || pinterest.active) && (
                    <Grid
                        item
                        xs={6}
                    >
                        <Box
                            className={classes.titleContainer}
                        >
                            <Typography
                                variant="h6"
                            >
                                follow us
                            </Typography>
                        </Box>
                        {linkedin.active &&
                            <Typography
                                variant="body1"
                            >
                                <Link
                                    href={instagram.link}
                                    target="_blank"
                                >
                                    instagram
                                </Link>
                            </Typography>
                        }
                        {instagram.active &&
                            <Typography
                                variant="body1"
                            >
                                <Link
                                    href={linkedin.link}
                                    target="_blank"
                                >
                                    linkedin
                                </Link>
                            </Typography>
                        }
                        {instagram.active &&
                            <Typography
                                variant="body1"
                            >
                                <Link
                                    href={pinterest.link}
                                    target="_blank"
                                >
                                    pinterest
                                </Link>
                            </Typography>
                        }
                    </Grid>
                )}
            </Grid>
        </HomeSubContainer>
    );
};