import {css} from '@emotion/css';
import PropTypes from 'prop-types';

const Button = ({children, onClick, className}) => {
    return (
        <div className={className}>
            <button className={css`
                border: none;
                outline: none;
                background: transparent;
                padding: 0;
            `} onClick={onClick}>{children}</button>
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Button;