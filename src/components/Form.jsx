import React, { useEffect } from 'react';
import styled from 'styled-components';

// DATA
import FormData from '../services/FormData';

// ICONS
import { RiArrowLeftSLine } from 'react-icons/ri';

// COMPONENTS
import Button from './Button';
import Input from './Input';
import { useHistory } from 'react-router-dom';

function Form(props) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/home');
  };

  return (
    <Content>
      <Back onClick={handleClick}>
        <RiArrowLeftSLine />
        <p>{props.valueBack}</p>
      </Back>
      <FormStyle>
        {FormData.map((obj) => {
          return (
            <Input
              key={obj.id}
              for={obj.for}
              type={obj.type}
              placeholder={obj.title}
            >
              {obj.title}
            </Input>
          );
        })}
        <span></span>
        <Button type={props.typeButton}>{props.valueButton}</Button>
      </FormStyle>
    </Content>
  );
}

export default Form;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  align-items: center;

  gap: 54px 32px;

  width: 560px;

  button {
    width: 176px;
    justify-self: end;
  }
`;

const Back = styled.button`
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
