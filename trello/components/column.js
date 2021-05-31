import styled from '@emotion/styled';
import Button from '../components/button';
import Card from '../components/card';
import New from '../components/new';
import {css} from '@emotion/css';
import PropTypes from 'prop-types';
import {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {setColumnName, removeColumn} from '../actions/action';

const Column = ({id, columns, setColumnName, removeColumn}) => {
    const Title = styled.div`
        width: 362px;
        height: 50px;
        background: #F4F4F4;
        border-radius: 10px; 
    `;

    const title = columns[id].name;
    const childrens = columns[id].childrens;

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
                defaultValue={title}
                onKeyUp={e => {
                    if(e.code === 'Enter') {
                        setIsEdit(false);
                        if(e.target.value !== '') 
                            setColumnName(id, e.target.value);
                    }
                }}
                onBlur={e => {
                    setIsEdit(false);
                    if(e.target.value !== '') 
                        setColumnName(id, e.target.value);
                }}/>;
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
                `}>{title}</p>;
        }
    }

    return (
        <div>
            <Title className='d-flex justify-content-between align-items-center px-3'>
                {switchTitle()}
                <Button onClick={() => removeColumn(id)}>
                    <img src='/svg/points.svg'
                            alt='Points'
                            width={30}
                            height={30}/>
                </Button>
            </Title>
            <div className='mt-3 d-grid gap-3'>
                {childrens.map((el, i) => <Card key={i} parent={id} id={i} title={el.title} tags={el.tags}/>)}
                <New type='card' parent={id}/>
            </div>
        </div>
    );
};

Column.propTypes = {
    id: PropTypes.number,
    columns: PropTypes.arrayOf(PropTypes.object),
    setColumnName: PropTypes.func,
    removeColumn: PropTypes.func
};

const mapStateToProps = state => ({
    columns: state.columns
});

export default connect(mapStateToProps, {setColumnName, removeColumn})(Column);