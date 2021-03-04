import React from 'react';

// COMPONENTS
import Button from '../../components/Button';
import Header from '../../components/Header';

// STYLES
import { Content, Grid, Profile } from './styles';

// ROUTER
import { Link } from 'react-router-dom';

function Home() {
  function handleClick() {
    console.log('Clicou');
  }
  return (
    <>
      <Header />
      <Content>
        <header>
          <h1>Navers</h1>
          <Link to='/add'>
            <Button type='button' onClick={handleClick}>
              Adicionar Naver
            </Button>
          </Link>
        </header>
        <Grid>
          <Profile>
            <span></span>
            <h3>Nome do perfil</h3>
            <p>Profissão</p>
            <div>
              <button onClick={handleClick}>
                <img src='/icons/bin.svg' alt='deletar' />
              </button>
              <button onClick={handleClick}>
                <img src='/icons/pencil.svg' alt='editar' />
              </button>
            </div>
          </Profile>
        </Grid>
      </Content>
    </>
  );
}

export default Home;
