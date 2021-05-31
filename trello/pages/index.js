import Head from 'next/head';
import Header from '../components/header';
import Column from '../components/column';
import New from '../components/new'
import {css} from '@emotion/css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Main = ({columns}) => {
    return (
        <>
            <Head>
                <title>Trello</title>
            </Head>
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
            </div>
        </>
    );
};

Main.propTypes  = {
    columns: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    columns: state.columns
});

export default connect(mapStateToProps)(Main);