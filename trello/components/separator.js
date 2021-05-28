import styled from '@emotion/styled';

export default function Separator() {
    const Separator = styled.div`
        width: 1px;
        height: 32px;

        background: black;
        mix-blend-mode: normal;
        opacity: 0.1;
        border-radius: 0.5px;
    `;

    return <Separator/>;
}