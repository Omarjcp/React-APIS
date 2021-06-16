import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #424242;
    height: 100vh;
`

const ContainerEpis = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem;
    height: auto;
    width: auto;
    background-color: #B9B9B9;
    border-radius: 0.5rem; 
    justify-content: center;
    box-shadow: 10px 10px 10px -3px #000000;

    h1{
         color: #252132;
         background-color: grey;
         border-radius: 0.3rem;
         padding: 1rem;
     }
`


const StyledData = styled.h4`
    color: #252132;
    margin: 0 0 .6rem 2rem;
    span{
        font-size: 1.4rem;
        color: #000000;
    }
    p{
        color: #000000;
    }
`

const StyleCharacters = styled.div`
    p{
        color: black;
        margin: 1px 0 0 2rem;
    }
    h4{
        margin-left: 1.4rem;
        color: #252132;
    }
    
`
const ContainerSinTitulo = styled.div`
    display: flex;
    padding: .5rem;
    justify-content: center;
`



export default function Episodio({ episode }){

    return (
        <Container>
            <ContainerEpis>
                    <h1>{episode.title}</h1>
                <ContainerSinTitulo>
                    <StyledData>Fecha<br></br><p>{episode.air_date}</p></StyledData>
                    <StyledData>Temporada<br></br><span>{episode.season}</span></StyledData>
                    <StyledData>Episodio<br></br><span>{episode.episode}</span></StyledData>
                    <StyleCharacters>
                        <h4>Personajes </h4>
                        {episode.characters.map((e, i) => (
                            <p key={i}>{e}</p>
                        ))}
                    </StyleCharacters>
                </ContainerSinTitulo>
               
            </ContainerEpis>
        </Container>

    )
}