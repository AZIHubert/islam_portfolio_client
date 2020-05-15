import React from 'react';

import {
    Box,
    Typography,
    Link
} from '@material-ui/core';

import {
    DUMMY_GENERAL
} from '../../../../../dummy_datas/dummyDatas';

export default () => {
    const {
        phone,
        email,
        instagram,
        linkedin,
        pinterest
    } = DUMMY_GENERAL
    return (
        <Box
            display='flex'
        >
            <Box>
                <Typography
                    variant="h6"
                >
                    contact us
                </Typography>
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
            </Box>
            <Box>
                <Typography
                    variant="h6"
                >
                    follow us
                </Typography>
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
                            {email}
                        </Link>
                    </Typography>
                }
            </Box>
        </Box>
    );
};