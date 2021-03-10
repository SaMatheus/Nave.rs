import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    height: auto;

    flex: 1;
    width: 100%;

    padding-top: 40px;

    position: relative;
  }

  span {
    color: var(--warning);

    font-size: 14px;

    position: absolute;
    top: 10px;
  }

  @media (max-width: 500px) {
    width: 90%;
    padding-bottom: 0;
    form {
      padding-top: 10px;
      height: 100%;
      justify-content: space-evenly;
    }
  }
`;
