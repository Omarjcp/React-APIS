import styled from "styled-components";
import ImagenFondo from "./personajes.jpg"


export const ContenedorHome = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${ImagenFondo});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
`

export const Valorant = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 5rem;
    font-family: 'Kaushan Script', cursive;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px red;
`

export const Description = styled.p`
    margin: 1rem;
    color: white;
`