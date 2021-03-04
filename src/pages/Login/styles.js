import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  img {
    margin-bottom: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 32px;

  width: 448px;
  height: 408px;

  border: 1px solid var(--black-secondary);

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    width: 100%;
  }
`;
