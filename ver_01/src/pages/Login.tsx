import { useState } from "react";
import { UserLogin } from '../api/UserApi';
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/Store'
import { Navigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { ButtonLogin, ButtonSignup, ButtonNormal, SmallButton, MediumButton, LargeButton } from "../components/ButtonStyled";

export const Container = styled.div`
    display:flex;
    width: 100%;
    align-items:center;
    justify-content: center;
    background: #f4f5f6;
`;

export const Main = styled.div`
  width: 63%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 40px 0;
  h1 {
    font-size:25px;
  }
  @media (max-width: 968px) {
    display: block;
  }
`;

const Body = styled.div`
  display: flex;
  gap: 30px;
`;

export const Box = styled.div`
  width: 520px;
  background: #ffffff;
  padding: 30px;
`;

export const BoxHeader = styled.div`
  h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.4;
    padding: 0 0 0 13px;
    border-left: 4px solid #26a24c;
    box-sizing: border-box;
  }
`;

const BoxBody = styled.div`
  margin-top: 30px;
  .registerHeader {
    font-size: 14px;
    span {
      display:block;
      margin-bottom: 10px;
    }
  }
  .registerBody {
    font-size: 12px;
    margin-bottom: 20px;
    span {
      display:block;
    }
  }
  .registerBottom {
    font-size: 12px;
    font-weight: 1000;
    div {
      margin-bottom: 20px;
    }
  }
`;

export const InputField = styled.div`
  display: flex;
  font-size: 14px;
  margin-top:40px;
  strong {
    margin: auto 0;
    width: 200px;
  }
  input {
    width: 300px;
    height: 50px;
    background: #fff;
    font-size: 13px;
    padding: 0 20px;
    border-radius: 4px;
    border: 1px solid #e1e6ea;
    box-shadow: none;
  }
`;

const Remember = styled.div`
  margin-top:60px;
  font-weight:700;
  font-size:11px;
  .remember {
    position: relative;
    .checked {
      position: absolute;
      color: white;
      background: black;
      left: 30%;
    }
    .nonCheck {
      position: absolute;
      left: 30%;
    }
    label {
      position: absolute;
      left: 36%;
      top: 2px;
    }
  }
`;

export const LinkButton = styled.span`
  font-size:11px;
  font-weight:700;
  color: #26a24c;
  a {
    color: #26a24c;
  }
  &:hover {
    cursor:pointer;
    text-decoration: underline;
  }
`;

const Information=styled.div`
  width: 90%;
  font-size:11px;
  font-weight:700;
  margin: 100px auto 0;
`;

export const BoxBottom = styled.div`
  margin-top: 35px;
  .forgot {
    margin: 35px 0 10px 0;
    text-align:center
  }
`;

const RegisterBox = styled.div`
  width: 437px;
  background: #ffffff;
  padding: 30px;
  font-weight: bold;
`

export const RegisterButton = styled.button`
  display:block;
  width: 286px;
  margin: 0 auto;
  padding: 1.3rem 0.5rem;
  background: #f86608;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size:16px;
  font-weight:700;
  transition: opacity 0.4s ease-out;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Login = () => {
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);
  const { t } = useTranslation();
  
  const handleLogin = () => {
    UserLogin(identifier, password,rememberLogin, navigate, dispatch)
  }
  const jwt = useSelector((state:RootState) => state.auth.CurrentUser?.jwt);
  if(jwt) {
    return <Navigate to="/member"/>;
  }
  const handleOpenWindow = (e:any) => {
    const baseUrl = window.location.origin;
    if(e.target.id == 'service') {
      window.open(`${baseUrl}/agree`, '_blank');
    } else {
      window.open(`${baseUrl}/information`, '_blank');
    }
  }
  return (
    <Container>
      <Main>
        <Header>
          <h1>{t('login.login')}</h1>
        </Header>
        <Body>
          <Box>
            <BoxHeader><h2>{t('login.registed_user')}</h2></BoxHeader>
            <BoxBody>
              <InputField>
                <strong>{t('login.email')}</strong>
                <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)}/>
              </InputField>
              <InputField>
                <strong>{t('login.password')}</strong>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </InputField>
              <Remember>
                <div className="remember">
                  <Icon icon={rememberLogin ? "mdi:checkbox-outline": "mdi:checkbox-blank-outline"} rotate={2} hFlip={true} vFlip={true} width={20} height={20} className={rememberLogin ? "checked" : "nonCheck"}
                  onClick={() => setRememberLogin(!rememberLogin)} id="rememberLogin"/>
                  <label onClick={() => setRememberLogin(!rememberLogin)}>{t('login.remember_login')}</label>
                </div>
              </Remember>
              <Information>
                <div className="information">
                  「<LinkButton id="service" onClick={(e) => handleOpenWindow(e)}>{t('login.service')}</LinkButton>・<LinkButton id="information" onClick={(e) => handleOpenWindow(e)}>{t('login.information')}</LinkButton>」{t('login.agree')}
                </div>
              </Information>
            </BoxBody>
            <BoxBottom>
              <LargeButton onClick={() => handleLogin()} style={{margin:'0 auto'}}><ButtonLogin ><span>{t('login.login_button')}</span></ButtonLogin></LargeButton>
              <div className="forgot">
                <Link to="/reset-password"><LinkButton>{t('login.forgot_password')}</LinkButton></Link>
              </div>
            </BoxBottom>
          </Box>
          <RegisterBox>
            <BoxHeader><h2>{t('login.register')}</h2></BoxHeader>
            <BoxBody>
              <div className="registerHeader">
                <span>{t('login.register_start')}</span>
                <span>{t('login.workport_member')}</span>
              </div>
              <div className="registerBody">
                <span>{t('login.naiyou1')}</span>
                <span>{t('login.naiyou2')}</span>
              </div>
              <div className="registerBottom">
                <div>
                  <span>{t('login.naiyou3')}</span>
                </div>
                <ul>
                  <li>{t('login.koumoku1')}</li>
                  <li>{t('login.koumoku2')}</li>
                  <li>{t('login.koumoku3')}</li>
                  <li>{t('login.koumoku4')}</li>
                  <li>{t('login.koumoku5')}</li>
                </ul>
              </div>
            </BoxBody>
            <BoxBottom>
            <Link to="/register"><MediumButton style={{margin: '0 auto'}}><ButtonSignup>{t('login.register_button')}</ButtonSignup></MediumButton></Link>
            <SmallButton><ButtonNormal><Link to='/'><span>千葉</span></Link></ButtonNormal></SmallButton>
            </BoxBottom>
          </RegisterBox>
        </Body>
      </Main>
    </Container>
  )
}

export default Login