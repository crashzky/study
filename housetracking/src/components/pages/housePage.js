import React from 'react';
import {css} from '@emotion/css';

import ProgressBar from '../progressBar';
import AsideBar from '../asideBar';

const HousePage = () => {
    return (
        <main className={css`
            position: relative;
            width: 100vw;
            height: 100vh;
        `}>
             <iframe className={css`
                position: absolute;
                width: 100%;
                height: 100%;
             `}
                title="Ground"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="fullscreen; autoplay; vr"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/f5da7f95dfef41f49fa99f9d8acdca33/embed"></iframe>

            <AsideBar/>
            <ProgressBar/>
        </main>
    );
};

export default HousePage;