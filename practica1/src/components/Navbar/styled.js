import styled from "styled-components"; 
import { Link } from "react-router-dom";
    
export const Img = styled.img`
        height: 2rem;
        width: 2rem;
    `
export const Linknav = styled(Link)`
        text-decoration: none;
        color: #666565;
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0 .1rem 0 .1rem;
        padding: .4rem;

        &:hover {
            color: #9c0000;
            font-size: 1.17rem;
        }
    `

export const NavB = styled.nav`
        display: flex;
        background-color: #1b0000;
        border-bottom: 1px solid #ff0000;
        padding: .7rem;
    `