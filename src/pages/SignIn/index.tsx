import React from 'react'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import {Container, Content, Background} from './styles'


const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1> Faça seu logon</h1>
        <input placeholder='E-mail' />
        <input type='password' placeholder='Senha' />

        <button type="submit">Entrar</button>

        <a href="forget">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar Conta</a>
    </Content>

    <Background />
  </ Container>

)

export default SigIn