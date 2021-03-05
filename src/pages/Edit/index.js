import React from 'react';

// COMPONENTS
import Header from '../../components/Header';

// STYLES
import { Container } from './styles';

function Edit() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Header />
      <form action='' onSubmit={handleSubmit}></form>
    </Container>
  );
}

export default Edit;
