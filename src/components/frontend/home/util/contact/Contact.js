import React from 'react';

import Button from './util/Button';

import HomeSubContainer from '../../../util/HomeSubContainer';

import {
    Typography,
    Box
} from '@material-ui/core';

export default () => {
    return (
        <HomeSubContainer
            paddingTop
            paddingBottom
            borderBottom
        >
            <Box
                display="flex"
                position="relative"
                display="flex"
                height={75}
                alignItems="center"
            >
                <Typography
                    variant='h6'
                >
                    Say hi or salut, I speak a few languages
                </Typography>
                <Button/>
            </Box>
        </HomeSubContainer>
    );
};