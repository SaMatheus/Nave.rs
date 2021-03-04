import React from 'react';

// COMPONENTS
import Header from '../../components/Header';
import Form from '../../components/Form';

// STYLES
import { Container } from './styles';

function Add() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Header />
      <form action='' onSubmit={handleSubmit}>
        <Form
          valueBack='Voltar ao home'
          valueButton='Salvar'
          typeButton='submit'
        />
      </form>
    </Container>
  );
}

export default Add;
