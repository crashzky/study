import PropTypes from 'prop-types';
import {css} from '@emotion/css'; 

export default function Tag({color}) {
    let hashColor = '';
    switch(color) {
        case 'yellow':
            hashColor = '#F8BD1C';
            break;
        case 'blue':
            hashColor = '#4339F2';
            break;
        case 'red':
            hashColor = '#FF3838';
            break;
        case 'purple':
            hashColor = '#891BE8';
            break;
        case 'green':
            hashColor = '#1AD698';
            break;
    }

    return <div className={css`
        width: 60px;
        height: 8px;
        background: ${hashColor};
        border-radius: 4px;
    `}></div>;
}

Tag.propTypes = {
    color: PropTypes.oneOf(['yellow', 'blue', 'red', 'purple', 'green'])
};