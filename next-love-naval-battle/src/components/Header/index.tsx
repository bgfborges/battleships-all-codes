import { useState } from 'react';
import { Container, MenuSide, MenuContent } from './styles';
import { RiMenu4Fill } from 'react-icons/ri';

export function Header(){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <Container>
            <div>
                <img src="/images/battleship-simple.png" alt="Logo Battleship" />
                <ul>
                    <li className="active">Home</li>
                    <li>Spotted Love</li>
                </ul>
            </div>
            <div>
                <MenuSide>
                    <div><RiMenu4Fill size={30} onClick={() => setShowMenu(!showMenu)} /></div>
                    <MenuContent show={showMenu}>
                        <ul>
                            <li><a>Start New Game</a></li>
                            <li><a>Profile</a></li>
                            <li><a>Friends</a></li>
                        </ul>
                    </MenuContent>
                </MenuSide>
            </div>
        </Container>
    );
}