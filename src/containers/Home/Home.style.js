import styled, {css, keyframes} from 'styled-components';

export const Image = styled.img`
  width: 100%;
`

export const DinoImage = styled.div`
  height: 150vh;
  background-image: url('${require('../../assets/dino.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: center;
  color: #fff;

  font-size: 1.5em;

  h1 {
    margin-bottom: 0;
  }
`


const hideTransition = keyframes`
  from {
    transform: rotateY(90deg);
  }

  to {
    transform: rotateY(0deg);
  }
`
const revealTransition = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(90deg);
  }
`

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: tomato;

    transform-origin: left;
    animation: ${revealTransition} 3s;
    transform: rotateY(90deg);
    
  }

  ${({ hide }) => hide && css`
    &:after {
      transform-origin: left;
      animation: ${hideTransition} 3s;
      transform: rotateY(0deg);
    }
  `}
`
