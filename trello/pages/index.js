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
    const [openModal, setOpenModal] = useState(false);
    const [coefficent, setCoefficent] = useState(1);

    useEffect(() => {
        setOpenModal(!window.sessionStorage.getItem('first'));
        window.sessionStorage.setItem('first', 'yes');
        setCoefficent(window.innerWidth < 900 ? window.innerWidth / 900 : 1);
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
                <div className='px-4 w-100'> 
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
                        font-size: ${120 * coefficent}px;
                        text-align: center;
                        margin-bottom: 0;
                        margin-top: 30px;
                    `}>Welcome to <span className={css`
                        color: #4339F2;
                    `}>trello</span>!</h2>
                    <p className={css`
                        display: ${columns.length === 0 ? 'block' : 'none'};
                        font-weight: 500;
                        font-size: ${64 * coefficent}px;
                        line-height:  ${96 * coefficent}px;
                        text-align: center;
                    `}>create your first column</p>

                </div>
            </div>
            <Modal size='xl' isOpen={openModal} toggle={setOpenModal}>
                <ModalHeader>Quic start</ModalHeader>
                <ModalBody className='d-flex justify-content-center'>
                    <img src='/demo.gif' alt='Demo'/>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => setOpenModal(false)}>Ok!</Button>
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