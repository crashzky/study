import React, {useState} from 'react';
import Styled from 'styled-components';
import Button from '../button';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {openNotes, openArchive, setOpenNote} from '../../actions/action';

import Cloud from '../../assets/svg/cloud.svg';
import Settings from '../../assets/svg/settings.svg';
import Arrow from '../../assets/svg/arrow.svg';
import Note from '../../assets/svg/note.svg';
import Trash from '../../assets/svg/trash.svg';

import './style.css';

const Sidebar = ({openPage, openNotes, openArchive, setOpenNote}) => {
    const [open, setOpen] = useState(openPage);

    const SideBar = Styled.div`
        height: 100%;
        width: 100%;
        background-color: #272B2E;
    `;

    const Li = Styled.li`
        background: transparent;
    `;

    const ImgTiny = Styled.img`
        height: 17px;
    `;

    const Img = Styled.img`
        height: 23px;
    `;

    const P = Styled.div`
        width: 60px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;

        color: #FFFFFF;
    `;

    const liClasses = 'list-group-item m-0 p-1 border-0 btn';

    function checkOpacity(now) {
        if(now != open) {
            return 'img-opacity';
        }
    }
    
    return (
        <SideBar>
            <div className='d-flex flex-row-reverse mt-3 pe-2 pb-4'>
                <Button>
                    <img src={Settings} alt="Settings icon"/>
                </Button>
                <Button>
                    <img src={Cloud} alt="Cloud icon"/>
                </Button>
            </div>
            <ul className='list-group'>
                <Button onClick={() => {
                    openNotes();
                    setOpen(0);
                }}>
                    <Li className={open === 0 ? liClasses + ' li-active' : liClasses}>
                        <div className='row align-items-center py-1 ps-2'>
                            <ImgTiny src={Arrow} alt='Arrow svg' className={'col-auto ' + checkOpacity(0)}/>
                            <Img src={Note} alt='Note svg' className='col-auto'/>
                            <P className='col-auto'>Notes</P>
                        </div>
                    </Li>
                </Button>
                <Button onClick={() => {
                    openArchive();
                    setOpenNote(null);
                    setOpen(1);
                }}>
                    <Li className={open === 1 ? liClasses + ' li-active' : liClasses}>
                        <div className='row align-items-center py-1 ps-2'>
                            <ImgTiny src={Arrow} alt='Arrow svg' className={'col-auto ' + checkOpacity(1)}/>
                            <Img src={Trash} alt='Note svg' className='col-auto'/>
                            <P className='col-auto'>Archive</P>
                        </div>
                    </Li>
                </Button>
            </ul>
        </SideBar>
    );
};

Sidebar.propTypes = {
    openPage: PropTypes.oneOf([0, 1]),
    openNotes: PropTypes.func,
    openArchive: PropTypes.func,
    setOpenNote: PropTypes.func
};

const mapStateToProps = (state) => ({
    openPage: state ? state.openPage : null
});

export default connect(mapStateToProps, {openNotes, openArchive, setOpenNote})(Sidebar);