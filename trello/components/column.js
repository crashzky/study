import styled from '@emotion/styled';
import Button from '../components/button';
import {css} from '@emotion/css';

export default function Column() {
    const Title = styled.div`
        width: 362px;
        height: 50px;
        background: #F4F4F4;
        border-radius: 10px; 
    `;

    return (
        <div className={css`
            margin-left: 30px;
        `}>
            <Title className='d-flex justify-content-between align-items-center px-3'>
                <p className={css`
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    margin: 0;
                `}>Design</p>
                <Button>
                    <img src='/svg/points.svg'
                        alt='Points'
                        width={24}
                        height={6}/>
                </Button>
            </Title>
        </div>
    );
}