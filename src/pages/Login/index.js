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
import Validator, { cnh } from '@this-empathy/javascript-validator';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [inputValueError, setInputValueError] = useState(false);
  const [inputDataError, setInputDataError] = useState(false);
  const [errorText, setErrorText] = useState('');

  let history = useHistory();

  const messageValueError = 'Há campos em branco!';
  const messageDataError = 'Usuário não encontrado. Email ou senha inválidos!';

  const emailIsValid = (str) => {
    let pattern = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
    return !!pattern.test(str);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validation = await emailIsValid(email);

    if (validation && password.length > 5) {
      setInputDataError(false);
      setInputValueError(false);
      return postData();
    }
    if (email.length === 0 || password.length === 0) {
      setInputDataError(false);
      return setInputValueError(true);
    } else {
      setInputValueError(false);
      return setInputDataError(true);
    }
  };

  const postData = () => {
    api
      .post('users/login', {
        email,
        password,
      })
      .then((response) => {
        window.localStorage.setItem('token', response.data.token);
        history.push('/home');
      })
      .catch((error) => {
        setErrorText('Oops, algo deu errado. O erro foi: ' + error);
      });
  };

  return (
    <>
      <Container>
        <Content>
          <img src='/icons/logo.svg' alt='logomarca Nave.rs' />
          <form onSubmit={handleSubmit}>
            {inputValueError ? (
              <span>Há campos em branco!</span>
            ) : inputDataError ? (
              <span>Usuário não encontrado. Email ou senha inválidos!</span>
            ) : (
              ''
            )}
            <Input
              for='e-mail'
              type='text'
              placeholder='E-mail'
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              onBlur={() => {}}
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
