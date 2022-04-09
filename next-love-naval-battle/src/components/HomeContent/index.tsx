import { Container, InfoHomeContainer, ImageHomeContainer, Content, Credits } from './styles'
import { FaHandSpock } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

export function HomeContent(){

    return(
        <>
            <Container img="/images/background-image.jpeg">
                <Content>
                    <InfoHomeContainer>
                        <div>
                            <h3><FaHandSpock />Hey, welcome!</h3>
                            <h1>Play <span>Love</span> Battleships.</h1>
                            <h2>Win to Refuse the Boring Actitivies.</h2>
                            <p><span>It cost the donation you desire</span>.</p>
                            <a href="#">Full Access Now</a>
                            <a href="#"><BsGithub />Open Source on GitHub</a>
                        </div>
                    </InfoHomeContainer>
                    <ImageHomeContainer>
                    </ImageHomeContainer>
                </Content>
                <Credits>Desenvolvido por <strong>Gabriel Borges.</strong></Credits>
            </Container>
        </>
    );
}