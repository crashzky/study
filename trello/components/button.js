import {css} from '@emotion/css';

export default function Button({children, onClick}) {
    return <button className={css`
        border: none;
        outline: none;
        background: transparent;
        padding: 0;
    `} onClick={onClick}>{children}</button>;
};