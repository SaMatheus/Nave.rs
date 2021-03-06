import React, { useState } from 'react';

// AXIOS
import api from '../../services/api';

// COMPONENTS
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

// STYLES
import { Container, Content, FormStyle, Back } from './styles';

// ICONS
import { RiArrowLeftSLine } from 'react-icons/ri';

// ROUTER
import { useHistory } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState('Matheus Sá');
  const [job, setJob] = useState('Desenvoveldor');
  const [birthdate, setBirthdate] = useState('07-08-1998');
  const [admissionDate, setAdmissionDate] = useState('01-10-2020');
  const [project, setProject] = useState('Front-end Test');
  const [url, setUrl] = useState(
    'https://avatars.githubusercontent.com/u/38141771?v=4'
  );

  const history = useHistory();

  const createNaver = async () => {
    await api
      .post('navers/create', {
        job_role: job,
        admission_date: admissionDate,
        birthdate: birthdate,
        project: project,
        name: name,
        url: url,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
      .then((response) => console.log(response));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createNaver();
  };

  const handleClickBack = () => {
    history.push('/home');
  };

  return (
    <Container>
      <Header />
      <Content>
        <form action='' onSubmit={handleSubmit}>
          <Back onClick={handleClickBack}>
            <RiArrowLeftSLine />
            <p>Adicionar Naver</p>
          </Back>
          <FormStyle>
            <Input
              for='name'
              type='text'
              placeholder='Nome'
              onChange={({ target }) => setName(target.value)}
            ></Input>
            <Input
              for='job_role'
              type='text'
              placeholder='Cargo'
              onChange={({ target }) => setJob(target.value)}
            ></Input>
            <Input
              for='birthdate'
              type='date'
              placeholder='Idade'
              onChange={({ target }) => setBirthdate(target.value)}
            ></Input>
            <Input
              for='admission_date'
              type='date'
              placeholder='Tempo de empresa'
              onChange={({ target }) => setAdmissionDate(target.value)}
            ></Input>
            <Input
              for='project'
              type='text'
              placeholder='Projetos que participou'
              onChange={({ target }) => setProject(target.value)}
            ></Input>
            <Input
              for='url'
              type='text'
              placeholder='URL da foto do Naver'
              onChange={({ target }) => setUrl(target.value)}
            ></Input>
            <span></span>
            <Button type='submit'>Salvar</Button>
          </FormStyle>
        </form>
      </Content>
    </Container>
  );
};

export default Add;
