import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 100px;

  @media (max-width: 1400px) {
    margin-top: 70px;
  }

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
  gap: 0 40px;
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
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Profile = styled.div`
  width: 380px;
  height: 520px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-size: 16px;

  @media (max-width: 1400px) {
    width: 281px;
    height: 360px;
    font-size: 14px;
  }

  span {
    flex: 1;
    width: 100%;
    background: black;
    cursor: pointer;
    filter: grayscale(1);
    background-position: center;
    background-size: cover;
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

  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  height: 80%;
  width: 80%;

  background: var(--white);

  display: flex;

  position: relative;

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

  & > div {
    display: flex;
    flex-direction: column;
    align-items: left;

    height: 100%;
    width: 50%;

    padding: 32px;

    position: relative;

    div {
      position: absolute;
      bottom: 27px;
      left: 35px;
      button {
        img {
          height: 20px;
          width: 20px;
        }
      }
    }
  }

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
`;

export const DeleteModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

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

  position: relative;

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

  position: relative;

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
