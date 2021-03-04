import React from 'react';

// ICONS
import { RiArrowLeftSLine } from 'react-icons/ri';

// COMPONENTS
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';

// STYLES
import { Container, Content, Back } from './styles';

function Add() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Back>
            <RiArrowLeftSLine />
            <p>Adicionar Naver</p>
          </Back>
          <form action=''>
            <Input for='name' type='text' placeholder='Nome'>
              Nome
            </Input>
            <Input for='job' type='text' placeholder='Cargo'>
              Cargo
            </Input>
            <Input for='age' type='text' placeholder='Idade'>
              Idade
            </Input>
            <Input
              for='company-time'
              type='text'
              placeholder='Tempo de empresa'
            >
              Tempo de empresa
            </Input>
            <Input
              for='prjects'
              type='text'
              placeholder='Projetos que participou'
            >
              Projetos que participou
            </Input>
            <Input for='url' type='text' placeholder='URL da foto do Naver'>
              URL da foto do Naver
            </Input>
            <span></span>
          </form>
          <Button type='submit'>Salvar</Button>
        </Content>
      </Container>
    </>
  );
}

export default Add;
