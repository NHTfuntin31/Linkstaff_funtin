import { useState } from "react";
import { UserLogin } from '../api/UserApi';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { useDispatch } from "react-redux";

const LoginContainer = styled.div`
    display:flex;
    width: 100%;
    height:82vh;
    align-items:center;
    justifycontent: center;
    background: #f4f5f6;
`;

const LoginBox = styled.div`
    width: 30%;
    margin: 0 auto;
    padding: 30px 30px;
    display:flex;
    flex-direction: column;
    text-align: center;
    background: #fff;
`;

const LoginBoxHeader = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: purple;
    margin-bottom: 10px
`;

const InputField = styled.div`
    position: relative;
    margin-bottom : 20px;
    strong {
      display: block;
      text-align: left;
      font-size: 15px;
    }
    input {
      width: 100%;
      padding: 0.75rem 0.75rem;
      border-radius: 5px;
      border: 1px solid gray
    }
    svg {
      position: absolute;
      top: 50%;
      right: 3%;
    }
`;

const Register = styled.div`
    font-size: 15px;
    margin: 10px 0;
    a {
      &:hover {
        text-decoration: underline
      }
    }
`

const LoginButton = styled.button`
    width: 25%;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    background: purple;
    color: white;
    border: none;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
`

const Login = () => {
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    UserLogin(identifier, password, navigate, dispatch)
  }
  const handleChangeType = () => {
    setType(!type);
  }
  return (
    <LoginContainer>
      <LoginBox>
        <LoginBoxHeader>Login</LoginBoxHeader>
        <InputField>
          <strong>UserName</strong>
          <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="Enter UserName..."/>
        </InputField>
        <InputField>
          <strong>Password</strong>
          <input type={type ? "text": "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password..."/>
          <Icon icon={type ?"mdi:eye": "heroicons:eye-slash-solid"} hFlip={true} vFlip={true} height={20} width={20} onClick={()=> handleChangeType()}/>
        </InputField>
        <Register>
          <span>You don't have an account?</span><a href="">Register</a>
        </Register>
        <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
      </LoginBox>
    </LoginContainer>
  )
}

export default Login