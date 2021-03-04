import React from 'react';

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const handleClick = () => {
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

const HeaderStyle = styled.header`
  height: 85px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 32px;

  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 150px;
  }

  button {
    background: transparent;
    border: none 0;

    color: black;
    font-weight: 600;
    font-size: 14px;
  }
`;
