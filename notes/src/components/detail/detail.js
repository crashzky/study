import React from 'react';
import Styled from 'styled-components';
import Button from '../button';
import {connect} from 'react-redux';
import {setText, setTitle, remove, setOpenNote} from '../../actions/action';
import PropTypes from 'prop-types';

import Info from '../../assets/svg/info.svg';
import Share from '../../assets/svg/share.svg';
import Trash from '../../assets/svg/trash2.svg';

const Detail = ({openNote, notes, setText, setTitle, remove, setOpenNote}) => {

    const Buttons = Styled.div`
        position: absolute;
        top: 25px;
        right: 10px;
    `;

    const Textarea = Styled.textarea`
        outline: none;
        font-size: 17px;
    `;

    const Input = Styled.input`
        outline: none;
        border: none;
        background: transparent;
        font-size: 20px;
    `;

    return (
        <div className='w-100 h-100 position-relative'>
            <Buttons className={openNote !== null ? 'list-group' : 'list-group d-none'}>
                <Button className='list-group-item'>
                    <img src={Info} alt='info icon'/>
                </Button>
                <Button className='list-group-item'>
                    <img src={Share} alt='Share icon'/>
                </Button>
                <Button className='list-group-item' onClick={() => {
                    remove(openNote);
                    setOpenNote(null);
                }}>
                    <img src={Trash} alt='Trash icon'/>
                </Button>
            </Buttons>
            <div className={openNote !== null ? 'row align-items-center px-5 mt-4' : 'row align-items-center px-5 mt-4 d-none'}>
                <p className='col-auto m-0 h5'>H1</p>
                <Input defaultValue={openNote !== null ? notes[openNote].title : null}
                    onBlur={e => setTitle(openNote, e.target.value)}
                    type='text'
                    className='p-0 col-11'
                    placeholder='Лучшая на свете заметка'/>
            </div>
            <Textarea defaultValue={openNote !== null ? notes[openNote].text : null}
                onBlur={e => setText(openNote, e.target.value)}
                className={openNote !== null ? 'mt-4 w-100 h-100 border-0' : 'w-100 h-100 border-0 d-none'}></Textarea>
        </div>
    );
};

Detail.propTypes = {
    openNote: PropTypes.number,
    notes: PropTypes.array,
    setText: PropTypes.func,
    setTitle: PropTypes.func,
    remove: PropTypes.func,
    setOpenNote: PropTypes.func
};

const mapStateToProps = state => ({
    openNote: state.openNote,
    notes: state.notes
});

export default connect(mapStateToProps, {setText, setTitle, remove, setOpenNote})(Detail);