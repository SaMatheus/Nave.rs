import React, { useState } from 'react';

// AXIOS
import api from '../../services/api';

// COMPONENTS
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

// STYLES
import {
  Container,
  Content,
  FormStyle,
  Back,
  ButtonStyle,
  Modal,
  ModalContent,
} from './styles';

// ICONS
import { RiArrowLeftSLine } from 'react-icons/ri';

// ROUTER
import { useHistory } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [birthdate, setBirthdate] = useState('01/02/2020');
  const [admissionDate, setAdmissionDate] = useState('01/02/2020');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const clearData = () => {
    setName('');
    setJob('');
    setBirthdate('01/02/2020');
    setAdmissionDate('01/02/2020');
    setProject('');
    setUrl('');
  };

  const createNaver = async () => {
    const newAdmissionDate = new Date(admissionDate);
    const newBirthdate = new Date(birthdate);

    const AdmissionUpdate = new Intl.DateTimeFormat().format(newAdmissionDate);
    const birthUpdate = new Intl.DateTimeFormat().format(newBirthdate);

    await api
      .post('navers/', {
        job_role: job,
        admission_date: AdmissionUpdate,
        birthdate: birthUpdate,
        project: project,
        name: name,
        url: url,
      })
      .then((response) => {
        clearData();
        setModalVisible(true);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNaver();
  };

  const handleClickBack = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return history.push('/home');
    } else {
      console.log('Token não encontrado, finalizando sessão!');
      return history.push('/');
    }
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
              minLength={3}
              required='required'
            >
              Nome
            </Input>
            <Input
              for='job_role'
              type='text'
              placeholder='Cargo'
              onChange={({ target }) => setJob(target.value)}
              minLength={3}
              required='required'
            >
              Cargo
            </Input>
            <Input
              for='birthdate'
              type='date'
              placeholder='Idade'
              onChange={({ target }) => setBirthdate(target.value)}
              required='required'
            >
              Idade
            </Input>
            <Input
              for='admission_date'
              type='date'
              placeholder='Tempo de empresa'
              onChange={({ target }) => setAdmissionDate(target.value)}
              required='required'
            >
              Tempo de empresa
            </Input>
            <Input
              for='project'
              type='text'
              placeholder='Projetos que participou'
              onChange={({ target }) => setProject(target.value)}
              required='required'
            >
              Projetos que participou
            </Input>
            <Input
              for='url'
              type='text'
              placeholder='URL da foto do Naver'
              onChange={({ target }) => setUrl(target.value)}
              minLength={5}
              required='required'
            >
              URL da foto do Naver
            </Input>
            <span></span>
            <Button type='submit'>Salvar</Button>
          </FormStyle>
        </form>
      </Content>
      {modalVisible && (
        <Modal>
          <ModalContent>
            <ButtonStyle
              onClick={() => {
                setModalVisible(false);
              }}
            >
              <img src='/icons/close.svg' alt='Botão para fechar o modal' />
            </ButtonStyle>
            <h1>Naver criado</h1>
            <p>Naver criado com sucesso!</p>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Add;
