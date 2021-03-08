import React, { useEffect } from 'react';

// COMPONENTS
import Button from '../../components/Button';
import Header from '../../components/Header';

// STYLES
import { Content, Grid, Profile } from './styles';

// ROUTER
import { useHistory } from 'react-router-dom';

// AXIOS
import api from '../../services/api';

const Home = () => {
  const history = useHistory();

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    api
      .get('navers/index', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
      .then((response) => console.log(response.data));
  }, []);

  const handleClickToAdd = () => {
    history.push('/add');
  };

  const handleClickToEdit = () => {
    history.push('/edit');
  };

  return (
    <>
      <Header />
      <Content>
        <header>
          <h1>Navers</h1>
          <Button type='button' onClick={handleClickToAdd}>
            Adicionar Naver
          </Button>
        </header>
        <Grid>
          <Profile>
            <span></span>
            <h3>Nome do perfil</h3>
            <p>Profissão</p>
            <div>
              <button>
                <img src='/icons/bin.svg' alt='deletar' />
              </button>
              <button onClick={handleClickToEdit}>
                <img src='/icons/pencil.svg' alt='editar' />
              </button>
            </div>
          </Profile>
          <Profile>
            <span></span>
            <h3>Nome do perfil</h3>
            <p>Profissão</p>
            <div>
              <button>
                <img src='/icons/bin.svg' alt='deletar' />
              </button>
              <button onClick={handleClickToEdit}>
                <img src='/icons/pencil.svg' alt='editar' />
              </button>
            </div>
          </Profile>
          <Profile>
            <span></span>
            <h3>Nome do perfil</h3>
            <p>Profissão</p>
            <div>
              <button>
                <img src='/icons/bin.svg' alt='deletar' />
              </button>
              <button onClick={handleClickToEdit}>
                <img src='/icons/pencil.svg' alt='editar' />
              </button>
            </div>
          </Profile>
          <Profile>
            <span></span>
            <h3>Nome do perfil</h3>
            <p>Profissão</p>
            <div>
              <button>
                <img src='/icons/bin.svg' alt='deletar' />
              </button>
              <button onClick={handleClickToEdit}>
                <img src='/icons/pencil.svg' alt='editar' />
              </button>
            </div>
          </Profile>
        </Grid>
      </Content>
    </>
  );
};

export default Home;
