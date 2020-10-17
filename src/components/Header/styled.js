import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  padding: 16px;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 15px;
  };
`;

export const HeaderLogo = styled.div`

  & svg {
    max-width: 100%;
    max-height: 300px;
  }

  @media (max-width: 700px) {
    max-width: 100%;

    & svg {
      max-height: 200px;
    };
  };
`;
