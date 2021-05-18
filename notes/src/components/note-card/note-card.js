import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const NoteCard = ({title, text}) => {
    const Background = Styled.div`
        width: 300px;
        height: 137px;
        background: #ECECEC;
        display: grid;
        grid-template-columns: 7px auto;
    `;

    const Line = Styled.div`
        width: 7px;
        height: 137px;
        background: #D51C1C;
    `;

    return (
        <Background className='btn p-0 border-0'>
            <Line/>
            <div className='ps-4 pe-2'>
                <p className='m-0 mt-3 h5 fw-bold text-start'>{title}</p>
                <p className='h5 mt-3 fw-normal text-start'>{text}</p>
            </div>
        </Background>
    );
};

NoteCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

export default NoteCard;