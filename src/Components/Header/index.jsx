import { useState } from 'react';
import { Container, MenuSide, MenuContent } from './styles';
import { RiMenu4Fill } from 'react-icons/ri';
import Battleship from '../../assets/battleship-simple.png';

export function Header(){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <Container>
            <img src={Battleship} />
            <div>
                <MenuSide>
                    <div><RiMenu4Fill size={30} onClick={() => setShowMenu(!showMenu)} /></div>
                    <MenuContent show={showMenu}>
                        <ul>
                            <li>Start New Game</li>
                            <li>Profile</li>
                            <li>Friends</li>
                        </ul>
                    </MenuContent>
                </MenuSide>
            </div>
        </Container>
    );
}