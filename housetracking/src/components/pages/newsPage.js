import React from 'react';
import {css} from '@emotion/css';
import {Link} from 'react-router-dom';

import Arrow from '../../assets/arrow.svg';
import Card from '../card';

const NewsPage = () => {
    const createCards = () => {
        let cards = [];
        for(let i = 0; i < 8; i++)
            cards.push(<Card type='news' cardId={i}/>);
        return cards;
    };

    return (
        <main className={css`
            width: 100%;
            height: 100%;
            padding: 20px 70px;
        `}>
            <div className='d-flex align-items-center gap-3 mb-3'>
                <Link to='/houses/3'>
                    <img src={Arrow} alt='Arrow icon'/>
                </Link>
                <p className={css`
                    font-weight: 600;
                    font-size: 50px;
                    margin: 0;
                `}>Новости</p>
            </div>
            <div className={css`
                display: grid;
                grid-template-columns: repeat(auto-fit, 300px);
                gap: 45px 30px;
            `}>
                {createCards()}
            </div>
        </main>
    );
};

export default NewsPage;