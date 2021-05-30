import {css} from '@emotion/css';
import {
    Row,
    Col
} from 'reactstrap';

export default function Search() {
    return (
        <Row className={css`
            width: 512px;
            height: 30px;
            background: #F4F4F4;
            border-radius: 25px;
        `}>
            <Col md='11'>
                <input type='text' className={css`
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    background: transparent;
                `}/>
            </Col>
            <Col className={css`
                padding-top: 1px;
            `}>
                <img src='/svg/loupe.svg' alt='Loupe'/>
            </Col>
        </Row>
    );
}