import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 100px;

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
  gap: 0 32px;
  padding: 0 32px;

  width: 100%;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Profile = styled.div`
  width: 280px;
  height: 420px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    flex: 1;
    width: 100%;
    background: black;
  }

  h3 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    margin: 12px 0;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  div {
    display: flex;
    button {
      background: none;
      border: 0 none;

      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(1) {
        margin-right: 16px;
      }
    }
  }
`;
