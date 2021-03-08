import React from 'react';
import styled from 'styled-components';

function Input(props, ...rest) {
  return (
    <>
      <Label htmlFor={props.for}>
        <p>{props.children}</p>
        <InputStyle
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          {...rest}
        />
      </Label>
    </>
  );
}

export default Input;

const Label = styled.label`
  width: 100%;
  height: 40px;

  p {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

const InputStyle = styled.input`
  width: 100%;
  height: 40px;

  height: 40px;
  border: 1px solid #424242;
  padding: 0 8px;
  font-size: 16px;
`;
