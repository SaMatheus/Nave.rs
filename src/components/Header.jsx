import React from 'react';

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { logout } from '../services/auth';

function Header() {
  const history = useHistory();
  const handleClick = () => {
    logout();
    history.push('/');
  };

  return (
    <HeaderStyle>
      <img src='/icons/logo.svg' alt='logomarca Nave.rs' />
      <button onClick={handleClick}>Sair</button>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px;

  z-index: 0;

  img {
    width: 180px;
  }

  button {
    background: transparent;
    border: none 0;

    color: black;
    font-weight: 600;
    font-size: 18px;
  }

  @media (max-width: 1400px) {
    img {
      width: 150px;
    }
    button {
      font-size: 14px;
    }
  }
  @media (max-width: 1080px) {
    img {
      width: 165px;
    }
    button {
      font-size: 18px;
    }
  }

  @media (max-width: 760px) {
    img {
      width: 180px;
    }
    button {
      font-size: 20px;
    }
  }
`;
