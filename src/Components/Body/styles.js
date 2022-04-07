import styled from 'styled-components';
import backgroundImg from '../../assets/background-image.jpeg';

export const BodyContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: calc(100vh - 80px);
    z-index: 100;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('${ backgroundImg }');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    h3 {
        text-align: center;
        margin-top: 30px;
    }

    h4 {
        margin-top: 8px;
        text-align: center;
        font-weight: 400;
    }
`;

export const SideProfileContainer = styled.div`

    width: 20vw;
    margin: 30px;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    background: rgba(0, 0, 8, 0.59);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.9px);
    -webkit-backdrop-filter: blur(4.9px);
    border: 1px solid rgba(0, 0, 8, 0.52);
`;

export const ProfilePhoto = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    div{
        width: 200px;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
`;

export const BodyContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        padding-right: 20px;

        h2 {
            font-size: 30px;
        }
    
        h3 {
            margin-top: 0px;
            font-size: 15px;
            font-weight: 400;
        }
    }

`;

export const BattleTable = styled.ul`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-itens: center;
    --TableWidth: 32vw;

    div:nth-child(2){
        li:hover{
            background-color: rgba(255, 150, 150, 0.65);
        }
        
        li:hover > span{
            display: block;
        }

        li {
            cursor: pointer;
        }
    }

    > div {
        width: var(--TableWidth);
        height: var(--TableWidth);
        background: rgba(255, 150, 150, 0.59);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.9px);
        -webkit-backdrop-filter: blur(4.9px);
        border: 1px solid rgba(255, 150, 150, 0.52);

        li{
            border-right: 1px solid rgba(255, 150, 150, 0.52);
            border-bottom: 1px solid rgba(255, 150, 150, 0.52);
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                color: rgba(255, 150, 150, 0.99);
                display: none;
            }
        }
        
        li:nth-child(10n){
            border-right: none;
        }
        
        li:nth-child(10){
            border-right: none;
            border-radius: 0 16px 0 0;
        }
        
        li:nth-child(n+100){
            border-bottom: none;
            border-right: none;
            border-radius: 0 0 16px 0;
        }
        
        li:nth-child(91n){
            border-bottom: none;
            border-radius: 0 0 0 16px;
        }

        li:nth-child(1){
            border-radius: 16px 0 0 0;
        }
    }
`;

export const Credits = styled.div`
    margin-top: 30px;
`;