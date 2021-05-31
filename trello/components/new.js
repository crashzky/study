import {css} from '@emotion/css';
import {createCard, createColumn} from '../actions/action';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const New = ({type, parent, createCard, createColumn}) => {
    function switchTitle() {
        switch(type) {
            case 'card':
                return '+ Add new card';
            case 'column':
                return '+ Add new column';
        }
    }

    return (
        <button className={css`
                outline: none;
                background: transparent;
                width: 362px;
                height: 160px;
                border: 1px dashed rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            `}
            onClick={() => {
                switch(type) {
                    case 'card':
                        createCard(parent);
                        break;
                    case 'column':
                        createColumn();
                        break;
                }
            }}>
                <p className={css`
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                `}>{switchTitle()}</p>
        </button>
    );
};

New.propTypes = {
    type: PropTypes.oneOf(['card', 'column']),
    parent: PropTypes.number,
    createCard: PropTypes.func,
    createColumn: PropTypes.func
};

export default connect(() => ({}), {createCard, createColumn})(New);