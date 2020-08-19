import styled, { keyframes } from 'styled-components';

export const FooterWrapper = styled.footer`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  background-color: var(--highlight-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.span`
  max-width: 900px;
  color: var(--white);
  font-weight: 600;
`;

const pulse = keyframes`
  from { transform: rotate(-135deg) scale(1); }
  to { transform: rotate(-135deg) scale(1.2); }
`;

export const Heart = styled.span`
  animation: ${pulse} .5s infinite alternate ease-in;
  background-color: var(--white);
  display: inline-block;
  height: 10px;
  margin: 0 15px;
  position: relative;
  width: 10px;
  &::before {
    background-color: var(--white);
    border-radius: 50%;
    content: "";
    height: 10px;
    left: 50%;
    position: absolute;
    top: 0;
    width: 10px;
  };
  &::after {
    background-color: var(--white);
    border-radius: 50%;
    content: "";
    height: 10px;
    left: 0;
    position: absolute;
    top: 50%;
    width: 10px;
  };
`;
