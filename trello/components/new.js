import {css} from '@emotion/css';

export default function New() {
    return (
        <div className={css`
                width: 362px;
                height: 160px;
                border: 1px dashed rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            `}>
                <p className={css`
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                `}>+ Add new card</p>
        </div>
    );
}