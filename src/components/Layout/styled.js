import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-dark);
  border-top: 4px solid var(--highlight-secondary);
  color: var(--text-color);
`;

export const LayoutMain = styled.main`
  box-sizing: border-box;
  min-height: 90vh;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 60px;
  padding: 16px;

  @media (max-width: 700px) {
    padding: 0 16px;
  };
`;
