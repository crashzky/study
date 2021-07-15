import React from 'react';
import {css} from '@emotion/css';
import MainBg from '../../assets/main_bg.png';

import Card from '../card';

const IndexPage = () => {
    const createHousesCards = () => {
        const cards = [];

        for(let i = 1; i < 9; i++) {
            cards.push(<Card type='house' cardId={i}/>);
        }

        return cards;
    };

    return (
        <main className={css`
            position: relative;
            width: 100vw;
            height: 100vh;

            &:before {
                position: absolute;
                content: '';
                width: 100%;
                height: 100%;
                background: url(${MainBg});
                background-attachment: fixed;
                background-size: cover;
            }
        `}>
            <div className='h-100'>
                <h1 className={css`
                    position: absolute;
                    width: 100vw;
                    top: calc((100vh - 200px) / 2);
                    font-weight: 800;
                    font-size: 120px;
                    text-align: center;
                    color: white;
                `}>HouseTracking</h1>
            </div>
            <div className={css`
                height: 100vh;
                background: white;
                border-radius: 58px 58px 0 0;
                padding: 80px;
                display: grid;
                grid-template-columns: repeat(auto-fit, 300px);
                gap: 45px 30px;
            `}>
                {createHousesCards()}
            </div>
        </main>
    );
};

export default IndexPage;