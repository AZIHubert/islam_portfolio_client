import React from 'react';

import {
    Button
} from '@material-ui/core';

import {DUMMY_GENERAL} from '../../../../../../dummy_datas/dummyDatas';

export default () => {
    const {email} = DUMMY_GENERAL;
    return (
        <Button
            href={`mailto:${email}`}
        >
            get started
        </Button>
    );
}