import React from 'react';
import Button from '../button';
import Styled from 'styled-components';
import {connect} from 'react-redux';
import NoteCard from '../note-card';
import PropTypes from 'prop-types';

import Write from '../../assets/svg/write.svg';

const List = ({notes, openPage}) => {
    const Div = Styled.div`
        margin-left: 1px;
    `;

    function switchReturn() {
        switch(openPage) {
            case 0:
                return notes.length != 0 ? notes.map((el, i) => <NoteCard key={i} title={el.title} text={el.text}/>) : null;
            case 1:
                return null;
        }
    }

    return (
        <div className='border-end'>
            <Div className='row mt-3 me-0 pb-3 align-items-middle border-bottom'>
                <div className='col-auto'>
                    <input type='text' placeholder='Поиск' className='form-control'/>
                </div>
                <Button className='col-auto'>
                    <img src={Write} alt='write logo'/>
                </Button>
            </Div>
            {switchReturn()}
        </div>
    );
};

List.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    openPage: PropTypes.oneOf([0, 1])
};

const mapStateToProps = state => ({
    notes: state.notes,
    openPage: state.openPage
});
export default connect(mapStateToProps)(List);