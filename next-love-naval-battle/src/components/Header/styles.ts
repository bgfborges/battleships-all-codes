import styled from 'styled-components'

export const Container = styled.header`

    background: black;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid var(--dark);

    > div:nth-child(1) {
        width: 100%;
        display: flex;
        align-items: center;
        height: 80px;
        
        img {
            height: 100%;
            padding: 10px 0;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-left: 30px;
            display: flex;
            flex-direction: row;
            height: 100%;

            li {
                padding: 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                opacity: 0.9;
                transition: 0.2ms opacity;

                & + li {
                    margin-left: 2rem;
                }

                &:hover {
                    opacity: 1;
                    font-weight: 500;
                }

                &.active {
                    opacity: 1;
                    font-weight: 500;
                }

                &.active::after{
                    content: '';
                    height: 3px;
                    background: var(--blue);
                    width: 90%;
                    position: absolute;
                    bottom: 1px;
                    border-radius: 20px 20px 0 0;
                }
            }
        }
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

interface MenuContent {
    show: boolean
}

export const MenuContent = styled.div<MenuContent>`

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

            a {
                color: white;
                text-decoration: none;
            }

            &:hover {
                transition: 50ms background;
                background: var(--blue);
            }
        }
    }

`;