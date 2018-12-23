import styled, { keyframes } from 'styled-components';


export const BounceDelay = keyframes`
0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

export const SpinnerWrapper = styled.div`
    & > div {
        width: 18px;
        height: 18px;
        background-color: #333;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: ${BounceDelay} 1.4s infinite ease-in-out both;
        animation: ${BounceDelay} 1.4s infinite ease-in-out both;
      }
`;

export const BouncerWrapper = styled.div`
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;`;

export const Div = styled.div`
    margin-top: 50px;
    font-size: xx-large;
    `