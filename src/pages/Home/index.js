import React, { useEffect, useState } from 'react';

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

const Home = () => {
  const history = useHistory();

  const [getData, setGetData] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteProfileVisible, setDeleteProfileVisible] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const [naversArray, setNaversArray] = useState([]);
  const [naverModalData, setNaverModalData] = useState([]);
  const [naverIdToDelete, setNaverIdToDelete] = useState();

  useEffect(() => {
    api
      .get('navers')
      .then((response) => {
        setGetData(true);
        setNaversArray(response.data);
      })
      .catch((error) => {
        setGetData(false);
        console.log(error);
      });
  }, []);

  const handleClickToOpenModal = (id) => {
    let naverId = id;
    setModalVisible(true);
    api
      .get(`navers/${naverId}`)
      .then((response) => setNaverModalData(response.data));
  };

  const handleDeleteConfirmation = async () => {
    await api.delete(`navers/${naverIdToDelete}`);
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
                        setNaverIdToDelete(naver.id);
                      }}
                    >
                      <img src='/icons/bin.svg' alt='deletar' />
                    </ButtonStyle>
                    <ButtonStyle onClick={() => history.push('/edit')}>
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
                          <p>{naverModalData.birthdate}</p>
                          <h3>Tempo de empresa</h3>
                          <p>{naverModalData.admission_date}</p>
                          <h3>Projetos que realizou</h3>
                          <p>{naverModalData.project}</p>
                          <div>
                            <ButtonStyle
                              onClick={() => {
                                setNaverIdToDelete(naverModalData.id);
                                setModalVisible(false);
                                setDeleteProfileVisible(true);
                              }}
                            >
                              <img src='/icons/bin.svg' alt='deletar naver' />
                            </ButtonStyle>
                            <ButtonStyle onClick={() => history.push('/edit')}>
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
                                setNaverIdToDelete(naverModalData.id);
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
        ) : !getData ? (
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
