import { darken } from "polished"
import styled from "styled-components"

const boxShadow = 3;

export const SmallButton = styled.button`
    background: #3B4CCA;
    color: #ffffff;
    border: 0;
    min-width: 32px;
    min-height: 32px;
    box-shadow: ${boxShadow}px ${boxShadow}px 0 ${darken(0.2, '#3B4CCA')};
    transition: all .25s;
    font-size: 1.25rem;
    outline: none;

    &:hover, &:focus {
        box-shadow: ${-boxShadow}px ${-boxShadow}px 0px #3B4CCA;
        background: ${darken(0.2, '#3B4CCA')};
    }
`