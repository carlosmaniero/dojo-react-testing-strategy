import styled from "styled-components"
import { lighten } from "polished";

const boxShadow = 3;

export const Card = styled.div`
    color: #3B4CCA;
    background: #ffffff;
    box-shadow: ${boxShadow}px ${boxShadow}px 0 #FFDE00;
    transition: all .25s;
    font-size: 1.25rem;
    padding: 20px;
    border: 2px solid #FFDE00;
    font-family: Arial, Helvetica, sans-serif;

    &:hover, &:focus {
        box-shadow: ${-boxShadow}px ${-boxShadow}px 0px #FFDE00;
        background: ${lighten(0.4, '#FFDE00')};
    }
`;