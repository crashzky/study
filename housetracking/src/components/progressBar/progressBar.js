import React from 'react';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setActiveState} from '../../actions/actions';

const ProgressBar = ({setActiveState}) => {
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
            <GreenStageP onClick={() => setActiveState(0)}>Подготовка</GreenStageP>
            <GreenStageP onClick={() => setActiveState(1)}>Основание и фундамент</GreenStageP>
            <GreenStageP onClick={() => setActiveState(2)}>Возведение стен</GreenStageP>
            <GreenStageP onClick={() => setActiveState(3)}>Кровля и наружные стены</GreenStageP>
            <StageP onClick={() => setActiveState(4)}>Инженерные сети</StageP>
            <StageP onClick={() => setActiveState(5)}>Внутренняя отделка</StageP>
            <StageP onClick={() => setActiveState(6)} className={css`
                border-right: none !important;
            `}>Благоустройство территории</StageP>
        </div>
    );
};

ProgressBar.propTypes = {
    setActiveState: PropTypes.func
};

export default connect(() => ({}), {setActiveState})(ProgressBar);