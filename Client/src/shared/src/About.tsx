import React from "react";
import loadable from '@loadable/component'

const OtherComponent = loadable(() => import('./Test'))

function About() {
    return (
        <div>
            <h2>About</h2>
            <OtherComponent />
        </div>
    );
}

export default About;
