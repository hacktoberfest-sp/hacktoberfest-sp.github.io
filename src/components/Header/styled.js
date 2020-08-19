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
  max-width: 50%;

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

export const HeaderInfos = styled.div`
  box-sizing: border-box;
  font-size: 32px;

  & p {
    margin: 15px 0;
  };

  & p.date {
    margin: 0;
  };

  & span {
    color: var(--highlight-principal);
  };

  & span.street {
    color: var(--text-color);
    font-size: 22px;
  };

  & a {
    display: inline-block;
    box-sizing: border-box;
    background-color: var(--bg-btn);
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    width: 235px;
    padding: 5px;
    margin: 0;
    color: var(--white);
    font-weight: 500;

    :hover {
      background-color: var(--bg-btn-hover);
    };
  };

  @media (max-width: 700px) {
    margin-top: 15px;
  };
`;
