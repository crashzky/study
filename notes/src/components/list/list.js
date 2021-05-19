import React, {useState, useRef, useEffect} from 'react';
import Button from '../button';
import Styled from 'styled-components';
import {connect} from 'react-redux';
import {setOpenNote, add} from '../../actions/action';
import NoteCard from '../note-card';
import PropTypes from 'prop-types';

import Write from '../../assets/svg/write.svg';

const List = ({notes, openPage, setOpenNote, add, openNote}) => {
    const [filter, setFilter] = useState('');
    const searchRef = useRef();

    const Div = Styled.div`
        margin-left: 1px;
    `;

    function switchReturn() {
        switch(openPage) {
            case 0:
                return notes.length != 0 ? notes.map((el, i) => {
                    if(el.title.includes(filter) || el.text.includes(filter)) {
                        return <NoteCard key={i}
                            title={el.title}
                            text={el.text}
                            onClick={() => setOpenNote(i)}
                            isActive={openNote === i}/>;
                    }
                }) : null;
            case 1:
                return null;
        }
    }

    useEffect(() => {
        searchRef.current.focus();
    }, [filter]);

    return (
        <div className='border-end'>
            <Div className='row mt-3 me-0 pb-3 align-items-middle border-bottom'>
                <div className='col-auto'>
                    <input ref={searchRef}
                        defaultValue={filter}
                        type='text'
                        placeholder='Поиск'
                        className='form-control'
                        onChange={e => setFilter(e.target.value)}/>
                </div>
                <Button className='col-auto' onClick={add}>
                    <img src={Write} alt='write logo'/>
                </Button>
            </Div>
            {switchReturn()}
        </div>
    );
};

List.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    openPage: PropTypes.oneOf([0, 1]),
    openNote: PropTypes.number,
    setOpenNote: PropTypes.func,
    add: PropTypes.func
};

const mapStateToProps = state => ({
    notes: state.notes,
    openPage: state.openPage,
    openNote: state.openNote
});
export default connect(mapStateToProps, {setOpenNote, add})(List);