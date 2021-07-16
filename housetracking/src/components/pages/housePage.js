import React from 'react';
import {css} from '@emotion/css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ProgressBar from '../progressBar';
import AsideBar from '../asideBar';
import TopNavigation from '../topNavigation';

const HousePage = ({activeState}) => {
    const getInfo = () => {
        switch(activeState) {
            case 0:
                return 'f5da7f95dfef41f49fa99f9d8acdca33';
            case 1:
                return 'd959b7a7dc8341ee8bc1a2ff33a7d899';
            case 2:
                return '89deebafb22a4e868bd2a37be84c9b49';
            case 3:
                return 'db7b20b9c7ca444fb3670d56fae564df';
            case 4:
                return '973c8b423bd74877ac6cd62641d1ba40';
            case 5:
                return 'cae2d96ede1d4112b1fd391099a43f77';
            case 6:
                return '5e15f09fa1574354bcb271384aa5b573';
            default:
                return null;
        }
    };

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
                src={`https://sketchfab.com/models/${getInfo()}/embed`}></iframe>

            <TopNavigation/>
            <AsideBar type='house'/>
            <ProgressBar/>
        </main>
    );
};

const mapStateToProps = ({activeState}) => ({
    activeState
});

HousePage.propTypes = {
    activeState: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
};

export default connect(mapStateToProps)(HousePage);