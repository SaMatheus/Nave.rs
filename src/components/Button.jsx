import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return (
    <ButtonStyle type={props.type} {...props}>
      <p>{props.children}</p>
    </ButtonStyle>
  );
}

export default Button;

export const ButtonStyle = styled.button`
  background: var(--black-primary);
  color: var(--white);

  border: 0 none;

  font-size: 14px;
  font-weight: 600;

  width: 100%;
  height: 40px;
`;
