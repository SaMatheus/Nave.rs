import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 160px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-end;
    align-items: center;

    gap: 54px 32px;

    width: 560px;
  }

  button {
    width: 176px;
    align-self: flex-end;
  }
`;

export const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  color: var(--black-primary);

  margin-bottom: 32px;

  svg {
    font-size: 42px;
    margin-right: 8px;
  }
  p {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
  }
`;
