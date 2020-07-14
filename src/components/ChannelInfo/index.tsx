import React from 'react'

import { Container, HastagIcon, Title, Separator, Description} from './styles'


const ChannelInfo: React.FC = () => {
    return(
        <Container>
            <HastagIcon />

            <Title>chat-livre</Title>

            <Separator />

            <Description>Canal Aberto para conversas</Description>
        </Container>
    )
}

export default ChannelInfo