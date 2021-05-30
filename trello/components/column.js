import styled from '@emotion/styled';
import Button from '../components/button';
import Card from '../components/card';
import New from '../components/new';
import {css} from '@emotion/css';
import {useState, useRef, useEffect} from 'react';

export default function Column() {
    const Title = styled.div`
        width: 362px;
        height: 50px;
        background: #F4F4F4;
        border-radius: 10px; 
    `;

    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if(inputRef.current)
            inputRef.current.focus();
    }, [isEdit]);

    function switchTitle() {
        if(isEdit) {
            return <input type='text'
                ref={inputRef}
                className={css`
                    border: none;
                    outline: none;
                    background: transparent;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    padding: 0;
                `}
                defaultValue='Design'
                onBlur={() => setIsEdit(false)}/>;
        } else {
            return <p
                onClick={() => setIsEdit(true)}
                className={css`
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    margin: 0;
                    cursor: pointer;
                `}>Design</p>;
        }
    }

    return (
        <div className={css`
            margin-left: 30px;
        `}>
            <Title className='d-flex justify-content-between align-items-center px-3'>
                {switchTitle()}
                <Button>
                    <img src='/svg/points.svg'
                            alt='Points'
                            width={24}
                            height={6}/>
                </Button>
            </Title>
            <div className='mt-3 d-grid gap-3'>
                <Card/>
                <Card/>
                <Card/>
                <New/>
            </div>
        </div>
    );
}