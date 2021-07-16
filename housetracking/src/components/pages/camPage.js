import React from 'react';
import {css} from '@emotion/css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ProgressBar from '../progressBar';
import AsideBar from '../asideBar';
import TopNavigation from '../topNavigation';

import Stage1 from '../../assets/cams/stage1_cams.png';
import Stage2 from '../../assets/cams/stage2_cams.png';
import Stage3 from '../../assets/cams/stage3_cams.png';
import Stage4 from '../../assets/cams/stage4_cams.png';
import Stage5 from '../../assets/cams/stage5_cams.png';
import Stage6 from '../../assets/cams/stage6_cams.png';
import Stage7 from '../../assets/cams/stage7_cams.png';

const CamPage = ({activeState}) => {
    const stages = [Stage1, Stage2, Stage3, Stage4, Stage5, Stage6, Stage7];

    return (
        <main className={css`
            width: 100vw;
            height: 100vh;
            background: black;
            position: relative;
        `}>
            <img src={stages[activeState]} alt='Карта строительства' className={css`
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: contain;
            `}/>

            <TopNavigation/>
            <AsideBar type='cams'/>
            <ProgressBar/>
        </main>
    );
};

const mapStateToProps = ({activeState}) => ({
    activeState
});

CamPage.propTypes = {
    activeState: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
};

export default connect(mapStateToProps)(CamPage);