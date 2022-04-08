import ProfileOneImg from '../../assets/profile-1.png';
import ProfileTwoImg from '../../assets/profile-2.jpg';
import { BodyContainer, SideProfileContainer, ProfilePhoto, BodyContent, BattleTable, Credits, ChatMarines, GameBoard, SideProfileContent, ChatContent, HeaderChat, ContentChat, BottomChat, SideProfileReactions } from './styles';
import { BattleTableSquareEnemy } from './BattleTableSquare/BattleTableSquareEnemy';
import { BattleTableSquareMine } from './BattleTableSquare/BattleTableSquareMine';
import { RiRadioButtonLine } from 'react-icons/ri';
import { AiOutlineSend, AiFillHeart } from 'react-icons/ai';
import { FaAngry, FaSadCry } from 'react-icons/fa';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { BsFillCameraVideoFill } from 'react-icons/bs';

export function Body(){

    return(
        <BodyContainer>
            <ChatMarines>
                <ChatContent>
                    <HeaderChat>
                        <div><RiRadioButtonLine />Reginka Vdovina</div>
                        <BsFillCameraVideoFill />
                    </HeaderChat>
                    <ContentChat />
                    <BottomChat>
                        <input type="text" />
                        <button><AiOutlineSend /></button>
                    </BottomChat>
                </ChatContent>
            </ChatMarines>
            <GameBoard>
                <SideProfileContainer>
                    <SideProfileContent>
                        <SideProfileReactions>
                            <li><AiFillHeart size={30} color="red" /></li>
                            <li><BiHappyHeartEyes size={30} color="lightyellow" /></li>
                            <li><FaSadCry size={30} color="lightpink" /></li>
                            <li><FaAngry size={30} color="lightblue" /></li>
                        </SideProfileReactions>
                        <ProfilePhoto>
                            <div>
                                <img src={ProfileOneImg} alt="Profile One" />
                            </div>
                        </ProfilePhoto>
                        <div>
                            <h3>Gabriel Borges</h3>
                            <h4>Major</h4>
                        </div>
                    </SideProfileContent>
                    <SideProfileContent>
                        <ProfilePhoto>
                            <div>
                                <img src={ProfileTwoImg} alt="Profile One" />
                            </div>
                        </ProfilePhoto>
                        <div>
                            <h3>Reginka Vdovina</h3>
                            <h4>General</h4>
                        </div>
                    </SideProfileContent>
                </SideProfileContainer>
                <BodyContent>
                    <section>
                        <h2>Disputa do Dia</h2>
                        <h3>O <strong>Perdedor</strong> lava a louça do jantar!</h3>
                    </section>

                    <BattleTable>
                        <ul>
                            <BattleTableSquareMine />
                        </ul>
                        <ul>
                            <BattleTableSquareEnemy />
                        </ul>
                    </BattleTable>
                    <Credits>Desenvolvido por <strong>Gabriel Borges</strong>.</Credits>
                </BodyContent>
            </GameBoard>
        </BodyContainer>
    );
}