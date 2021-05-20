import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../button';
import FileSaver from 'file-saver';

import Txt from '../../assets/svg/txt.svg';
import Jpg from '../../assets/svg/jpg.svg';
import Pdf from '../../assets/svg/pdf.svg';

const Alert = ({notes, openNote}) => {

    if(openNote === null) {
        return null;
    }

    const {creatingDate, modificationDate, text} = notes[openNote];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    function renderTxt() {
        const content = `${notes[openNote].title}\n\n${notes[openNote].text}\n\n${creatingDate.getDay()} ${months[creatingDate.getMonth()]} ${creatingDate.getFullYear()} ${creatingDate.getHours()}:${creatingDate.getMinutes()}`;

        const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'note.txt');
    }

    return (
        <div className='border rounded bg-white pt-3'>
            <div className='row ps-3'>
                <p className='col-auto display-6 m-0 pe-0'>{modificationDate.getDay()}</p>
                <div className='col-auto list-group'>
                    <p className='list-group-item border-0 m-0 py-0 fs-6 fw-bold'>{months[modificationDate.getMonth()]} {modificationDate.getFullYear()} {modificationDate.getHours()}:{modificationDate.getMinutes()}</p>
                    <p className='list-group-item border-0 m-0 py-0 fs-6 fw-bold text-secondary'>MODIFICATION DATE</p>
                </div>
                <div className='d-flex justify-content-end'>
                    <hr className='w-100'/>
                </div>
                <div className='row row-cols-2'>
                    <div className='col list-group'>
                        <p className='list-group-item border-0 m-0 py-0 fs-5 fw-bold display-6'>{text.split(' ').length}</p>
                        <p className='list-group-item border-0 m-0 py-0 fs-6 fw-bold text-secondary'>WORDS</p>
                    </div>
                    <div className='col list-group'>
                        <p className='list-group-item border-0 m-0 py-0 fs-5 fw-bold display-6'>{text.length}</p>
                        <p className='list-group-item border-0 m-0 py-0 fs-6 fw-bold text-secondary'>CHARACTERS</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <hr className='w-100'/>
                </div>
                <div className='list-group'>
                    <p className='list-group-item border-0 m-0 py-0 fs-6 fw-bold'>{creatingDate.getDay()} {months[creatingDate.getMonth()]} {creatingDate.getFullYear()} {creatingDate.getHours()}:{creatingDate.getMinutes()}</p>
                    <p className='list-group-item border-0 m-0 py-0 fs-6 fw-bold text-secondary'>CREATING DATE</p>
                </div>
                <div className='d-flex justify-content-end'>
                    <hr className='w-100'/>
                </div>
                <div className='row mb-3'>
                    <Button className='col-4' onClick={renderTxt}>
                        <img src={Txt} alt='txt icon'/>
                    </Button>
                    <Button className='col-4'>
                        <img src={Pdf} alt='txt icon'/>
                    </Button>
                    <Button className='col-4'>
                        <img src={Jpg} alt='txt icon'/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

Alert.propTypes = {
    notes: PropTypes.array,
    openNote: PropTypes.number
};

const mapStateToProps = state => ({
    notes: state.notes,
    openNote: state.openNote
});

export default connect(mapStateToProps)(Alert);