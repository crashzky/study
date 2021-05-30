import Head from 'next/head';
import Header from '../components/header';
import Column from '../components/column';
import {css} from '@emotion/css';

export default function Main() {
    return (
        <>
            <Head>
                <title>Trello</title>
            </Head>
            <Header/>
            <p className={css`
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                line-height: 39px;
                margin: 30px 0 15px 30px;
            `}>Brackets</p>
            <div className='d-flex'>
                <Column/>
            </div>
        </>
    );
}