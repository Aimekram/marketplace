import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardsContainer = styled.main `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

export const Card = styled(Link)`
    text-decoration: none;
    color: inherit;
    width: fit-content;
    display: flex;
    flex-flow: row wrap;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.66);
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #d5e4d5;
    }
`