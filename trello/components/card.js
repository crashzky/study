import {css} from '@emotion/css';
import Tag from '../components/tag';
import {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Card({edit = false}) {
    const [isEdit, setIsEdit] = useState(edit);
    const inputRef = useRef();
    
    useEffect(() => {
        if(inputRef.current)
            inputRef.current.focus();
    }, [isEdit]);

    function switchTitle() {
        if(isEdit) {
            return <textarea type='text'
                ref={inputRef}
                className={css`
                    width: 100%;
                    resize: none;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    margin-top: 9px;
                    margin-bottom: 0;
                    padding: 0;
                `}
                defaultValue='Old fashioned recipe for preventing allergies and chemical sensitivitiesign'
               onBlur={() => setIsEdit(false)}/>;
        } else {
            return <p className={css`
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin-top: 9px;
                margin-bottom: 0;
            `}
            onClick={() => setIsEdit(true)}>Old fashioned recipe for preventing allergies and chemical sensitivities</p>;
        }
    }

    return (
        <div className={css`
            width: 362px;
            background: #F4F4F4;
            border-radius: 10px;
            padding: 20px;
            cursor: pointer;
        `}>
            <div className='d-flex gap-2'>
                <Tag color='yellow'/>
                <Tag color='blue'/>
                <Tag color='green'/>
            </div>
            {switchTitle()}
        </div>
    );
}

Card.propTypes = {
    edit: PropTypes.bool
}