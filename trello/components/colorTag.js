import {css} from '@emotion/css';
import PropTypes from 'prop-types';

const ColorTag = ({color, onClick, active}) => {
    function isActive() {
        if(active)
            return <img src='/svg/check.svg' alt='Check icon'/>;
    }

    return <button className={css`
        border: none;
        outline: none;
        background: ${color};
        border-radius: 4px;
        width: 37px;
        height: 37px;
    `} onClick={onClick}>
        {isActive()}
    </button>;
};

ColorTag.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool
};

export default ColorTag;