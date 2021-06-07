import Head from 'next/head';
import Header from '../components/header';
import Column from '../components/column';
import New from '../components/new'
import {css} from '@emotion/css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {useState, useEffect} from 'react';

const Main = ({columns, openCard}) => {
    const [openModal, setOpenModal] = useState(true);

    useEffect(() => {
        //setOpenModal(!window.sessionStorage.getItem('first'));
        window.sessionStorage.setItem('first', 'yes');
    }, []);

    return (
        <>
            <Head>
                <title>Trello</title>
            </Head>
            <div className='position-relative'>
                <div className={css`
                    position: absolute;
                    z-index: 2;
                    background: black;
                    width: 100vw;
                    height: 100vh;
                    opacity: .6;
                    display: ${openCard ? 'block' : 'none'};
                `}  onKeyUp={e => {
                        if(e.code === 'Escape')
                            setActiveNull();
                }}></div>
                <Header/>
                <div className='ms-4'> 
                    <p className={css`
                        font-style: normal;
                        font-weight: 500;
                        font-size: 26px;
                        line-height: 39px;
                        margin: 30px 0 15px 0;
                    `}>Brackets</p>
                    <div className='d-flex gap-4'>
                        {columns.map((el, i) => <Column key={i} id={i}/>)}
                        <New type='column'/>
                    </div>
                    <h2 className={css`
                        display: ${columns.length === 0 ? 'block' : 'none'};
                        font-style: normal;
                        font-weight: 700;
                        font-size: 120px;
                        text-align: center;
                        margin-bottom: 0;
                    `}>Welcome to <span className={css`
                        color: #4339F2;
                    `}>trello</span>!</h2>
                    <p className={css`
                        display: ${columns.length === 0 ? 'block' : 'none'};
                        font-weight: 500;
                        font-size: 64px;
                        line-height: 96px;
                        text-align: center;
                    `}>create your first column</p>

                </div>
            </div>
            <Modal md isOpen={openModal} toggle={setOpenModal}>
                <ModalHeader>Quic start</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary">Do Something</Button>{' '}
                <Button color="secondary" onClick={() => setOpenModal(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

Main.propTypes  = {
    columns: PropTypes.arrayOf(PropTypes.object),
    openCard: PropTypes.object
};

const mapStateToProps = state => ({
    columns: state.columns,
    openCard: state.openCard
});

export default connect(mapStateToProps)(Main);