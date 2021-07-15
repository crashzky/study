import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/css';
import styled from '@emotion/styled';

const AsideBar = ({type}) => {
    const Title = styled.p`
        font-weight: 600;
        font-size: 22px;
        margin-bottom: 2px;
    `;

    const Li = styled.li`
        font-weight: 500;
        font-size: 20px;
        color: #717784;
    `;

    return (
        <div className={css`
            position: absolute;
            left: 0;
            top: 70px;
            width: 470px;
            padding: 30px 40px;
            border-radius: 36px;
            background: white;
        `}>
            <Title>Подготовка</Title>
            <ul>
                <Li>Создание защитного ограждения</Li>
                <Li>Снос и демонтаж старых построек</Li>
                <Li>Перенос инженерных сетей</Li>
                <Li>Создание временных коммуникаций, дорог</Li>
                <Li>Сооружение временных бытовых построек и пр.</Li>
            </ul>
            <Title>Сроки выполнения</Title>
            <ul>
                <Li>Застройщик соответсвует графику</Li>
            </ul>
        </div>
    );
};

AsideBar.propTypes = {
    type: PropTypes.oneOf(['house', 'news'])
};

export default AsideBar;