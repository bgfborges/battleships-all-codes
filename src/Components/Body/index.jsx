import ProfileOneImg from '../../assets/profile-1.png';
import ProfileTwoImg from '../../assets/profile-2.jpg';
import { BodyContainer, SideProfileContainer, ProfilePhoto, BodyContent, BattleTable, Credits } from './styles';
import { BattleTableSquare } from './BattleTableSquares/';

export function Body(){
    return(
        <BodyContainer>
            <SideProfileContainer>
                <ProfilePhoto>
                    <div>
                        <img src={ProfileOneImg} alt="Profile One" />
                    </div>
                </ProfilePhoto>
                <div>
                    <h3>Gabriel Borges</h3>
                    <h4>Major</h4>
                </div>
            </SideProfileContainer>
            <BodyContent>
                <section>
                    <h2>Disputa do Dia</h2>
                    <h3>O <strong>Perdedor</strong> lava a louça do jantar!</h3>
                </section>

                <BattleTable>
                    <div>
                        <BattleTableSquare />
                    </div>
                    <div>
                        <BattleTableSquare />
                    </div>

                </BattleTable>
                <Credits>Desenvolvido por <strong>Gabriel Borges</strong>.</Credits>
            </BodyContent>
            <SideProfileContainer>
                <ProfilePhoto>
                    <div>
                        <img src={ProfileTwoImg} alt="Profile One" />
                    </div>
                </ProfilePhoto>
                <div>
                    <h3>Reginka Vdovina</h3>
                    <h4>General</h4>
                </div>
            </SideProfileContainer>
        </BodyContainer>
    );
}