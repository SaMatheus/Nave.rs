import React from 'react';
// STYLES
import { Container, Content } from './styles';

// AXIOS
import api from '../services/api';

// COMPONENTS
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    api.get('navers/show/1', {}).then((response) => console.log(response.data));
  };

  return (
    <>
      <Container>
        <Content>
          <img src='/icons/logo.svg' alt='logomarca Nave.rs' />
          <form action='' onSubmit={handleSubmit}>
            <Input for='e-mail' type='text' placeholder='E-mail'>
              E-mail
            </Input>
            <Input for='password' type='password' placeholder='Senha'>
              Senha
            </Input>
            <Button type='submit'>Entrar</Button>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default Login;
