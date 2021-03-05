import React, { useState } from 'react';

// STYLES
import { Container, Content } from './styles';

// AXIOS
import api from '../../services/api';

// COMPONENTS
import Input from '../../components/Input';
import Button from '../../components/Button';

// ROUTER
import { useHistory } from 'react-router-dom';

// PLUGIN VALIDATOR
import Validator from '@this-empathy/javascript-validator';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);
  const [inputValueError, setInputValueError] = useState(false);

  let history = useHistory();

  const postData = () => {
    api
      .post('users/login', {
        email,
        password,
      })
      .then((response) => {
        setIsValid(true);
        window.localStorage.setItem('token', response.data.token);
        history.push('/home');
      })
      .catch((error) => {
        console.log(error.status);
      });
  };

  const authFormValues = () => {
    if (Validator.email(email) && password.length > 5) {
      setError(false);
      setInputValueError(false);

      postData();
    }
    if (email === '' || password === '') {
      setIsValid(false);
      setInputValueError(true);
    } else {
      setInputValueError(false);
      setIsValid(false);
      setError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    authFormValues();
  };

  return (
    <>
      <Container>
        <Content>
          <img src='/icons/logo.svg' alt='logomarca Nave.rs' />
          <form onSubmit={handleSubmit}>
            {!isValid && inputValueError ? (
              <span>Há campos em branco!</span>
            ) : !isValid && error ? (
              <span>Usuário não encontrado. Email ou senha inválidos!</span>
            ) : (
              ''
            )}
            <Input
              for='e-mail'
              type='text'
              placeholder='E-mail'
              onChange={({ target }) => setEmail(target.value)}
              required
            >
              E-mail
            </Input>
            <Input
              for='password'
              type='password'
              placeholder='Senha'
              onChange={({ target }) => setPassword(target.value)}
              required
            >
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
