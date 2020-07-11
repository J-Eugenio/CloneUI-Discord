import React from 'react'
import { Container, Separator } from './styles'
import ServerButton from '../ServerButton'

const ServerList: React.FC = () =>{
    return(
        <Container>
        <ServerButton isHome/>

        <Separator />

        <ServerButton />
        <ServerButton hasNotifications/>
        <ServerButton mentions={3}/>
        <ServerButton />
        <ServerButton mentions={8} hasNotifications/>
        <ServerButton />
        <ServerButton mentions={20} hasNotifications/>
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={32}/>
        <ServerButton />
        <ServerButton mentions={13}/>

    </Container>
    )
}

export default ServerList