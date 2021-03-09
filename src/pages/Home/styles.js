import styled from 'styled-components';

export const Content = styled.div`
  padding-bottom: 2rem;
  position: relative;

  height: 100%;
  min-height: 100vh;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 40px 32px;

    h1 {
      font-size: 40px;
      font-weight: 600;
      color: var(--black-primary);
    }

    button {
      width: 176px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 0 32px;

  width: 100%;

  @media (max-width: 1400px) {
    gap: 32px;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Profile = styled.div`
  width: 100%;
  height: 520px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-size: 16px;

  @media (max-width: 1400px) {
    height: 360px;
    font-size: 14px;
  }

  @media (max-width: 1080px) {
    height: 400px;
    font-size: 16px;
  }

  @media (max-width: 760px) {
    height: 460px;
  }

  @media (max-width: 580px) {
    height: 600px;
    font-size: 18px;
  }

  span {
    flex: 1;
    width: 100%;
    background: black;
    cursor: pointer;
    filter: grayscale(1);
    background-position: center;
    background-size: cover;

    &:hover {
      filter: brightness(1.2);
    }
  }

  h3 {
    line-height: 18px;
    font-weight: 600;
    margin: 12px 0;
  }

  p {
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  div:nth-child(1) {
    display: flex;
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
  position: absolute;
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
  height: 80%;
  width: 80%;

  max-height: 700px;
  max-width: 1203px;

  @media (max-width: 1400px) {
    max-height: 500px;
    max-width: 1003px;
  }

  background: var(--white);

  display: flex;

  position: fixed;
  top: 109px;

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

  img {
    height: 100%;
    width: 50%;
    filter: grayscale(1);
    object-fit: cover;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  height: 100%;
  width: 50%;

  padding: 32px;

  position: relative;

  h1 {
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1rem;
    margin-top: 24px;
    font-weight: bold;
  }

  div {
    position: absolute;
    bottom: 27px;
    left: 35px;
    button {
      img {
        height: 26px;
        width: auto;
      }
    }
  }
`;

export const DeleteModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalDeleteContent = styled.div`
  height: 233px;
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

  & > div {
    display: flex;
    justify-content: flex-end;

    gap: 0 24px;

    width: 100%;

    button {
      width: 176px;

      &:nth-child(1) {
        background: transparent;
        color: var(--black-primary);
        border: 1px solid var(--black-primary);
      }
      p {
        margin: 0;
      }
    }
  }
`;

export const DeleteCompleteModal = styled.div`
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
`;
