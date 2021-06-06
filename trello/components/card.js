import {css} from '@emotion/css';
import Tag from '../components/tag';
import {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCardTitle, setActive, setActiveNull} from '../actions/action';

const Card = ({id, parent, tags, title, setCardTitle, openCard, setActiveNull, setActive}) => {
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef();

    const [deltaValue, setDeltaValue] = useState(title);
    
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
                    height: ${Math.ceil(deltaValue.length/ 38) * 25}px;
                    resize: vertical;
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
                defaultValue={deltaValue}
                onChange={e => {
                    if(e.target.value !== '')
                        setDeltaValue(e.target.value);
                }}
                onKeyUp={e => {
                    if(e.code === 'Enter') {
                        setIsEdit(false);
                        if(e.target.value !== '')
                            setCardTitle(parent, id, e.target.value);
                    }
                }}
                onBlur={e => {
                    setIsEdit(false);
                    if(e.target.value !== '')
                        setCardTitle(parent, id, e.target.value);
                }}/>;
        } else {
            return <p className={css`
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin-top: 9px;
                margin-bottom: 0;
            `}
            onClick={() => setIsEdit(true)}>{deltaValue}</p>;
        }
    }
    return (
        <button className={css`
            z-index: ${openCard && openCard.column === parent && openCard.card === id ? '3' : '1'};
            width: 362px;
            background: #F4F4F4;
            border-radius: 10px;
            padding: 20px;
            border: none;
            outline: none;
        `} onContextMenu ={e => {
            e.preventDefault();
            setActive(parent, id);
        }} onKeyUp={e => {
            if(e.code === 'Escape')
                setActiveNull();
        }}>
            <div className='d-flex gap-2'>
                {tags ? tags.map((el, i) => <Tag key={i} color={el}/>) : null}
            </div>
            {switchTitle()}
        </button>
    );
}

Card.propTypes = {
    id: PropTypes.number,
    parent: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.oneOf(['yellow', 'blue', 'red', 'purple', 'green'])),
    title: PropTypes.string,
    setCardTitle: PropTypes.func,
    setActive: PropTypes.func,
    setActiveNull: PropTypes.func,
    openCard: PropTypes.object
}

const mapStateToProps = state => ({
    openCard: state.openCard
});

export default connect(mapStateToProps, {setCardTitle, setActive, setActiveNull})(Card);