import React from 'react';

import Button from './util/Button';

import {
    Typography
} from '@material-ui/core';

export default () => {
    return (
        <div>
            <Typography
                variant='h6'
            >
                Say hi or salut, I speak a few languages
            </Typography>
            <Button />
        </div>
    );
};