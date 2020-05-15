import React, {
    useRef,
    useEffect
} from 'react';

import {
    Box,
    Typography
} from '@material-ui/core';

import TypeTitle from '../../../util/TypeTitle';

import HomeSubContainer from '../../../util/HomeSubContainer';

import {
    makeStyles 
} from '@material-ui/core/styles';

import {
    DUMMY_GENERAL
} from '../../../../../dummy_datas/dummyDatas';

const useStyles = makeStyles(theme => ({
    bgTextContainer: {
        whiteSpace: 'nowrap',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
    },
    animateText: {
        willChange: 'transform',
        position: 'absolute',
        whiteSpace: 'nowrap'
    },
    text: {
        paddingRight: theme.spacing(1)
    },
    firstText: {
        animation: theme.transitions.create('$animateOne', {
            easing: 'linear',
            duration: `${theme.custom.aboutAnimationSpeed}s`,
        }),
        animationIterationCount: 'infinite'
    },
    secondText: {
        animation: theme.transitions.create('$animateTwo', {
            easing: 'linear',
            duration: `${theme.custom.aboutAnimationSpeed}s`,
            delay: `-${theme.custom.aboutAnimationSpeed/2}s`,
        }),
        animationIterationCount: 'infinite'
    },
    "@keyframes animateOne": {
        "0%": {
            transform: 'translateX(100%)'
        },
        "100%": {
            transform: 'translateX(-100%)'
        }
    },
    "@keyframes animateTwo": {
        "0%": {
            transform: 'translateX(0)'
        },
        "100%": {
            transform: 'translateX(-200%)'
        }
    },
}));

export default ({theme}) => {
    const {about} = DUMMY_GENERAL;
    const classes = useStyles(theme);
    const textRef = useRef(null);
    const textContainerRef = useRef(null);
    useEffect(() => {
        if(textRef.current && textContainerRef.current){
            let textHeight = textRef.current.offsetHeight;
            textContainerRef.current.style.height = `${textHeight}px`;
        }
    }, [textRef, textContainerRef]);
    return (
        <HomeSubContainer
            paddingTop
            paddingBottom
            borderBottom
        >
            <TypeTitle>
                about
            </TypeTitle>
            <Box
                className={classes.bgTextContainer}
                ref={textContainerRef}
            >
                <Box
                    display="flex"
                    className={classes.animateText}
                    
                >
                    <Box
                        className={`${classes.text} ${classes.firstText}`}
                        ref={textRef}
                    >
                        <Typography
                            variant="h3"
                            
                        >
                            {about}
                        </Typography>
                    </Box>
                    <Box
                        className={`${classes.text} ${classes.secondText}`}
                    >
                        <Typography
                            variant="h3"
                        >
                            {about}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </HomeSubContainer>
    );
};