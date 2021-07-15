import React from 'react';
import {css} from '@emotion/css';
import {Link} from 'react-router-dom';

import Houses from '../../assets/navigation/houses.svg';
import News from '../../assets/navigation/news.svg';
import Cams from '../../assets/navigation/cams.svg';

const TopNavigation = () => {
    return (
        <div className={css`
            position: absolute;
            top: 0;
            left: calc((100% - 230px) / 2);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 230px;
            background: #F5F5F5;
            border-radius: 33px;
            padding: 0 20px;
        `}>
            <Link to='/houses/3'>
                <img src={Houses} alt='Houses icon'/>
            </Link>
            <Link to='/houses/3/cams'>
                <img src={Cams} alt='Cams icon'/>
            </Link>
            <Link to='/houses/3/news'>
                <img src={News} alt='News icon'/>
            </Link>
        </div>
    );
};

export default TopNavigation;