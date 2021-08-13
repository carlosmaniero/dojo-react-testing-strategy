import { darken } from "polished";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #ffcc01;
  padding: 60px 20px;
  text-align: center;
  color: white;
  text-shadow: -2px 2px ${darken(0.05,'#ffcc01')};
  border: 10px solid #016ab6;
  box-shadow:
    inset -3px 3px 0 #d6a200,
    -1px 1px ${darken(0.16, '#016ab6')},
    -2px 2px ${darken(0.17, '#016ab6')},
    -3px 3px ${darken(0.18, '#016ab6')},
    -4px 4px ${darken(0.19, '#016ab6')},
    -5px 5px ${darken(0.20, '#016ab6')},
    -6px 6px ${darken(0.21, '#016ab6')},
    -7px 7px ${darken(0.22, '#016ab6')},
    -8px 8px ${darken(0.23, '#016ab6')},
    -9px 9px ${darken(0.24, '#016ab6')},
    -10px 10px ${darken(0.25, '#016ab6')};
  position:relative;

  margin: 20px 20px 30px 30px;

  h3 {
    margin: 0 0 20px;
  }

  p {
    margin: 0;
  }
`;

export const Footer = () => 
  <FooterWrapper>
    <h3>Pokédex - Workshop React testing strategy.</h3>
    <p>Pokémon and Pokémon character names are trademarks of Nintendo.</p>
    <p>This is not a commercial project.</p>
  </FooterWrapper>