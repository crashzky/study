import {css} from '@emotion/css';
import PropTypes from 'prop-types';

const MenuLi = ({title, src, onClick}) => {
    return (
        <button onClick={onClick}
        className={css`
            height: 46px;
            background: white;
            border-radius: 3px;
            padding: 12px 17px;
            display: flex;
            gap: 12px;
            border: none;
            outline: none;
            transition: all .2s;

            &:hover {
                transform: translateX(20px);
            }
        `}>
            <img src={src} alt='Li icon'/>
            <p className={css`
                color: #dc3545;
                font-weight: 400;
                font-size: 18px;
                line-height: 27px;
            `}>{title}</p>
        </button>
    );
};

MenuLi.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    onClick: PropTypes.func
};

export default MenuLi;