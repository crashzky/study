import React from 'react';
import {css} from '@emotion/css';
import styled from '@emotion/styled';

const ProgressBar = () => {
    const stageMixin = `
        font-weight: 500;
        font-size: 20px;
        color: #616060;
        padding: 0 28px;
        background: transparent;
        outline: none;
        border-left: none;
        border-top: none;
        border-bottom: none;
        border-right: 2px solid #01094D;
        white-space: nowrap;
    `;

    const StageP = styled.button`
        ${stageMixin}
    `;

    const GreenStageP = styled.button`
       ${stageMixin}
       background: rgba(69, 220, 45, 0.7);   
    `;

    return (
        <div className={css`
            position: absolute;
            bottom: 0;
            display: flex;
            width: 100%;
            height: 45px;
            overflow-x: scroll;
            background: rgba(255, 255, 255, 0.7);
        `}>
            <GreenStageP>Подготовка</GreenStageP>
            <GreenStageP>Основание и фундамент</GreenStageP>
            <GreenStageP>Возведение стен</GreenStageP>
            <GreenStageP>Кровля и наружные стены</GreenStageP>
            <StageP>Инженерные сети</StageP>
            <StageP>Внутренняя отделка</StageP>
            <StageP className={css`
                border-right: none !important;
            `}>Благоустройство территории</StageP>
        </div>
    );
};

export default ProgressBar;