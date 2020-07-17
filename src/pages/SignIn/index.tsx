import React, { useRef, useCallback} from 'react'
import logoImg from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import {Container, Content, Background, AnimationContainer} from './styles'
import * as Yup from 'yup'
import {  Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { useAuth } from '../../hooks/AuthContext'
import { useToast} from '../../hooks/ToastContext'
import getValidationErrors from '../../util/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'

interface SifnInFormData{
  email: string;
  password: string;
}


const SigIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback( async (data: SifnInFormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail váido'),
        password: Yup.string().required('Senha obrigatória'),
      })

      await schema.validate(data, {
        abortEarly:false,

      });
      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/dashboard')
    } catch (err) {
      if(err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
          return
        }

      addToast({
        type:'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login'
      });
      
    }
  }, [signIn, addToast, history])

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder='E-mail' />
            <Input name="password" icon={FiLock} type='password' placeholder='Senha' />
            
            <Button type="submit">Entrar</Button>


            <a href="forget">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </ Container>
  )
}

export default SigIn