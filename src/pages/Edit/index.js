import React, { useContext, useEffect, useState } from 'react';

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

// CONTEXT
import { EditContext } from '../../contexts/EditContext';

const Add = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const { naverId } = useContext(EditContext);

  const history = useHistory();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await api.get(`navers/${naverId}`).then((response) => {
      const newBirthdate = response.data.birthdate.split('-');
      const newAdmissiondate = response.data.admission_date.split('-');

      const newBirthdateDay = newBirthdate[2].slice(0, 2);
      const newAdmissiondateDay = newAdmissiondate[2].slice(0, 2);

      const formattedBirthdate = `${newBirthdate[0]}-${newBirthdate[1]}-${newBirthdateDay}`;
      const formattedAdmissiondate = `${newAdmissiondate[0]}-${newAdmissiondate[1]}-${newAdmissiondateDay}`;

      setName(response.data.name);
      setJob(response.data.job_role);
      setBirthdate(formattedBirthdate);
      setAdmissionDate(formattedAdmissiondate);
      setProject(response.data.project);
      setUrl(response.data.url);
    });
  };

  const editNaver = async () => {
    const newBirthdate = birthdate.split('-');
    const newAdmissiondate = admissionDate.split('-');

    const formattedBirthdate = `
    ${newBirthdate[2]}/${newBirthdate[1]}/${newBirthdate[0]}
    `;
    const formattedAdmissiondate = `
    ${newAdmissiondate[2]}/${newAdmissiondate[1]}/${newAdmissiondate[0]}
    `;

    api
      .put(`navers/${naverId}`, {
        name: name,
        job_role: job,
        birthdate: formattedBirthdate,
        admission_date: formattedAdmissiondate,
        project: project,
        url: url,
      })
      .then((response) => {
        setModalVisible(true);
        console.log(response);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    editNaver();
  };

  const handleClickBack = () => {
    return history.push('/home');
  };

  return (
    <Container>
      <Header />
      <Content>
        <form action='' onSubmit={handleSubmit}>
          <Back onClick={handleClickBack}>
            <RiArrowLeftSLine />
            <p>Editar Naver</p>
          </Back>
          <FormStyle>
            <Input
              for='name'
              type='text'
              placeholder={'Nome'}
              onChange={({ target }) => setName(target.value)}
              minLength={3}
              value={name}
            >
              Nome
            </Input>
            <Input
              for='job_role'
              type='text'
              placeholder={'Cargo'}
              onChange={({ target }) => setJob(target.value)}
              minLength={3}
              value={job}
            >
              Cargo
            </Input>
            <Input
              for='birthdate'
              type='date'
              onChange={({ target }) => setBirthdate(target.value)}
              value={birthdate}
            >
              Idade
            </Input>
            <Input
              for='admission_date'
              type='date'
              onChange={({ target }) => setAdmissionDate(target.value)}
              value={admissionDate}
            >
              Tempo de empresa
            </Input>
            <Input
              for='project'
              type='text'
              placeholder={'Projetos que participou'}
              onChange={({ target }) => setProject(target.value)}
              value={project}
            >
              Projetos que participou
            </Input>
            <Input
              for='url'
              type='text'
              placeholder={'Url do Naver'}
              onChange={({ target }) => setUrl(target.value)}
              minLength={5}
              value={url}
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
                handleClickBack();
              }}
            >
              <img src='/icons/close.svg' alt='Botão para fechar o modal' />
            </ButtonStyle>
            <h1>Naver Atualizado</h1>
            <p>Naver atualizado com sucesso!</p>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Add;
