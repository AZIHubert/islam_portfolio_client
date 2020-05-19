import React from 'react';

import MenuRegular from './util/MenuRegular';
import MenuHamburger from './util/MenuHamburger';

import {
    withWidth
} from '@material-ui/core';

import {
    DUMMY_GENERAL
} from '../../../dummy_datas/dummyDatas';

export default withWidth()(({width, theme}) => {
    const {
        instagram,
        linkedin,
        pinterest
    } = DUMMY_GENERAL;
    return (
        <>
            {width === "sm" || width === "xs" ?
                <MenuHamburger />
            :
                <MenuRegular
                    instagram={instagram}
                    linkedin={linkedin}
                    pinterest={pinterest}     
                />
            }
        </>
    )
})