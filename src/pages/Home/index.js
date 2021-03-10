import React, { useContext, useEffect, useState } from 'react';

// COMPONENTS
import Button from '../../components/Button';
import Header from '../../components/Header';

// STYLES
import {
  Content,
  Grid,
  Profile,
  ButtonStyle,
  Modal,
  ModalContent,
  ContentRight,
  DeleteModal,
  ModalDeleteContent,
  DeleteCompleteModal,
} from './styles';

// ROUTER
import { useHistory } from 'react-router-dom';

// AXIOS
import api from '../../services/api';

// CONTEXT
import { EditContext } from '../../contexts/EditContext';

const Home = () => {
  const history = useHistory();

  const [getData, setGetData] = useState(false);
  const [naverModalData, setNaverModalData] = useState([]);
  const [modalBirthdate, setModalBirthdate] = useState();
  const [modalAdmissiondate, setModalAdmissiondate] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteProfileVisible, setDeleteProfileVisible] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const [naversArray, setNaversArray] = useState([]);

  const { naverId, setNaverId } = useContext(EditContext);

  useEffect(() => {
    api
      .get('navers')
      .then((response) => {
        if (response.data.length !== 0) {
          setGetData(true);
          setNaverId('');
          return setNaversArray(response.data);
        } else {
          return setGetData(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getAge = (birthdate) => {
    // Data de hoje
    let dateNow = new Date();
    let dayNow = dateNow.getDate();
    let monthNow = dateNow.getMonth() + 1;
    let yearNow = dateNow.getFullYear();

    // Data de aniversário do Naver
    let birthdateDay = birthdate[2].slice(0, 2);
    let birthdateMonth = birthdate[1];
    let birthdateYear = birthdate[0];

    let age = yearNow - birthdateYear;

    if (
      monthNow < birthdateMonth ||
      (monthNow === birthdateMonth && dayNow < birthdateDay)
    ) {
      age--;
    }
    return setModalBirthdate(age < 0 ? 0 : age);
  };

  const getAdmissionDate = (initialDate) => {
    // Data de hoje
    let dateNow = new Date();
    let dayNow = dateNow.getDate();
    let monthNow = dateNow.getMonth() + 1;
    let yearNow = dateNow.getFullYear();

    // Data do inicio do Naver
    let InitialDay = initialDate[2].slice(0, 2);
    let InitialMonth = initialDate[1];
    let InitialYear = initialDate[0];

    let age = yearNow - InitialYear;

    if (
      monthNow < InitialMonth ||
      (monthNow === InitialMonth && dayNow < InitialDay)
    ) {
      age--;
    }
    return setModalAdmissiondate(age < 0 ? 0 : age);
  };

  const handleClickToOpenModal = (id) => {
    let naverId = id;
    setModalVisible(true);
    api.get(`navers/${naverId}`).then((response) => {
      const newBirthdate = response.data.birthdate.split('-');
      const newAdmissiondate = response.data.admission_date.split('-');

      getAge(newBirthdate);
      getAdmissionDate(newAdmissiondate);

      setNaverModalData(response.data);
    });
  };

  const handleDeleteConfirmation = async () => {
    await api.delete(`navers/${naverId}`);
  };

  return (
    <>
      <Content>
        <Header />
        <header>
          <h1>Navers</h1>
          <Button type='button' onClick={() => history.push('/add')}>
            Adicionar Naver
          </Button>
        </header>
        {getData ? (
          <Grid>
            {naversArray.map((naver, index) => {
              return (
                <Profile key={naver.id}>
                  <span
                    onClick={() => {
                      handleClickToOpenModal(naversArray[index].id);
                      setModalVisible(true);
                    }}
                    style={{ backgroundImage: `url(${naver.url})` }}
                  ></span>
                  <h3>{naver.name}</h3>
                  <p>{naver.job_role}</p>
                  <div>
                    <ButtonStyle
                      onClick={() => {
                        setModalVisible(false);
                        setDeleteProfileVisible(true);
                        setNaverId(naver.id);
                      }}
                    >
                      <img src='/icons/bin.svg' alt='deletar' />
                    </ButtonStyle>
                    <ButtonStyle
                      onClick={() => {
                        setNaverId(naver.id);
                        history.push('/edit');
                      }}
                    >
                      <img src='/icons/pencil.svg' alt='editar' />
                    </ButtonStyle>
                  </div>
                  {modalVisible && !deleteProfileVisible ? (
                    <Modal>
                      <ModalContent>
                        <ButtonStyle
                          onClick={() => {
                            setNaverModalData([]);
                            setModalVisible(false);
                          }}
                        >
                          <img
                            src='/icons/close.svg'
                            alt='Botão para fechar o modal'
                          />
                        </ButtonStyle>
                        <img src={naverModalData.url} alt='' />
                        <ContentRight>
                          <h1>{naverModalData.name}</h1>
                          <p>{naverModalData.job_role}</p>
                          <h3>Idade</h3>
                          <p>
                            {modalBirthdate <= 1
                              ? modalBirthdate + ' Ano'
                              : modalBirthdate + ' Anos'}
                          </p>
                          <h3>Tempo de empresa</h3>
                          <p>
                            {modalAdmissiondate <= 1
                              ? modalAdmissiondate + ' Ano'
                              : modalAdmissiondate + ' Anos'}
                          </p>
                          <h3>Projetos que realizou</h3>
                          <p>{naverModalData.project}</p>
                          <div>
                            <ButtonStyle
                              onClick={() => {
                                setNaverId(naverModalData.id);
                                setModalVisible(false);
                                setDeleteProfileVisible(true);
                              }}
                            >
                              <img src='/icons/bin.svg' alt='deletar naver' />
                            </ButtonStyle>
                            <ButtonStyle
                              onClick={() => {
                                setNaverId(naverModalData.id);
                                history.push('/edit');
                              }}
                            >
                              <img src='/icons/pencil.svg' alt='editar naver' />
                            </ButtonStyle>
                          </div>
                        </ContentRight>
                      </ModalContent>
                    </Modal>
                  ) : !modalVisible && deleteProfileVisible ? (
                    <DeleteModal>
                      {!deleteConfirmation ? (
                        <ModalDeleteContent>
                          <h1>Excluir Naver</h1>
                          <p>Tem certeza que deseja excluir este Naver?</p>
                          <div>
                            <Button
                              onClick={() => setDeleteProfileVisible(false)}
                            >
                              Cancelar
                            </Button>
                            <Button
                              onClick={() => {
                                setDeleteConfirmation(true);
                                setNaverId(naverModalData.id);
                                handleDeleteConfirmation();
                              }}
                            >
                              Excluir
                            </Button>
                          </div>
                        </ModalDeleteContent>
                      ) : deleteConfirmation ? (
                        <DeleteCompleteModal key={naverModalData.id}>
                          <ButtonStyle
                            onClick={() => {
                              setDeleteProfileVisible(false);
                              setDeleteConfirmation(false);
                              window.location.reload();
                            }}
                          >
                            <img
                              src='/icons/close.svg'
                              alt='Botão para fechar o modal de Naver excluido com sucesso'
                            />
                          </ButtonStyle>
                          <h1>Naver excluído</h1>
                          <p>Naver excluído com sucesso!</p>
                        </DeleteCompleteModal>
                      ) : (
                        ''
                      )}
                    </DeleteModal>
                  ) : (
                    ''
                  )}
                </Profile>
              );
            })}
          </Grid>
        ) : !getData || getData === [] ? (
          <h1
            style={{ fontSize: '32px', margin: '10% 0 0 32px', opacity: '0.5' }}
          >
            Aguardando Navers...
          </h1>
        ) : (
          ''
        )}
      </Content>
    </>
  );
};

export default Home;
