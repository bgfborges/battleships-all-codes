import styled from 'styled-components';

export const Container = styled.header`

    background: black;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;

    div {
        width: 20vw;
    }

    img {
        margin-bottom:-20px;
        z-index: 110;
    }

`;