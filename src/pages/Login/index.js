import React, { useState } from 'react';

// STYLES
import { Container, Content } from './styles';

// AXIOS
import api from '../../services/api';

// AUTH
import { login } from '../../services/auth';

// COMPONENTS
import Input from '../../components/Input';
import Button from '../../components/Button';

// ROUTER
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValid, setIsValid] = useState(false);

  const [inputValueError, setInputValueError] = useState(false);
  const [inputDataError, setInputDataError] = useState(false);
  const [errorText, setErrorText] = useState('');

  let history = useHistory();

  const emailIsValid = (str) => {
    let pattern = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
    return !!pattern.test(str);
  };

  const postData = async () => {
    setIsValid(true);
    const response = await api
      .post('users/login', {
        email,
        password,
      })
      .then((response) => {
        login(response.data.token);
        history.push('/home');
      })
      .catch((error) => {
        setIsValid(false);
        setInputDataError(true);
        setErrorText(
          'Oops, algo deu errado. Verifique suas credenciais. T-T ' + error
        );
        console.log(errorText);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validation = emailIsValid(email);

    if (validation && password.length > 5) {
      window.localStorage.removeItem('token');
      setInputDataError(false);
      setInputValueError(false);
      return postData();
    }
    if (email.length === 0 || password.length === 0) {
      setIsValid(false);
      setInputDataError(false);
      return setInputValueError(true);
    } else {
      setIsValid(false);
      setInputValueError(false);
      return setInputDataError(true);
    }
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
            ) : isValid ? (
              <span style={{ color: 'green' }}>
                {/* Isso aqui vai ser muito util caso o usuário esteja com a internet lenta
                e demore para redirecionar ela para o home */}
                Validando credenciais. Por favor, aguarde...
              </span>
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
              required='required'
            >
              E-mail
            </Input>
            <Input
              for='password'
              type='password'
              placeholder='Senha'
              onChange={({ target }) => setPassword(target.value)}
              required='required'
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
