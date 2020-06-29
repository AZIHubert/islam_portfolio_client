import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Navbar from './navbar/Navbar';

import Home from './home/Home';
import About from './about/About';
import Works from './works/Works';
import WorkDetail from './work_detail/WorkDetail';
import Blog from './blog/Blog';
import Contact from './contact/Contact';

import NotFound from '../not_found/NotFound';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainWrapper: {
        marginLeft: theme.custom.navbarWidthMD,
        [theme.breakpoints.up('lg')]: {
            marginLeft: theme.custom.navbarWidthLG,
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: theme.custom.navbarHeight
        },
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <>
            <Navbar />
            <div
                className={classes.mainWrapper}
            >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" render={() => (<Redirect to="/" />)} />
                    <Route path="/about" component={About} />
                    <Route exact path="/works" component={Works} />
                    <Route exact path="/works/:workId" component={WorkDetail} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </>
    )
}