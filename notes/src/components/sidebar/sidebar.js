import React from 'react';
import Styled from 'styled-components';
import Button from '../button';

import Cloud from '../../assets/svg/cloud.svg';
import Settings from '../../assets/svg/settings.svg';
import Arrow from '../../assets/svg/arrow.svg';
import Note from '../../assets/svg/note.svg';
import Trash from '../../assets/svg/trash.svg';

import './style.css';

const Sidebar = () => {
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
                <Li className='list-group-item m-0 p-1 border-0 btn li-active'>
                    <div className='row align-items-center py-1 ps-2'>
                        <ImgTiny src={Arrow} alt='Arrow svg' className='col-auto'/>
                        <Img src={Note} alt='Note svg' className='col-auto'/>
                        <P className='col-auto'>Notes</P>
                    </div>
                </Li>
                <Li className='list-group-item border-0 ps-4 btn'>
                    <div className='row align-items-center py-1 ms-2'>
                        <Img src={Trash} alt='Note svg' className='col-auto'/>
                        <P className='col-auto'>Archive</P>
                    </div>
                </Li>
            </ul>
        </SideBar>
    );
};

export default Sidebar;