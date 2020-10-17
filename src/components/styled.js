import styled from 'styled-components';

export const Card = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  &:first-child {
    margin-top: 10px;
  }

  & h1 {
    color: var(--white);
    margin: 10px 0;
  };

  & p {
    font-size: 1.2em;
    line-height: 1.5;
    margin: 10px 0;
  };

  & p strong {
    color: var(--white);
  };

  & p a {
    color: var(--highlight-principal);
    text-decoration: none;
  };

  & ul {
    padding: 0 16px;
    box-sizing: border-box;
  }

  li {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    };
  };

  & svg {
    max-width: 100%;
  };

  & iframe {
    margin-top: 16px;
  };
`;

export const CardBgWrapper = styled.div`
  background: linear-gradient(to right, var(--highlight-principal), purple);
  border-radius: 5px;
  margin: 40px 0;
  padding: 1px;
  position: relative;

  @media (max-width: 700px) {
    margin: 15px 0;
  };
`;

export const CardBg = styled(Card)`
  background-color: var(--bg-light);
  border-radius: 5px;

  &:first-child {
    margin-top: 0;
  }
`;

export const BtnCard = styled.a`
  display: inline-block;
  box-sizing: border-box;
  background-color: var(--bg-btn);
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  width: 235px;
  padding: 10px;
  margin: 15px 0;
  color: var(--white);
  font-weight: 500;
  text-transform: uppercase;
  align-self: flex-end;

  &:hover {
    background-color: var(--bg-btn-hover);
  };

  @media (max-width: 700px) {
    align-self: initial;
  };
`;

export const Profiles = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  
  & a {
    color: var(--highlight-principal);
    text-decoration: none;

    @media (max-width: 700px) {
      margin-bottom: 10px;
    };
  };

  @media (max-width: 700px) {
    flex-direction: column;
  };
`;

export const Profile = styled.figure`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
`;

export const PictureProfile = styled.img`
  border-radius: 50%;
  width: 132px;
  height: 132px;
`;

export const LinkProfile = styled.figcaption``;
