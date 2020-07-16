import styled from 'styled-components';
import { shade } from 'polished';
import signUpBackgroudImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    
    h1 {
      margin-bottom: 24px;
    }
    
    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &::hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }
  > a {
    color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: color 0.2s;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')}
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroudImg}) no-repeat center;
  background-size: cover;
`;