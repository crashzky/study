import {css} from '@emotion/css';

export default function Button({children}) {
    return <button className={css`
        border: none;
        outline: none;
        background: transparent;
    `}>{children}</button>;
};