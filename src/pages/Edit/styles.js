import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

export const FormStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  align-items: center;

  gap: 54px 32px;

  width: 860px;

  @media (max-width: 1400px) {
    width: 560px;
  }

  button {
    width: 176px;
    justify-self: end;
  }
`;

export const Back = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  color: var(--black-primary);

  margin-bottom: 32px;

  background: none;
  border: none 0;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(-10px);
  }

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
