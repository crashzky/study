import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/css';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

import House1 from '../../assets/houses/house_1.png';
import House2 from '../../assets/houses/house_2.png';
import House3 from '../../assets/houses/house_3.png';
import House4 from '../../assets/houses/house_4.png';
import House5 from '../../assets/houses/house_5.png';
import House6 from '../../assets/houses/house_6.png';
import House7 from '../../assets/houses/house_7.png';
import House8 from '../../assets/houses/house_8.png';

import News1 from '../../assets/news/news_1.png';
import News2 from '../../assets/news/news_2.png';
import News3 from '../../assets/news/news_3.png';
import News4 from '../../assets/news/news_4.png';
import News5 from '../../assets/news/news_5.png';
import News6 from '../../assets/news/news_6.png';
import News7 from '../../assets/news/news_7.png';
import News8 from '../../assets/news/news_8.png';

const Card = ({type, cardId}) => {
    
    const getCardData = () => {
        switch(type) {
            case 'house':
                return getHouseInfo();
            case 'news':
                return getNewsInfo();
            default:
                return null;
        }
    }

    const getNewsInfo = () => {
        switch(cardId) {
            case 0:
                return {
                    title: 'Встреча жителей 3 и 4 домов Clever Park',
                    addres: '07.07.2021',
                    date: '',
                    image: News1
                };
            case 1:
                return {
                    title: 'Старт продаж кладовых 3 и 4 домов',
                    addres: '18.06.2021',
                    date: '',
                    image: News2
                };
            case 2:
                return {
                    title: 'Встреча жителей 3 и 4 домов Clever Park',
                    addres: '07.07.2021',
                    date: '',
                    image: News3
                };
            case 3:
                return {
                    title: 'Режим работы офиса продаж в праздники',
                    addres: '30.04.2021',
                    date: '',
                    image: News4
                };
            case 4:
                return {
                    title: 'Выгодные условия при поупке готовых квартир',
                    addres: '26.01.2021',
                    date: '',
                    image: News5
                };
            case 5:
                return {
                    title: 'Кладовые с рассрочкой на 11 месяцев',
                    addres: '18.11.2020',
                    date: '',
                    image: News6
                };
            case 6:
                return {
                    title: 'Clever Park - лучший жилой квартал',
                    addres: '27.08.2020',
                    date: '',
                    image: News7
                };
            case 7:
                return {
                    title: 'Режим работы с 01/01/2020',
                    addres: '27.03.2020',
                    date: '',
                    image: News8
                };
            default:
                return null;
        }
    };

    const getHouseInfo = () => {
        switch(cardId) {
            case 1:
                return {
                    title: 'ЖК Талин',
                    addres: 'Уральская',
                    date: '3 кв. 2022 - 2 кв. 2023',
                    image: House1
                };
            case 2:
                return {
                    title: 'ЖК Меридиан',
                    addres: 'Широкая речка',
                    date: '4 кв. 2021 - 4 кв. 2022',
                    image: House2
                };
            case 3:
                return {
                    title: 'ЖК Талин',
                    addres: 'Уральская',
                    date: '3 кв. 2022 - 2 кв. 2023',
                    image: House3
                };
            case 4:
                return {
                    title: 'ЖК Хрустальные  ключи',
                    addres: 'Копрессорный',
                    date: '3 кв. 2020 - 4 кв. 2022',
                    image: House4
                };
            case 5:
                return {
                    title: 'ЖК Солнечный',
                    addres: 'Солнечный',
                    date: '3 кв. 2022 - 1 кв. 2023',
                    image: House5
                };
            case 6:
                return {
                    title: 'ЖК Атмосфера',
                    addres: 'Машиностроителей',
                    date: '3 кв. 2022',
                    image: House6
                };
            case 7:
                return {
                    title: 'ЖК Даниловский',
                    addres: 'Пионерский',
                    date: '4 кв. 2022 - 3 кв. 2023',
                    image: House7
                };
            case 8:
                return {
                    title: 'ЖК Южный сад',
                    addres: 'Вторчермет',
                    date: '3 кв. 2022',
                    image: House8
                };
            default:
                return null;
        }
    };

    const GreyP = styled.p`
        font-weight: 500;
        font-size: 20px;
        color: #717784;
        margin: 0;
    `;

    return (
        <Link to={`/houses/${cardId}/${type === 'news' ? 'news' : ''}`} className={css`
            width: 300px;
            ${type === 'house' ? ' cursor: pointer;' : ''}
            text-decoration: none;

            transition: transform, .2s;
            &:hover {
               ${type === 'house' ? 'transform: scale(1.12);' : ''}
            }
        `}>
            <img src={getCardData().image} alt='Карточка' className={css`
                width: 100%;
                object-fit: cover;
            `}/>
            <p className={css`
                font-weight: 600;
                font-size: 22px;
                margin: 0 2px 0 0;
                color: black;
            `}>{getCardData().title}</p>
            <GreyP>{getCardData().addres}</GreyP>
            <GreyP>{getCardData().date}</GreyP>
        </Link>
    );
};

Card.propTypes = {
    type: PropTypes.oneOf(['house', 'news']),
    cardId: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8])
};

export default Card;