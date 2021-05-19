import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const NoteCard = ({title, text, onClick, isActive}) => {
    const Background = Styled.button`
        width: 300px;
        height: 137px;
        background: #ECECEC;
        border: none;
        outline: none;
        display: grid;
        grid-template-columns: 7px auto;
    `;

    const Line = Styled.div`
        width: 7px;
        height: 137px;
        background: ${isActive ? '#D51C1C' : '#8E8E90'};
    `;

    return (
        <Background className='p-0 border-0' onClick={onClick}>
            <Line/>
            <div className='ps-4 pe-2'>
                <p className='m-0 mt-3 h5 fw-bold text-start'>{title}</p>
                <p className='h5 mt-3 fw-normal text-start'>{text.slice(0, 50) + '...'}</p>
            </div>
        </Background>
    );
};

NoteCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool
};

export default NoteCard;