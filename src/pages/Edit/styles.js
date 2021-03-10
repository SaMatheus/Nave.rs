import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  padding: 50px 0;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    button:nth-last-child(1) {
      width: 226px;
      margin-top: 32px;
    }
  }

  @media (max-width: 1400px) {
    form {
      button:nth-last-child(1) {
        width: 176px;
      }
    }
  }

  @media (max-width: 570px) {
    form {
      button:nth-last-child(1) {
        width: 100%;
      }
    }
  }
`;

export const FormStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  align-items: center;

  gap: 32px;

  width: 860px;

  @media (max-width: 1400px) {
    width: 560px;
  }

  @media (max-width: 570px) {
    width: 100%;
    grid-template-columns: 1fr;
  }

  label {
    height: 100%;
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

export const ButtonStyle = styled.button`
  background: none;
  border: 0 none;

  display: inline;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }

  &:nth-child(1) {
    margin-right: 16px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  height: 160px;
  width: 592px;

  padding: 32px;

  background: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  position: fixed;
  top: 50%;

  transform: translateY(-50%);

  & > button:nth-child(1) {
    position: absolute;
    top: 21px;
    right: 21px;

    margin: 0;

    z-index: 1;

    img {
      height: 14px;
      width: 14px;
    }
  }

  @media (max-width: 600px) {
    height: 22%;
    width: 87%;

    h1 {
      font-size: 2rem;
    }
    p {
      line-height: 1.8rem;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    & > button:nth-child(1) {
      top: 16px;
      right: 16px;
    }
  }
`;
