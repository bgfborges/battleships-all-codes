import { AiFillHeart } from 'react-icons/ai'
import { CreditsContainer } from './styles'

export function Credits() {
    return(
        <>
        <CreditsContainer><p>Created with <AiFillHeart color="red" size="20" /> by <strong><span>Gabriel Borges</span>.</strong></p></CreditsContainer>
        </>
    )
}