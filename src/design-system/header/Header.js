import styled, {keyframes} from 'styled-components';
import logo from './../../logo.png';

const animationDegrees = 3;

const rotate = keyframes`
  0% {
    transform: rotate(-${animationDegrees}deg);
  }

  22.5% {
    transform: rotate(${animationDegrees}deg);
  }

  45% {
    transform: rotate(-${animationDegrees}deg);
  }

  62.5% {
    transform: rotate(${animationDegrees}deg);
  }

  90% {
    transform: rotate(-${animationDegrees}deg);
  }

  95% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotate(0deg) rotate(-${animationDegrees}deg);
  }
`;

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 420px;
  animation: ${rotate} 10s linear infinite;
`;

export const Header = () => 
  <HeaderWrapper>
    <Logo src={logo} />
  </HeaderWrapper>