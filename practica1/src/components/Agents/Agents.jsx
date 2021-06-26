import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Agentes, ContainerAgents, ImgAgent, ContainerAgent, ImgClass } from './styled'

const Agents = () => {

    const [agents, setAgents] = useState([])

    useEffect(() => {
        axios('https://valorant-api.com/v1/agents')
          .then(({data}) => setAgents(data))
          .catch(error => console.log(error))
      }, []);

    //   console.log(agents.data[0].role.displayName)
    

    return (
        <Container>
            <ContainerAgents>
                <Agentes>{agents.data.map(agent => (
                    <ContainerAgent>
                        <ImgAgent src={agent.fullPortrait}></ImgAgent>
                        <h3>{agent.displayName}</h3>
                    </ContainerAgent>
                ))}</Agentes>
            </ContainerAgents>
        </Container>
    )
}

export default Agents