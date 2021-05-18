import React from 'react';
import Button from '../button';
import Styled from 'styled-components';
import {connect} from 'react-redux';
import NoteCard from '../note-card';
import PropTypes from 'prop-types';

import Write from '../../assets/svg/write.svg';

const List = ({notes = []}) => {
    const Div = Styled.div`
        margin-left: 1px;
    `;

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
            {notes.map((el, i) => <NoteCard key={i} title={el.title} text={el.text}/>)}
        </div>
    );
};

List.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    notes: state.notes
});
export default connect(mapStateToProps)(List);