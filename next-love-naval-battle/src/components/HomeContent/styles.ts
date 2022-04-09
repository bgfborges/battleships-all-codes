import styled from 'styled-components'

interface ContainerProps {
    img: string;
}

export const Container = styled.div<ContainerProps>`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    background: linear-gradient(240deg, rgba(1, 30, 40, 0.99), rgba(1, 30, 40, 0.99)), url('${ (img) => img.img }');
    background-image: cover;
    background-position: left;
`;

export const Credits = styled.section`
    width: 100%;
    height: 40px;
    text-align: center;
    justify-self: center;
`;

export const Content = styled.div`
    width: 100vw;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: row;
    padding: 0 100px;
    justify-content: space-between;
    align-items: center;
`;
;
export const InfoHomeContainer = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;

    h1 {
        font-size: 90px;
        margin-bottom: 40px;
        margin-top: 20px;
    }

    h3 {
        svg {
            margin-right: 10px;
            color: yellow;
        }
        font-size: 25px;
    }

    p {
        font-size: 20px;
        padding: 0;
        margin-bottom: 80px;
        margin-top:10px;
    }

    a {
        text-decoration: none;
        color: white;
        background: var(--blue);
        padding: 30px 50px;
        font-size: 20px;
        border-radius: 50px;

        & + a {
            margin-left: 20px;
            background: var(--dark);

            svg {
                margin-bottom: -3px;
                margin-right: 15px;
            }
        } 
    }

    span {
        color: var(--blue);
        font-weight: 800;
    }
`;

export const ImageHomeContainer = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;

    img {
        width: 100%;
    }
`;