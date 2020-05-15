import React from 'react';

import LatestProject from './util/latestProjects/LatestProjects';
import HightlightWorks from './util/hightlightWorks/HightlightWorks';
import About from './util/about/About';
import ProjectsList from './util/projectsList/ProjectsList';
import Contact from './util/contact/Contact';
import Footer from './util/footer/Footer';

import {
    DUMMY_WORKS
} from '../../../dummy_datas/dummyDatas';

export default ({theme}) => {
    const firstHightLightWorks = DUMMY_WORKS.filter(work => work.highlight.active).slice(0, 2);
    const lastHighlightWorks = firstHightLightWorks.slice(0, 2);
    return (
        <div>
            <LatestProject />
            <HightlightWorks
                works={firstHightLightWorks}
            />
            <About />
            <HightlightWorks
                works={lastHighlightWorks}
            />
            <ProjectsList />
            <Contact />
            <Footer />
        </div>
    );
};