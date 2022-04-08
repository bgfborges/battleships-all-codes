import styled from 'styled-components';

export const Container = styled.header`

    background: black;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;

    img {
        height: 100%;
    }
`;

export const MenuSide = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;

        svg {
            padding: 5px;
            cursor: pointer;
        }

        svg:hover {
            transition: 200ms background;
            background: var(--blue);
            border-radius: 6px;
        }
    }

`;

export const MenuContent = styled.div.attrs( props => {
    show: props.show
})`

    position: absolute;
    background: var(--back);
    bottom: 0;
    right: 0;
    top: 80px;
    height: calc(100vh - 80px) !important;
    z-index: 200;
    width: 20vw !important;
    visibility: ${ props => props.show ? 'visible' : 'hidden' };
    display: flex;
    justify-content: center;

    ul {
        list-style: none;
        padding: 20px;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        li {
            width: 100%;
            padding: 10px;
            border: 1px solid var(--blue);
            margin: 3px 0;
            text-align: center;
            cursor: pointer;

            &:hover {
                transition: 50ms background;
                background: var(--blue);
            }
        }
    }

`;